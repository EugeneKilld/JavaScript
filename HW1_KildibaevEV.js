"use strict";

//Задание 1
let name = "Джон";
let admin = name;

alert(admin)

//Задание 2
for (let i = 2; i < 11; i += 2)
{
    alert(i);
};

//Задание 3
let i = 2;

while (i < 11)
{
    alert(i);
    i += 2;
}

//Задание 4
let num;
let title = "Введите число больше 100";

do
{
    num = prompt(title);
} while(num < 101);

//Задание 5
title = "Введите Ваш возраст";

let age = prompt(title);

if(age >= 13 && age <= 90)
{
    alert("Уже не малыш!")
} else if (age < 13)
{
    alert("Малыш!")
} else 
{
    alert("Пыль!")
}

//Задание 6
age = prompt(title);

if(!(age >= 13 && age <= 90))
{
    alert("Ты малыш или пыль?")
} else
{
    alert("Вам еще можно работать!")
}

//Задание 7
age = prompt(title);

if(age < 13 || age > 90)
{
    alert("Ты малыш или пыль?")
} else
{
    alert("Вам еще можно работать!")
}

//Задание 8
function makeNegative(num)
{
    if (num < 0) return num;

    return -num;
}

alert(makeNegative(-1));
alert(makeNegative(-5));
alert(makeNegative(0));
alert(makeNegative(0.12));

//Задание 9
function isDivisible(n, x, y)
{
    if (n % x != 0)
    {
        if (n % y != 0)
        {
            alert(`false because ${n} is neither divisible by ${x} nor ${y}`);
            return false;
        }
        alert(`false because ${n} is not divisible by ${x}`);
        return false;
    }
    if (n % y != 0)
    {
        alert(`false because ${n} is not divisible by ${y}`);
        return false;
    }
    alert(`true because ${n} is divisible by ${x} and ${y}`);
    return true;
}

isDivisible(3, 1, 3)
isDivisible(12, 2, 6)
isDivisible(100, 5, 3)
isDivisible(12, 7, 5)
isDivisible(15, 7, 5)

//Задание 10
function sum(numbers)
{
    let sum = 0;

    for (let i = 0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }

    return sum;
}

alert(sum([1, 5.2, 4, 0, -1]));
alert(sum([]));
alert(sum([-2.398]));