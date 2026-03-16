// // console.log('Hello')
// // console.log('Hello world')
// // console.log('Hello')
// // console.log('Hello')
// // console.log('Hello')

// // DRY - Dont Repeat Yeurself
// // Не повторять код

// function printHello() {
// 	console.log('Hello')
// }

// printHello()
// printHello()

// // синтаксис
// // function имяФункции() {
// // 	code
// // }

// // Параметры функции
// function seyHello(name, age, hobbi) {
// 	console.log('Привет ' + name, age, hobbi)
// }
// seyHello('Orozbi', 120)
// seyHello('Doni')

// console.log(3 + 5)

// let num = 5
// let num2 = 5
// console.log(num + num2)

// function sum(a, b) {
// 	console.log(a + b)
// }

// sum(19, 1)

// return - возвращяет значение из функции

// function sum(a, b) {
// 	// console.log(a + b)
// 	return a + b
// }

// let resultat = sum(10, 1)

// console.log(resultat)

// Функция с условием

// function checkAge(age) {
// 	if (age >= 18) {
// 		return 'Доступ разрешен'
// 	} else {
// 		return 'Доступ запрешен'
// 	}
// }

// console.log(checkAge(16))
// console.log(checkAge(19))

// function askName() {
// 	let name = prompt('Как тебя зовут?')
// 	console.log('Привет ' + name)
// }

// askName()
seyHello()

// 4 вида
// 1. Function Declaration
function seyHello(name, age, hobbi) {
	console.log('Привет ' + name, age, hobbi)
}
// hosting (поднятие функции)

// 2 Function Expression
const seyWorld = function () {
	console.log('Hello Function Expression')
}
seyWorld()

// 3 Arrow Function (стрелочная функция)
const seyArrow = () => {
	console.log('Hello Arrow Function')
}

seyArrow()

// 4 CallBack функция

function greet(name, callback) {
	console.log('Привет ' + name)
	callback()
}

function seyBay() {
	console.log('Пока')
}

greet('Ali', seyBay)

// калкулятор
// функция(a,b,"+")

const calculator = (a, b, operation) => {
	if (operation === '+') {
		return a + b
	} else if (operation === '-') {
		return a - b
	} else if (operation === '/') {
		return a / b
	} else if (operation === '*') {
		return a * b
	} else {
		return 'Неизвестная операция'
	}
}

let a = +prompt('Введи число')
let b = +prompt('Введи второе число')
let operation = prompt('Выбери операцию: -, + , / , *')

let resultat = calculator(a, b, operation)

console.log('результат: ', resultat)
