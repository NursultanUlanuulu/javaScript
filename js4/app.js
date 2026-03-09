// console.log('Январь')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')
// console.log('февраль')

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

// цикл - это конструкция, которая повторяет код много раз

// 3 этап -
// 1) начало, 2) условие, 3) изминение

// 1) 1 ден башта
// 2) 10 дон кем болгучакты чыгар
// 3) 1 ге кобойт

// for, while, do while

// for
// for(начало, условие, шаг) {
// 	// code
// }

// начало -
// let i = 1

// // условие
// i <= 10 //true

// // изминение - шаг
// i + 1

// for (let i = 1; i <= 5; i++) {
// 	console.log(i)
// }
// for (let i = 5; i >= 1; i--) {
// 	console.log(i)
// }

// 1
// 1 <= 5 true
// 1 + 1

// 2
// 2 <= 5 true
// 2 + 1

// 5
// 5 <= 5 true
// 5 + 1

// 6
// 6 <= 5 false
// 5 + 1

// i++ == i = i +1
// i-- == i = i +1

// for (let i = 2; i <= 10; i += 2) {
// 	console.log(i)
// }
// for (let i = 1; i <= 10; i += 2) {
// 	console.log(i)
// }

// while(условие) {
// 	code
// }

// let number = 1

// while (number <= 5) {
// 	console.log(number)
// 	number++
// }

// while (true) {
// 	console.log('Hello')
// }

// let name = ''

// while(name !== 'doni') {
// 	name = prompt('Неверное имя')
// }

// break, contine

// for (let i = 1; i <= 10; i++) {
// 	if (i === 6) {
// 		break
// 	}

// 	console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
// 	if (i === 2) {
// 		continue
// 	}

// 	console.log(i)
// }

// let age

// while (true) {
// 	age = +prompt('Введи свой возраст')

// 	if (age >= 18) {
// 		alert('Доступ разрешен')
// 		break
// 	} else {
// 		alert('Вы слишком молоды')
// 	}
// }

// secret - 10

// слишком больщое
// слишком маленькое
// вы угалдали

// admin - admin123 добро пожаловать
// admin - jdndfj неворный пароль или логин
// отоа - admin123 неворный пароль или логин

// && , ||

let attemps = 3

while (attemps > 0) {
	let login = prompt('Введите логин')
	let password = prompt('Введите пароль')

	if (login === 'admin' && password === 'admin123') {
		alert('Добро пожаловать')
		break
	} else {
		attemps--
		alert('Неверный пароль или логин. Осталось попыток: ' + attemps)
	}
}

if (attemps === 0) {
	alert('Аккаунт заблокирован')
}


// 100 сан чыгарасынар
// 3 - Coca
// 5 - Cola
// 3,5 - CocaCola

