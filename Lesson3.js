// function isPalindrome(word) {
//     let simpleWord = word.toLowerCase().replaceAll(" ", "");
//     return Array.from(simpleWord).reverse().join("") === simpleWord;
// }

// console.log(isPalindrome("Кони топот инок"));
// console.log(isPalindrome("казак"));
// console.log(isPalindrome("Мухи и их ум"));

function generateArr(n){
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(Math.round( Math.random() * 100 ));
    }

    return newArr;
}

function isUnique1(arr) {
    let newArr = [];

    arr.forEach((element, index) => {
        let firstIndex = arr.indexOf(element, 0);
        let lastIndex = arr.indexOf(element, index + 1);
        if (firstIndex === index && lastIndex === -1){
            newArr.push(element);
        };
    });

    return newArr;
}

function isUnique2(arr) {
    let newArr = Array.from(arr);

    newArr.forEach((element, index) => {
        newArr.forEach((element2, index2) => {
            if (element === element2 && index !== index2) {
                newArr.splice(index2, 1, null);
                newArr.splice(index, 1, null);
            };
        })
    });

    return newArr.filter(el => el !== null);
}

function isUnique3(arr) {
    let newArr = [];
    let filterArr = [];

    arr.forEach(element => {
        if (!newArr.includes(element))
            newArr.push(element);
        else
            filterArr.push(element);
    });

    return newArr.filter(el => !filterArr.includes(el));
}

let arr1 = generateArr(100);
let time = Date.now();
console.log(isUnique1(arr1));
console.log("time of 1 method (ms):", Date.now() - time)
time = Date.now();
console.log(isUnique2(arr1));
console.log("time of 2 method (ms):", Date.now() - time)
time = Date.now();
console.log(isUnique3(arr1));
console.log("time of 3 method (ms):", Date.now() - time)