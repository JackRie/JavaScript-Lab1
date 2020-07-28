"use strict";

const name = 'Jackie';
let age = 33;
const birthday = 'July 13';
let detroitGC = false;
const lifeEvents = ['I was born in Holland, MI', 'I went to West Ottawa High School', 'I bought a house last year', 'I attend Grand Circus Front-end Bootcamp'];

if (detroitGC) {
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`)
}

for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let counter = 0;

//While (true) runs forever. a break; statment is needed to jump out of the code.
while (true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;//need to use +1 so that it doesn't go from 0-10. this way it goes from 1-10
    if (randomNumber != 5) {
        counter++;
        console.log(`${randomNumber} != 5`);
    } else {
        counter++;
        console.log(`5 === 5 it took ${counter} iterations to randomly generate the number 5`);
        break;
    }
};


//Extended challenge
let hours = 50;
let wage = 10;

if (hours <= 40) {
    let paycheck = hours * wage;
    console.log(paycheck);
    let weeks = Math.ceil(1000000 / paycheck);
    console.log(weeks);
} else if (hours > 40) {
    let regularPaycheck = 40 * wage;
    let overtime = (hours - 40) * (wage * 1.5);
    let paycheck = regularPaycheck + overtime;
    console.log(paycheck);
    let weeks = Math.ceil(1000000 / paycheck);
    console.log(weeks);
};
