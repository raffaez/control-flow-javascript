const prompt = require('prompt-sync')();

const numText = prompt('Enter a number: ');
const num = Number(numText);

if(num%2==0){
    const rt = Math.sqrt(num);
    console.log(`${num} is an even number; it's square root is ${rt}.`); 
}else{
    const pw = Math.pow(num,2);
    console.log(`${num} is an odd number; it's power of 2 is ${pw}.`);
}