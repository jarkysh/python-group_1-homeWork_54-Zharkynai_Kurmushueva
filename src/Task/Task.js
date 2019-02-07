import React, {Component} from 'react';
import './Task.css';
//import AddTaskForm from "./AddTaskForm";


class Task extends Component {
     render() {
        return (
            <div className="task">
                <h1 className="h1" >{this.props.name} </h1>
                <p className="text-primary">{this.props.dateTime}</p>
                <p><input
                    type="text"
                    value={this.props.name}
                    onChange={this.props.onChangeName}
                /></p>
                <p>{this.props.children}</p>
                <p className="status"><input type="checkbox" value="Finished"/>Finished</p>
                <img alt="Delete" onClick={this.props.onRemoveTask} className='del' src= 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-icon%2Ftrash-can_318-41524.jpg&f=1'></img>

            </div>
        )
    }
}
export default Task

