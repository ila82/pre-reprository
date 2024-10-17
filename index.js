/* Q2 - Function to return grade using ternary operators */
// const getGrade = score => score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
// console.log("Q2 - Grade for score 85:", getGrade(85));





/* Q3 - Car object, function to change year, and object destructuring */ 
// const car = { companyName: "Toyota", model: "Camry", year: 2020 };
 
// const changeCarYear = (newYear) => { car.year = newYear; }; 
// changeCarYear(2022);

// const { model, year } = car; 
// console.log("Q3 - Car Model and Year:", model, year);





/* Q4 - Filter array to get only prime numbers */
// const isPrime = (num) => { 
// if (num <= 1) return false;
// for (let i = 2; i <= Math.sqrt(num); i++) 
// { if (num % i === 0) return false; }
// return true;
// };

// const primes = numbers.filter(isPrime); 
// console.log("Q4 - Prime Numbers:", primes);

/* Q5 - Use cases of map, filter, and reduce*/
// map: To transform every element of an array. Example: square every number. 
// filter: To filter elements based on a condition. Example: get prime numbers. 
// reduce: To accumulate values based on an operation. Example: sum all elements of an array. 





/* Q6 - Asynchronous function to fetch data using async-await */
// const fetchData = async () => { try 
// { const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json(); console.log("Q6 - Fetched Data:", data); } 
// catch (error) { console.error("Error fetching data:", error); } };

// fetchData();




/* Q7 - Nested object with optional chaining to safely access phone number */ 
// const person = { name: "John", address: { city: "New York", street: "5th Avenue" }, 
// contact: { // phone: "123-456-7890" // } };


/* Q1 - Square each element of the array using the map function and arrow function */
const numbers = [1, 2, 3, 4, 5]; 
const squaredNumbers = numbers.map(num => num * num);
console.log("Q1 - Squared Numbers:", squaredNumbers);