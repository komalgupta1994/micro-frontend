import faker from 'faker';

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart`;

    el.innerHTML = cartText;
}


// Isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if (el) {
        mount(el);
    }
}

// Conatiner
export {mount};