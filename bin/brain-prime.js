import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';
import {getRandonInt} from "../src/cli.js"

let userName = greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
let end = 0;
const simpleNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
for (let i = 0; i <=2; i += 1) {
    let testNumber = getRandonInt(1, 101);
    let answer = (readlineSync.question('Question: ' + testNumber + ' '));
    let solution = '';
    if (simpleNumbers.includes(testNumber)) { solution = 'yes';} else {solution = 'no'};
    if (answer === solution) {
        end += 1;
        console.log('Your answer "' + answer + '" . Correct!');
        } else { 
          console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was " + '"' + solution + '" ' + "Let's try again, " + userName + '!'); 
          break; 
          }
}
if (end === 3) { console.log('Congratulations, ' + userName + '!');}