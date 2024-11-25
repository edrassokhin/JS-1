// Вывод информации в консоль
// console.log("Hello, World!");
// Окно с сообщением
// alert("Метод alert");
// Диалоговое окно
// nameUser = prompt("Как вас зовут?", "Нет данных");
// alert(nameUser)
// Выбор да или нет
// confirm("Подтвердите действие");
// Строки
// let str1 = "str1";
// let str2 = 'str2';

// Вывод информации
// 1 способ - обратные кавычки
// let name = "Ed";
// let info = `Hello, ${name}`;
// console.log(info);

// 2 способ - конкатенация строк
// let val1 = "Привет, я ";
// let val2 = "Эдуард";
// let res = val1 + val2;
// console.log(res);

// Длина строки в символах
// console.log(val1.length);
// 1 способ
// console.log("Длина строки " + val1 + " = " + val1.length)
// 2 способ
// let data = `Длина строки ${val1} = ${val1.length}`;
// console.log(data);

// Регистр
// let str = "Hello";
// console.log(str.toUpperCase());

// let res = str.toLowerCase();
// console.log(res);

// True or False
// let info = "JavaScript";
// console.log(info.includes("Java"));
// console.log(info.includes("Python"));

// Тип данных
// console.log(typeof 8);
// console.log(typeof "str");
// console.log(typeof true);

// Преобразование типов данных
// let value = 11;
// console.log(String(value));

// 1
// let value2 = "5";
// console.log(Number(value2))
// 2
// let num = Number(value2);
// console.log(typeof num);
// 3
// let num2 = +value2;
// console.log(typeof num2);

// let str = "";
// console.log(Boolean(str));

// let str1 = "Hello";
// console.log(Boolean(str1));

// let num = 0;
// console.log(Boolean(num));

// let num1 = 52;
// let num2 = 2;

// let res1 = num1 * num2;
// console.log(res1);

// let num3 = 20;
// let num4 = 2;

// let res2 = num3 / num4;
// console.log(res2);

// let num5 = 99;
// let num6 = 69;

// let res3 = num5 - num6;
// console.log(res3);

// 1 задача
// let width = +prompt("Введите ширину", 0);
// let height = +prompt("Введите длину", 0);
// let res = width * height;
// alert ("Результат: " + res);

// 2 задача
// let num1 = +prompt("Введите первое число", 0);
// let num2 = +prompt("Введите второе число", 0);
// let num3 = +prompt("Введите третье число", 0);
// let res = (num1 + num2 + num3)/3;
// alert("Среднее арифмитическое число: " + res);

// let num = -15;
// if(num > 0){
//     console.log("Положительное")
// }
// else if(num <0){
//     console.log("Отрицательное")
// }
// else{
//     console.log("Число = 0")
// }

// let age = 15;
// let res = (age > 18) ? true : false;
// console.log("Результат: " +res);

// && - и
// || - или
// ! - не

// let num1 = -12;
// let num2 = 10;

// if(num1 > 0 && num2 > 0){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// Задача - какое число больше
// let num1 = +prompt("Введите первое число", 0);
// let num2 = +prompt("Введите второе число", 0);
// let num3 = +prompt("Введите третье число", 0);

// if(num1 > num2 && num1 > num3){
//     console.log(num1)
// }
// else if(num2 > num1 && num2 > num3){
//     console.log(num2)
// }
// else{
//     console.log(num3)
// }

// let user = "Анна";
// console.log(user ?? "Нет данных");

// Задача с днем недели 1
// let day = +prompt("Введите значение", 0);

// if(day == 1){
//     alert("Понедельник")
// }
// else if(day == 2){
//     alert("Вторник")
// }
// else if(day == 3){
//     alert("Среда")
// }
// else if(day == 4){
//     alert("Четверг")
// }
// else if(day == 5){
//     alert("Пятница")
// }
//  else if(day == 6){
//     alert("Суббота")
// }
// else if(day == 7){
//     alert("Воскресенье")
// }
// else{
//     alert("Нет такого дня")
// }

// Задача с днем недели 2
// С оператором Switch - обязательно добавлять break для закрытия кейса
// let day = +prompt("Введите значение", 0);

// switch(day){
//     case 1:
//         alert("Понедельник");
//         break;
//     case 2:
//         alert("Вторник");
//         break;
//     case 3:
//         alert("Среда");
//         break;
//     case 4:
//         alert("Четверг");
//         break;
//     case 5:
//         alert("Пятница");
//         break;
//     case 6:
//         alert("Суббота");
//         break;
//     case 7:
//         alert("Воскресенье");
//         break;
//     default:
//         alert("Нет такого дня");
// }

// Массивы

// 1 способ
// let array = new Array();
// array = [1, 2, 3, 4];

