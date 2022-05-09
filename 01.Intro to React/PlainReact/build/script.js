var rootEl = document.getElementById('root');

// let reactEl = React.createElement('header', {}, 
//     React.createElement('h1', {}, 'Hello React!'),
//     React. createElement('h2', {}, 'The best framework')
// );

var reactEl = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello JSX'
    ),
    React.createElement(
        'h2',
        null,
        'The best framework'
    )
);

var root = ReactDOM.createRoot(rootEl);

root.render(reactEl);

// ReactDOM.render(reactEl, rootEl);