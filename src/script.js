//Home work
// 1. Write a calculator. Request 2 numbers and an operation as a symbol(+ - * /). The program solves it depending on the operation
//    and shows the result.



// 2. Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24, 
//    or 6! is 1 * 2 * 3 * 4 * 5 * 6 = 720.




// 3. Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..."    
//    to the page as a paragraph. If a user types a negative number in, alert an error.




// 4. Show a user the prompt where they have to write a correct answer for 2 + 2 * 2. Show the prompt as many times until the user
//    answers correctly.








//In class if-else exercises
// 1. Request a user's age and define whether he/she is an infant(0-2), a child(3-11), a teen(12-18)
//    ,and an adult (19-60)or a senior citizen (60-...). Display the result in the console

/*let age = prompt('Please enter your age.');

if (age <= 2) { 
    console.log('an infant');
} else if (age > 2 && age <= 11) {
    console.log('a child')
} else if (age > 11 && age <= 18) {
    console.log('a teen')
} else if (age >18 && age <= 60) {
    console.log('an adult');
} else (age > 59); {
    console.log('a senior citizen');
} 

// 2. Requst a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button
//    for exameple, 1-!, 2-@, 3-# etc). Dispay the result in the console.


// 3. Ask a user 3 questions, each with 3 answer optioins. Write these options also in the prompt window, after
//    a question. The user gets 2 points for each correct answer. Show the earned points after the test.



// 4. Request a number from a user, and define whether it is positive, negative, or zero. Display a resultig message as an alert.



// 5. Request a user's age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message 'Hi! You are # years old',
//    otherwise - 'Hm...Is it even possible?'.




//In class loop exercises
// 1. switch Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().

let month = +prompt('Please enter a month');
let i = 0
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


// 2. while loop Request a number and an extent. Raise the number to the given power and display the result. Don't use ** or Math.pow()here.



// 3. do while loop Suggest a user solve 2+2*2 until he/she does it right.

let result; 

do {
    answer = prompt('Please enter the result of 2+2*2');
   } while (answer !=6);
   
   alert('You got it!');
    
   
// 4. for loop Count sheep. Request a non-negative integer,3 for example, and print a string with murmur: "1 sheep...2 sheep...3 sheep..." to the page using document.write().
//    if a user types a negative number in, alert an error.
   
   let number = +prompt('Please enter a number')
   