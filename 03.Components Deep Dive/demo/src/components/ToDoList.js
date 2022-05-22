import ToDoLi from "./TodoItem"

export default function ToDoList() {
    const todos = [
        { id : 1, content: 'Clean my room'},
        { id : 2, content: 'Wash the dishes'},
        { id : 3, content: 'Go to the gym'}
    ]
    return(
        <ul>
            {todos.map(x => <ToDoLi  key={x.id} props = {x}/>)}
        </ul>
    )
}