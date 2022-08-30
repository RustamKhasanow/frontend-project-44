import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName;
}

  
