
// 1.) 

// const arr = [1, 2, 3, 4, 5];
// const result = arr.map((value, index) => {
//     return value * 2;
// }).filter((value, index) => {
//     return value > 4;
// });

// console.log(result)

// 2.)
// const arr = [1,2,3,4,5];
// const arr2 = arr.splice(0,4,1);
// const arr3 = arr2.map((v,i)=>{
//     return v*i
// });

// const result = arr3.reduce((acc, v) => acc + v, 0);

// console.log(result)

// 3.) 
// const arr = [10,20,30,40,50,60];
// for(let i = arr.length - 1; i >= 0; i--) {
//     arr[i] = i;
// };
// console.log(arr)

// 4.) 
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = arr[i] * 2;
//     }
// };

// console.log(arr)

// 5.)
// const arr = [10,20,30,40,50,60,70,80];
// let result = 0;
// for(let i = 0; i < arr.length; i++) {
//     result += arr[i]**0;
// };

// console.log(result)

// 6.)
// const numbers = [5, 10, 15, 20, 25];
// const result = numbers.map((num) => num - 5).filter((num) => num > 5);
// console.log(result);

// 7.)
// const arr = [7, 14, 21, 28, 35];
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr[i] = i * 3;
// }
// console.log(arr);

// 8.)
// const arr = [3, 6, 9, 12, 15];
// const arr2 = arr.splice(1, 3, 4);
// const result = arr2.reduce((acc, num) => acc + num, 0);
// console.log(result);

// 9.)
// const arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i] ** 2;
// }
// console.log(result);

// 10.)
// const arr = [10, 20, 30, 40, 50];
// const newArr = arr.map((v, i) => i * 5);
// console.log(newArr);

// 11.)
// const arr = [100, 200, 300, 400, 500];
// arr.splice(1, 3);
// console.log(arr.length);

// 12.)
// const arr = [1, 2, 3, 4, 5];
// const result = arr.reduce((acc, num) => acc * num, 1);
// console.log(result);

// 13.)
// const arr = [12, 45, 67, 23, 89, 34];
// const result = arr.reduce((acc, num) => (num > acc ? num : acc), arr[0]);
// console.log(result);

// 14.)
// const arr1 = [2, 4, 6, 8];
// const arr2 = [1, 3, 5, 7];

// const arr3 = [...arr1, ...arr2];
// const result = arr3
//   .filter(num => num % 2 !== 0)
//   .map(num => num ** 2)
//   .reduce((acc, num) => acc + num, 0);

// console.log(result);

// 15.)
// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   const arr2 = arr.flat();
//   arr2.splice(2, 3, ...[10, 11, 12]);
  
//   const result = arr2.reduce((acc, num, index) => {
//     return index % 2 === 0 ? acc + num : acc - num;
//   }, 0);
  
//   console.log(result);