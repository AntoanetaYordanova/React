// import {useEffect} from 'react';
import './TodoItem.css'
import styles from './TodoItemModule.module.css'

export default function ToDoLi({id, content, onDelete, onClick, isDone}) {
    // useEffect(() => {
    //     console.log(props.id + ' - Monunted');
    //     return () => console.log(props.id + ' - Unmounted');
    // }, [])
    return(
        <>
            <li className={isDone ? 'done' : ''}  onClick={() => onClick(id)}>{content}</li>
            {/* <li className={styles.liColorExample} onClick={() => onClick(id)}>{content}</li> */}
            <button onClick={() => onDelete(id)}>X</button>
        </>
    )
}