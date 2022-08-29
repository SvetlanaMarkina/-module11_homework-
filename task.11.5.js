// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя
// n раз и возвращает результат.

// Используйте Arrow Function синтаксис.

// Протестируйте функцию на любых значениях и выведите результат в консоль.


let x = prompt("x:", '');
let n = prompt("n:", '');

const raiseNumberToPower = (x, n) => { 
	return x ** n;

};

let result = x ** n  


if (n < 0) {
	console.log('error')
} else {
	console.log(result)
}	


