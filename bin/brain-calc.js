import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';

function getRandonInt(max = 10) {
    return Math.floor(Math.random() * max);
}
let userName = greeting();
console.log('What is the result of the expression?');
let operations = ['+', '-', '*'];
let end = 0;
for (let i = 0; i <=2; i += 1) {
    let a = getRandonInt();
    let b = getRandonInt();
    let id = getRandonInt(3);
    let solution = 0;
    let operation = operations[id];
    let answer = Number(readlineSync.question('Question: ' + a + operation + b + ' = ' ));
      switch(operation) {
        case '+': 
          solution = a + b;
          break;
        case '-':
          solution = a - b;
          break;
        case '*':
          solution = a * b;
          break;
      }
    if (answer === solution) {
        end += 1;
        console.log('Your answer "' + answer + '" . Correct!');
        } else { 
          console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was " + '"' + solution + '"' + "Let's try again, " + userName + '!'); 
          break; 
          }
}
if (end === 3) { console.log('Congratulations, ' + userName + '!');}