// 2 способ
// let array = ["Апельсин", 77, "Клавиатура", true];

// Методы добавления/удаления данных из массива

// let fruits = ["Яблоко", "Апельсин", "Мандарин"];
// console.log(fruits);
// pop - удаляет последний элемент
// fruits.pop();
// console.log(fruits);
// push - добавляет элемент в конец
// fruits.push("Арбуз");
// console.log(fruits);
// shift - удаляет первый элемент
// fruits.shift();
// console.log(fruits);
// unshift - добавляет элемент в начало
// fruits.unshift("Вишня");
// console.log(fruits);

// Из str в массив метод split()
// let names = "Вася, Петя, Маша";
// let arr = names.split(", ");
// console.log(arr);

// Из массива в string метод join()
// let names = ["Вася", "Петя", "Маша"];
// let str = names.join("-");
// console.log(str);

// Многомерные массивы
// let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(matrix[1][1]);

// Цикл while()
// let i = 1;
// while (i <= 100) {
//     if(i % 2 == 0){
//           console.log(i);
//     }
//   i++; // i = i + 1
// }

// Цикл for()
// for(let i = 1; i <= 10; i++){
//     if(i % 2 !=0)
//         {console.log(i);}
// }

// Break
// console.log("Начало цикла");
// for(let i = 1; i <= 10; i++){
//     if(i == 5){
//         console.log("continue");
//         continue;
//     }
//     console.log(i);
// }
// console.log("Конец цикла");

// for(let i = 1; i <= 5; i++){
//     alert(i);
// }

//  Сумма чисел от 1 до 10
// let sum = 0;
// for(let i = 1; i <= 10; i++){
//     sum = sum + i;
// }
// console.log(sum);

// От 1 до 10 * 3
// for(let i = 1; i <= 10; i++){
//     if(i % 2 == 0){
//             console.log(`${i} * 3 = ${i*3}`);
//     }
// }


// Сколько чётных/нечётных
// let countEven = 0;
// let countOdd = 0;

// for(let i = 1; i <= 25; i++){
//     if(i % 2 == 0){
//         countEven++
//     }
//     else{
//         countOdd++ 
//     }
// }
// console.log("Чётных: " + countEven);
// console.log("Нечётных: " + countOdd);

// Числа в диапазоне введеном пользователем в квадрате
// let n = +prompt("Введите число", 0);
// for(let i = 1; i <= n; i++){
//     console.log(i*i)
// }

// Function Expression
// const writeHello = function(val){
//     alert("Привет, " + val);
// }
// writeHello("Эдуард");

// Function Declaration
// function writeHello(val){
//     alert("Привет, "+val);
// }
// writeHello("Эдуард");

// Методы перебора массива
// Цикл for
// i - индекс
// название_массива[i] - элемент

// const numbersArr = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbersArr.length; i++) {
//     if (numbersArr[i] % 2 == 0) {
//         console.log(numbersArr[i])
//     }
// }

// Цикл for...of
// let arrLetters = ['a', 'b', 'c', 'd', 'e'];

// for (let letter of arrLetters) {
//     console.log(letter);
// }

// let numbersArr = [1, 2, 3, 4, 5];

// for (let number of numbersArr) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }
// }

// Цикл forEach
// const fruits = ["Яблоко", "Банан", "Мандарин", "Груша"];

// fruits.forEach(fr => console.log(fr))

// const names = ["Дмитрий", "Димас", "Димон", "Димаста", "Димитриус"];
// names.forEach(n => console.log(n));

// Метод filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 5) {
//         newArr.push(numbers[i]);
//     }
// }

// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = numbers.filter(num => num > 5);
// console.log(newArr);

// Метод map

// const fruits = ["Яблоко", "Банан", "Мандарин", "Груша"];

// const changeArr = [];

// for (let fr of fruits) {
//     changeArr.push(fr.toUpperCase());
// }
// console.log(changeArr);

// const fruits = ["Яблоко", "Банан", "Мандарин", "Груша"];

// const changeArr = fruits.map(fr => fr.toUpperCase());

// console.log(changeArr)

// 1 задача
// const numbers = [-7, 77, 812, -52, 72];

// const positiveCount = numbers.filter(num => num > 0);

// console.log("Кол-во положительных чисел: " + positiveCount.length);

// const negativeCount = numbers.filter(num => num < 0);

// console.log("Кол-во отрицательных чисел: " + negativeCount.length);

// 2 задача
// const strArr = ["JavaScript", "PHP", "Python", "Java"];

// const changeStr = strArr.map(el => el.length);
// console.log(changeStr)

const strArr = ["JavaScript", "PHP", "Python", "Java"];

function getLength() {
    const changeStr = strArr.map(el => el.length);
}