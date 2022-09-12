const prompt = require('prompt-sync')();

const n1Text = prompt('First number: ');
const n2Text = prompt('Second number: ');
const n3Text = prompt('Third number: ');
const n1 = Number(n1Text);
const n2 = Number(n2Text);
const n3 = Number(n3Text);
let largest=0;

if(n1>n2 && n1>n3){
    largest=n1;
}else if(n2>n1 && n2>n3){
    largest=n2;
}else if(n3>n2 && n3>n1){
    largest=n3;
}

console.log(`The largest number entered was ${largest}`);

