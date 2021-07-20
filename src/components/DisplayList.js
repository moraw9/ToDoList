import React from 'react'
import SingleToDo from './SingleToDo'

const DisplayList =({todos,setTodos, listTitle, filteredTodos}) => {

    const deleteThing = (thing) => () => {
      const newTodoList = todos.filter(todo => todo.id !== thing.id)
      console.log(newTodoList)
      setTodos(newTodoList)
    }
    const archiveThing =(thing) => () => {
      const newTodoList = todos.map( todo => todo.id !== thing.id ? todo : {...thing, isArchived: !thing.isArchived })
      setTodos(newTodoList)
    }
    const setThingDone = (thing) => () => {
      const newTodoList = todos.map( todo => todo.id !== thing.id ? todo : {...thing, isDone: !thing.isDone })
      setTodos(newTodoList)
    }
    return(
      <div className="panel">
        <div  className={`panel-heading ${filteredTodos[0]?.isArchived? '--archived': '--todo'}`} >{listTitle}</div>
        <ul className="list-group panel-body">
          {filteredTodos
          .map( (todo, index) => 
            <SingleToDo 
              key={index} 
              todo={todo} 
              deleteThing={deleteThing(todo)} 
              archiveThing={archiveThing(todo)} 
              setThingDone={setThingDone(todo)}
              index={index+1}>
            </SingleToDo>)}
        </ul>
      </div>
    )
  }
export default DisplayList