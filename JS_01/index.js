const firstName = 'Maria';
const LastName = 'Dubrovska';
const user_first_name = 'Mariia';
const user_name = 'Mariya';

// const 08_5 = 12;
/* const user-name = Taras;
const имя = Maria;
const 2user = Tom 
const let = 12 */

alert(`Hello, my name is ${firstName}`);

const userName = prompt('What is your name?');
alert(`Hello, ${userName}`);

// Calculation of age relative to the year of birth
const YEAR = 2024;
const birthYear = +prompt('When were you born?');
alert(`Your age, ${YEAR - birthYear}`);

// Perimeter square
const squareSide = +prompt('Enter the length of the side of the square:');
const perimeter = squareSide * 4;
alert(
  `Look, I did the math. The perimeter of the square is equal: ${perimeter}`
);

// Circle radius
const radius = +prompt('Set the radius of the circle');
const pi = Math.PI;
const circleArea = pi * radius * radius;
alert(`Area = ${circleArea.toFixed(2)}`);

// Speed
const distance = +prompt('Enter the distance between the two cities (km):');
const time = +prompt('Enter the desired travel time (hours):');
const speed = distance / time;
alert(`The speed of movement should be ${speed.toFixed(2)} km`);

// Currency converter
// 1 USD = 0,96 EUR
const usd = +prompt('number of dollars:');
let difference = 0.96;
const eur = usd * difference;
alert(`EUR = ${eur}`);
