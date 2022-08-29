// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
//Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null 
//и так далее.

let arr = [23, 5, 6, 14, null, 17, 88, 47, 0];


function CountEvenAndOddNumbers(arr) {

	let number_count = 0;
    let even_count = 0;
    let zero_count = 0;
    let odd_count = 0;


	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number' || !isNaN(arr[i])) {
	        number_count += 1;
	        if (arr[i] === 0) {
	        	zero_count += 1;
	        } else if (arr[i]%2 === 0) {
	        	even_count +=1;
	        } else {
	        	odd_count +=1;
	        }
		}
	}
	console.log(`В массиве: ${number_count} цифр, ${zero_count} нулей, ${even_count} чётных, ${odd_count} нечётных!`);
}

CountEvenAndOddNumbers(arr);






