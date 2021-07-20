import React from 'react'

const SingleToDo =({todo, deleteThing, archiveThing, setThingDone, index }) => (
  <li className={ `list-group-item ${todo.isDone? '--done': ''}` }>
    <div className={ `list-number ${todo.isArchived? '--archived': '--todo'}` }>{index}</div>
    <div className="text-wrapper" onClick={setThingDone}>
      {todo.isDone ? <del>{todo.title}</del> : <div>{todo.title}</div>}
    </div>
    <span >
      <button type="button" className="btn delete-btn" onClick={deleteThing}>delete</button>
      <button type="button" className="btn archive-btn" onClick={archiveThing}>archive</button>
    </span>
  </li>
)

export default SingleToDo