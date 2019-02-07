import React, {Component} from 'react';
import './App.css';
import Task from './Task/Task.js';
import AddTaskForm from './AddTaskForm/AddTaskForm';


class App extends Component {
    state = {
        tasks: [
            {id: 1, name: 'Купить книгу',  dateTime: 20190201, text: 'Идти в книжный магазин,купить Python + django'},
            {id: 2, name: 'Приготовить обед', dateTime: 20190301,  text: 'Приготовить к обеду что нибудь вкусненькое'},
            {id: 3, name: 'Помогать с уроками ребенка', dateTime: 20190401 , text: 'Доделать задание до 20 часов'}
        ],
        currentTask: {name: '', dateTime: '',  text: ''},
        showTasks: true

    };


    changeName = (id, event) => {
        console.log(event);

        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        let task = {
            ...this.state.tasks[taskId],
            name: event.target.value
        };

        let tasks = [...this.state.tasks];
        tasks[taskId] = task;

        this.setState({
            ...this.state,
            tasks
        })
    };



    removeTask = (id) => {
        let taskId = this.state.tasks.findIndex(task => {
            return task.id === id;
        });

        const tasks = [...this.state.tasks];
        tasks.splice(taskId, 1);

        this.setState({
            ...this.state,
            tasks
        });
    };


    getTasks = () => {
        if (this.state.tasks) {
            return <div>
                { this.state.tasks.map((task) => {
                        return <Task
                            key={task.id}
                            name={task.name}
                            date={task.dateTime}
                            text={task.text}
                            onChangeName={(event) => this.changeName(task.id, event)}
                            onRemoveTask={() => this.removeTask(task.id)}
                        >
                            {task.dateTime} :  {task.text}
                        </Task>;
                    })
                }
            </div>
        } else {
            return null;
        }
    };

    changeTaskInput = (event) => {
        const name = event.target.name;
        let value = event.target.value;
        if(name==='date') {
            if (value.length > 0) value = parseInt(value);
        }
        let currentTask = {
            ...this.state.currentTask,
            [name]: value
        };
        this.setState({
            ...this.state,
            currentTask
        });
    };

    addTask = (event) => {
        event.preventDefault();
        let task = {...this.state.currentTask};
        const now = new Date();
        task.id = now.getTime();
        let tasks = [...this.state.tasks, task];
        this.setState({
            ...this.state,
            tasks,
            currentTask: {name: '', text: ''}
        });
    };



 render() {
        console.log(this.state);
        return (
            <div className="App">
                    <h2>Добавить задание</h2>
                    <AddTaskForm
                        task={this.state.currentTask}
                        onChangeInput={this.changeTaskInput}
                        onAddTask={this.addTask}
                         />

                {this.getTasks()}

            </div>
        );
    }
}




export default App;
