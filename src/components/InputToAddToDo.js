import React from 'react'

const InputForAddToDo =({activityToDo, handleActivityToDoChange, addToToDoList}) => {
    return(
      <form onSubmit={addToToDoList}>
        <input className="form-input form-control" value={activityToDo} onChange={handleActivityToDoChange}></input>
        <button className="btn btn-primary" type="submit">Add Todo</button>
      </form>
    )
  }

export default InputForAddToDo