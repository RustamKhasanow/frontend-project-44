#!/usr/bin/env node.
import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';
let userName = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let answer = readlineSync.question('Question: 15 ');
if (answer === 'no') {
  console.log('Your answer "no". Correct!');
  answer = readlineSync.question('Question: 6 ');
  if (answer === 'yes') {
    console.log('Your answer "yes". Correct!');
    answer = readlineSync.question('Question: 7 ');
    if (answer === 'no') {
      console.log('Your answer "no". Correct! Congratulations, ' + userName + '!');
    } else {console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was 'no'. Let's try again, " + userName + '!');}
  } else {console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was 'yes'. Let's try again, " + userName + '!');}
} else {console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was 'no'. Let's try again, " + userName + '!');}

