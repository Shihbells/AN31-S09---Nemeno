//Array in programming is ismply a list of data. For example:

let studentNumberA = '2022-11150'
let studentNumberB = '2021-11150'
let studentNumberC = '2020-11150'
let studentNumberD = '2020-11151'

// but with array, we can simply write the code above like this:
let studentNumbers = ['2022-11150', '2021-11150', '2020-11150', '2020-11151']

/*
	- Arrays are used to store multiple related values in a single variable
	- they are declared using square brackets '[]' also known as 'Array Literals'

	- array also provide access to a number of functions/methods that help in achieving
	- a method term for functions associated with an object and is used to execute statements that are relevant to a specific object
	- the main difference of arrays with an object is that it contains information in a for, of a 'list' unlike objects which is used properties
*/

let grades = [98, 95, 89, 90];
let computerBrands = ['Acer', 'Asus', 'Lenovo', 'Redfox'];

console.log(grades);
console.log(computerBrands);

// Alternative way to write

let myTasks = [
		'drink html',
		'eat javascript',
		'inhale css',
		'bake nodejs'
	]

console.log(myTasks);
console.log(myTasks.length);

// create an array with values from variables

let city1 = 'Tokyo'
let city2 = 'Manila'
let city3 = 'Jakarta'

let cities = [city1, city2, city3]
console.log(cities.length);

// .length property allows us to get and set the total number of items in an array

let blankArr = [];
console.log(blankArr.length)

let fullName = 'Kang Ryusang';
console.log(fullName.length);

// let fulllName = 'Adrian Tan';
// console.log(fulllName.length);

// length property on strings show the number of characters in a string. Spaces are counted as characters in strings

// length property can also set the totaal number of items in an array, meaning we can actually delete the last item in the array or shorten the array by simply updating the length of an array

myTasks.length = myTasks.length-1;
console.log(myTasks.length);
console.log(myTasks);

// to delete a specific item in an array we can employ array methods

cities.length--
console.log(cities);

fullName.length = fullName.length-1
console.log(fullName.length);

fullName.length--
console.log(fullName);

// if you can shorten the array by setting the length property, you can also lengthen it by adding a nu,ber into the length property. Since we lenghten the array forceibly, there will be another item in the array. However, it will be empty or undefined - like having another seat but having no one to sit on it

let theBeatles = ['John', 'Paul', 'Ringo', 'George'];
theBeatles.length++;
console.log(theBeatles);
