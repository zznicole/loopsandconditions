//Home work
// 1. Write a calculator. Request 2 numbers and an operation as a symbol(+ - * /). The program solves it depending on the operation
//    and shows the result.
let number1 = +prompt('Please enter a number');
let number2 = +prompt('Please enter another number');
let operator = prompt('Please enter operator');

if (operator === '+' ) {
    alert(number1 + number2);
}
if (operator === '-' ) {
    alert(number1 - number2);
}
if (operator === '*' ) {
    alert(number1 * number2);
}
if (operator === '/' ) {
    alert(number1 / number2);
}


// 2. Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, 
//    or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.

let factorialNumber = +prompt('Please enter a number for the factorial.');
let product = 1;
for (let i = 1; i <= factorialNumber; i++) {
    product *= i;
}

console.log(product);

// 3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..."    
//    to the page as a paragraph. If a user types a negative number in, alert an error.

let sheep1 = +prompt('Please enter a non-negative integer');

for (let i = 1; i <= sheep1; i++) {
    if (i < 0) {
        alert('It\'s an error. Please try again');
    } else {
       document.write('<p>' + i + ' sheep' + '</p>');
    }
}


// 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. Show the prompt as many times until the user
//    answers correctly.

let userAnswer = +prompt('Please enter the result of 2 + 2 * 2');
if (userAnswer === 6) {
    alert('Well done! You got it!');
}       else { 
        do {
            tryAgain = +prompt('Please try again! Failure is the key to success!');
        } while(tryAgain !=6);

        alert('Well done! You got it!');
    }



//In class if-else exercises
// 1. Request a user's age and define whether he/she is an infant(0-2), a child(3-11), a teen(12-18)
//    ,and an adult (19-60)or a senior citizen (60-...). Display the result in the console.

let age = +prompt('Please enter your age.');

if (age < 3 && age >= 0) { 
    console.log('an infant');
} else if (age > 2 && age < 12) {
    console.log('a child');
} else if (age > 11 && age < 19) {
    console.log('a teen');
} else if (age >18 && age < 61) {
    console.log('an adult');
} else if (age > 60) {
    console.log('a senior citizen');
} 


// 2. Requst a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button
//    for exameple, 1-!, 2-@, 3-# etc). Dispay the result in the console.

let userNumber = +prompt('Please enter a number from 0 to 9.')

if (userNumber === 1) {
    console.log('!');
} else if (userNumber === 2) {
    console.log('@');
} else if (userNumber === 3) {
    console.log('#');
} else if (userNumber === 4) {
    console.log('$');
} else if (userNumber === 5) {
    console.log('%');
} else if (userNumber === 6) {
    console.log('^');
} else if (userNumber === 7) {
    console.log('&');
} else if (userNumber === 8) {
    console.log('*');
} else if (userNumber === 9) {
    console.log('(');
}


// 3. Ask a user 3 questions, each with 3 answer optioins. Write these options also in the prompt window, after
//    a question. The user gets 2 points for each correct answer. Show the earned points after the test.

let answer1 = prompt('Which season is after Spring? Summer, Autumn or Winter');
let answer2 = prompt('What is Javascript? A book, A programming language, A computer');
let answer3 = +prompt('How many hours has a day? 12, 24 or 36');
let points = 0;

if (answer1 === 'Summer') {
    points += 2;
}

if (answer2 === 'A programming language') {
    points += 2;
}

if (answer3 === 24) {
    points += 2;
}

alert(`Congratulations! You have earned ${points} points!`)


// 4. Request a number from a user, and define whether it is positive, negative, or zero. Display a resultig message as an alert.

let enterNumber= +prompt('Please enter a number');

if (enterNumber > 0) {
    alert('It\'s positive number.');
} else if (enterNumber < 0) {
    alert('It\'s negative number.');
} else if (enterNumber == 0) {
    alert('It\'s zero.');
}


// 5. Request a user's age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message 'Hi! You are # years old',
//    otherwise - 'Hm...Is it even possible?'.
let yourAge = +prompt('Please enter your age.');
    
if (yourAge >= 0 && yourAge <= 120) {
    alert(`Hi! You are ${yourAge} years old.`);
} else {
    alert('Hm...Is it even possible?');
}


//In class loop exercises
// 1. switch Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().

let month = +prompt('Please enter a month');

switch (month)  {
    case 1:
        month = 'Januray';
        break;
    case 2:
        month = "Feburary";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;       
    case 7:
        month = "July";
        break;   
    case 8:
        month = "Augest";
        break;   
    case 9:
        month = "September";
        break;   
    case 10:
        month = "October";
        break;   
    case 11:
        month = "November";
        break;   
    case 12:
        month = "December";
        break;   
}
    document.write(`<p>${month}</p>`);


// 2. while loop Request a number and an exponent. Raise the number to the given power and display the result. Don't use ** or Math.pow()here.
let numberExponent1 = +prompt('Please enter a number.');
let numberExponent2 = +prompt('Please enter an exponent.');
let i = 0;
let exponentresult = 1

while (i < numberExponent2) {
    exponentresult *= numberExponent1;
    i++;
}
alert(exponentresult);


// 3. do while loop Suggest a user solve 2+2*2 until he/she does it right.

do {
    answer = prompt('Please enter the result of 2+2*2');
   } while (answer !=6);
   
   alert('You got it!');


// 4. for loop Count sheep. Request a non-negative integer,3 for example, and print a string with murmur: "1 sheep...2 sheep...3 sheep..." to the page using document.write().
//    if a user types a negative number in, alert an error.

let sheep2 = +prompt('Please enter a non-negative integer.')

for (let i = 1; i <= sheep2; i++) {
    if (i < 0) {
        alert('It\'s an error. Please try again.');
    } else {
    document.write('<p>' + i + ' sheep' + '</p>');
    }
}
