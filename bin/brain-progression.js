import {greeting} from "../src/cli.js";
import readlineSync from 'readline-sync';
import {getProgression} from "../src/cli.js"
import {getRandonInt} from "../src/cli.js"

let userName = greeting();

// создать массив длинной в 10 элементов из случайных чисел с определенным шагом.
    // генерируем шаг и начальный элемент, через цикл прогоняем до нужного количества элементов
// завести в него потерянный элемент и запомнить его в переменную что и будет ответом
// вопрос пользователю на сравнение 
// вывести ответ 
// цикл на три игры и вывод поздравления

console.log('What number is missing in the progression?');
let end = 0;
for (let i = 0; i <=2; i += 1) {
    let pointPosition = getRandonInt(0, 10);
    const point = '..';
    const gameProgression = getProgression();
    let solution = gameProgression[pointPosition];
    gameProgression[pointPosition] = point;
    let answer = Number(readlineSync.question('Question: ' + gameProgression + ' '));
    if (answer === solution) {
        end += 1;
        console.log('Your answer "' + answer + '" . Correct!');
        } else { 
          console.log('"' + answer + '"' + " is wrong answer ;(. Correct answer was " + '"' + solution + '" ' + "Let's try again, " + userName + '!'); 
          break; 
          }
}
if (end === 3) { console.log('Congratulations, ' + userName + '!');}