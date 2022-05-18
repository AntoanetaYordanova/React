const ToDoLi = (props) => {
    // return <li>{props.data}</li>
    return <li style={{color: props.color}}> {props.person?.name} {props.person?.name ? '-' : undefined} {props.children}</li>
};

export default ToDoLi;