import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

// Running insolation
if (process.env.NODE_ENV === 'development') {
    const ele = document.querySelector('#marketing-isloation');

    if (ele) {
        mount(ele);
    }
}

// Running from container
export { mount };