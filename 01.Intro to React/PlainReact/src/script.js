let rootEl = document.getElementById('root');

// let reactEl = React.createElement('header', {}, 
//     React.createElement('h1', {}, 'Hello React!'),
//     React. createElement('h2', {}, 'The best framework')
// );

let reactEl = <header>
    <h1>Hello JSX</h1>
    <h2>The best framework</h2>
</header>

let root = ReactDOM.createRoot(rootEl);

root.render(reactEl);

// ReactDOM.render(reactEl, rootEl);