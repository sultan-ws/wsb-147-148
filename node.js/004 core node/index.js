// const data = require('./app');
// import data from './app.js';

// import { a, b, c } from "./app.js";

// const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data);
// }

// getData();

// console.log(a);