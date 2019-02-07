import React from 'react';



function AddTaskForm(props) {
    return <form className="addTaskForm">
        <input type="text" name="name" value={props.task.name} onChange={props.onChangeInput}/>
        <input type="date" name="dateTime" value={props.task.dateTime} onChange={props.onChangeInput}/>
         <input type="text" name="text" value={props.task.text} onChange={props.onChangeInput}/>
         <button disabled={props.isAddButtonDisabled} type="submit" onClick={props.onAddTask}>Добавить</button>
    </form>
}



export default AddTaskForm;