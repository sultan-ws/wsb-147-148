// let a;
// let b;

// setTimeout(()=>{
//     a = 10;
//     b = 20;
// },0);

// console.log(a +b);

const api = 'https://dummyjson.com/products';

const readData = async () => {
    try {
        const response = await fetch(api);
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
};

readData();

// fetch(api)
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// });