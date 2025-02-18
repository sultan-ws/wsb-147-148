const names = ['arjuna', 'ravi', 'siddhartha', 'uttam'];

const vowels = ['a', 'e', 'i', 'o', 'u'];

let ans = [];

for(let i = 0; i < names.length; i++) {
    let cuurentName = names[i];
    if(vowels.includes(cuurentName[0]) && cuurentName.length > 5) {
        ans.push(cuurentName)
    }
};

console.log(ans)





const arr = [
    {
        firstname:'john',
        lastname:'doe',
        age: 25
    },
    {
        firstname: 'janny',
        lastname: 'wick',
        age: 30
    }
];

const newUser = {
    firstname: 'alice',
    lastname: 'stane',
    age: 20
}


const newArr = [...arr, {...newUser}];

let n = 0;

for(let i = 0; i < newArr.length; i++) {
    n += newArr[i].age, 4;
}

console.log(n);


const arrN = [2, 1, 4, 6, 2, 1, 6, 8, 1];

const [a, b, c, d, ...nextN] = arrN;

const finalN = [...arrN, a, b, c, d];


// sum of finalN

