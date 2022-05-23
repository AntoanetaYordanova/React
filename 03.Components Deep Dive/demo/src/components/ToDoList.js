import ToDoLi from './TodoItem';
import { useState, useEffect } from 'react';
import uniqId from 'uniqid';

const API_URL = 'https://happymindapi.herokuapp.com/'

export default function ToDoList() {
    const [todos, setTodos] = useState([
        { id: uniqId(), content: 'Clean my room', isDone: false },
        { id: uniqId(), content: 'Wash the dishes', isDone: false },
        { id: uniqId(), content: 'Go to the gym', isDone: false },
    ]);

    const addItem = (e) => {
        const todo = {
            id: uniqId(),
            content: e.target.value,
            isDone: false,
        };
        setTodos((oldTodos) => [...oldTodos, todo]);
    };

    const deleteTodoItemClickHandler = (id) => {
        setTodos((oldTodos) => oldTodos.filter((x) => x.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos((oldTodos) => {
            const selectedTodo = oldTodos.find((x) => x.id === id);
            const toggledTodo =  {...selectedTodo, isDone : !selectedTodo.isDone}
            const selectedTodoIndex = todos.indexOf(selectedTodo);
            const newTodos = [...oldTodos.slice(0, selectedTodoIndex), toggledTodo, ...oldTodos.slice(selectedTodoIndex + 1)];
            return newTodos
        });
    };

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(API_URL + 'articles')
        .then(response => response.json())
        .then(result => setArticles(result))
        .catch(err => console.log(err));
        console.log('Mounted');
    }, []);

    console.log(articles);
    return (
        <>
            <ul>
                <input type="text" onBlur={addItem} />
                {todos.map((x) => (
                    <ToDoLi
                        key={x.id}
                        id={x.id}
                        content={x.content}
                        onDelete={deleteTodoItemClickHandler}
                        onClick={toggleTodoItemClickHandler}
                        isDone = {x.isDone}
                    />
                ))}
            </ul>
        </>
    );
}
