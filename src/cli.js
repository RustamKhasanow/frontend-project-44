import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;}

export function getRandonInt(min = 0, max = 10) {
  return Math.floor(Math.random() * (max - min) + min);}

export function getGcd(a, b) {
  let result = 1;
  if (a < b) {let temp = a; a = b; b = temp; 
  }; 
    for (let i = b; i >= 1; i -= 1) {
    if ( a % i === 0 && b % i === 0) { return result = i; break;};
    };
    return result;
}