//#region Tests with object and console
myObject = {
    name: "Женя",
    age: 22,
    job: {
        profession: "Разработчик",
        experience: 1
    }
};

console.log(myObject.name);
console.dir(myObject);
console.table(myObject);
//#endregion

//#region Tests with array
function ExchangeArr(cb)
{
    let newArray = [];

    for(let i = 0; i < this.length; i++)
    {
        newArray.push(cb(this[i], i, this));
    }

    return newArray;
}

let myArray = [1, 2, 3, 4.5];
myArray.ExchangeArr = ExchangeArr;
let entriesMyArray = myArray.entries();

console.log(myArray);
console.dir(myArray);
console.table(myArray);
console.log(ExchangeArr);
console.dir(ExchangeArr);
console.table(ExchangeArr);

console.log("myArray.ExchangeArr(i => i * 2 + i / 2) == ", myArray.ExchangeArr(i => i * 2 + i / 2));

console.log(`myArray.at(-1) ==> ${myArray.at(-1)} == myArray[myArray.length - 1]`);

console.log("myArray.concat(myArray.ExchangeArr(e => e + 2)) = ", myArray.concat(myArray.ExchangeArr(e => e + 2)));

console.log(entriesMyArray);
console.log(entriesMyArray.next().value);

console.log("myArray.every(e => e > 2 && e < 10) = ", myArray.every(e => e > 2 && e < 10));
console.log("myArray.every(e => e > 0 && e < 10) = ", myArray.every(e => e > 0 && e < 10));

myArray.fill(3, -3, -1);
console.log("myArray.fill(3, -3, -1) = ", myArray);

let newArray = myArray.filter(e => e !== 3);
console.log("myArray.filter(e => e > 2) = ", newArray);


//#endregion