const prompt = require('prompt-sync')();

const ageText = prompt('Enter your age: ');
const age = Number(ageText);

if(age>=10 && age<=14){
    console.log('Kid');
}else if(age>=15 && age<=17){
    console.log('Teen');
}else if(age>=18 && age<=25){
    console.log('Adult')
}