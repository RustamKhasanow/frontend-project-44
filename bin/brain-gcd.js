import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';
import {getRandonInt} from '../src/cli.js';
import {getGcd} from '../src/cli.js';

let userName = greeting();

console.log('Find the greatest common divisor of given numbers.');

let end = 0;
for (let i = 0; i <=2; i += 1) {
    let a = getRandonInt(1,);
    let b = getRandonInt(1,);
    let solution = getGcd(a, b);
    let answer = Number(readlineSync.question('Question: ' + a + ' ' + b + ' '));
    if (answer === solution) {
        end += 1;
        console.log('Your answer "' + answer + '" . Correct!');
        } else { 
          console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was " + '"' + solution + '" ' + "Let's try again, " + userName + '!'); 
          break; 
          }
}
if (end === 3) { console.log('Congratulations, ' + userName + '!');}