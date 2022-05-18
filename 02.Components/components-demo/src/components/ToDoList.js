import React from 'react';
import ToDoLi from './ToDoLi';

export default function TodoList() {
    const todoState = React.useState(['Clean your room', 'Go shopping', 'Learn React']);

    const todos = todoState[0];
    const setTodos = todoState[1];

    const counterState = React.useState(0);
    let counter = counterState[0];
    const setCounter = counterState[1];

    console.log(todos);
    console.log(setTodos);

    // const firstTask = 'Clean your room';
    // const firstColor = 'pink';
    // const person = {
    //     name : 'Pesho',
    //     age : '23'
    // }

    function add() {
        setCounter(++counter)
    }

  return (
    //<> without import
    <React.Fragment>
      <h2>Tasks</h2>
      <ul>
        {/* <ToDoLi data="Clean your room"/> */}
        {/* <ToDoLi data="Learn React"/> */}
        {/* <ToDoLi color={firstColor}>{firstTask}</ToDoLi> */}
        {/* <ToDoLi person = {person}>Learn React</ToDoLi> */}
        {todos.map((v) => <ToDoLi>{v}</ToDoLi>)}
      </ul>
      <h3>Counter:</h3>
      <p>{counter}</p>
      <button onClick={add}>Modify</button>
    </React.Fragment>
    //</>
  );
}
