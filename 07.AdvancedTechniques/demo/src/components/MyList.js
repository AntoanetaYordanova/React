import isAuth from "../hocs/isAuth";

const MyList = () => {
    return (
        <ul>
            <li>Item1</li>
            <li>Item2</li>
            <li>Item3</li>
        </ul>
    );
};

export default isAuth(MyList);
