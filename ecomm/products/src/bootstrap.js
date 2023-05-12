import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 3; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>` 
    }

    el.innerHTML = products;
}

// Context Situation #1
// where we need to run app in isolation

if (process.env.NODE_ENV === 'development' && document.querySelector('#dev-products')) {
    mount(document.querySelector('#dev-products'));
}

// Context Situation #2
// where we need to run app through Container and there is no guarntee, that element exists in container

export { mount };