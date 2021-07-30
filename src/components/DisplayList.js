import React from 'react'
import SingleToDo from './SingleToDo'
import { useSelector, useDispatch } from "react-redux";
import { setTodos, deleteThing as deleteThingRedux, archiveThing as archovedThingRedux, setThingDone as setThingDoneRedux}  from '../features/todoListMeanger/todoListMenagerSlice'

const DisplayList =({todos,setTodos, listTitle, filteredTodos}) => {

  const dispatch = useDispatch()

    const deleteThing = (thing) => () => {
      dispatch(deleteThingRedux(thing))
    }
    const archiveThing =(thing) => () => {
      dispatch(archovedThingRedux(thing))
    }
    const setThingDone = (thing) => () => {
      dispatch(setThingDoneRedux(thing))
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