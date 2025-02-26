let a, b;

const delay = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            a = 10;
            b = 20;
            resolve('hello')
        }, 1000);

        
    });
};

delay().then((message)=>{
    console.log(a + b);
})
.catch((error)=>{
    console.log(error)
})


// delay();


// let a;
// let b;

// setTimeout(()=>{
//     a = 10;
//     b = 20;
// },0);

// console.log(a +b);

// const api = 'https://dummyjson.com/products';

// const readData = async () => {
//     try {
//         const response = await fetch(api);
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
// };

// readData();

// fetch(api)
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// });