import {mount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';

console.log('container with cart');

mount(document.querySelector('#container-products'));
cartMount(document.querySelector('#container-cart'));