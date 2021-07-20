
import { useState } from "react";
import InputForAddToDo from "./components/InputToAddToDo";
import DisplayList from "./components/DisplayList";
import  todos from './utils'



const App = () => {
  const [ todosList, setTodos ] = useState(todos)
  const [activityToDo, setActivityToDo] = useState('')


  const archivedTodos = todosList.filter(todo => todo.isArchived)
  const notArchivedTodos = todosList.filter(todo => !todo.isArchived)

  const handleActivityToDoChange = (event)  => {
    setActivityToDo(event.target.value)
  }

  const addToToDoList = (event) => {
    event.preventDefault()
    const thing = {
      id: todosList.length,
      title: activityToDo,
      isDone: false,
      isArchived: false
    }

    setTodos(todosList.concat(thing))
    setActivityToDo('')
  }


  return (
    <div className="main__wrapper container">
      <h1 className="main__title">TODO App</h1>
      <i className="main__subtitle">Here you can store all the things you need to complete</i>
      <hr/>
      <InputForAddToDo
        activityToDo={activityToDo}
        handleActivityToDoChange={handleActivityToDoChange}
        addToToDoList={addToToDoList}>
      </InputForAddToDo>

      <hr/>
      <DisplayList 
        todos={todosList}
        filteredTodos={notArchivedTodos}
        setTodos={setTodos} 
        listTitle="ToDo List">
      </DisplayList>

      <hr/>
      <DisplayList
        todos={todosList} 
        filteredTodos={archivedTodos}
        setTodos={setTodos}
        listTitle="Archived list">
      </DisplayList>
    </div>
  );
};

export default App;
