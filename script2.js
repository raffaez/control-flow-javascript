const prompt = require('prompt-sync')();

const n1Text = prompt('First number: ');
const n2Text = prompt('Second number: ');
const n3Text = prompt('Third number: ');
const n1 = Number(n1Text);
const n2 = Number(n2Text);
const n3 = Number(n3Text);

if(n1<n2 && n2<n3){
    console.log(`${n1}<${n2}<${n3}`);
}else if(n1<n3 && n3<n2){
    console.log(`${n1}<${n3}<${n2}`);
}else if(n2<n1 && n1<n3){
    console.log(`${n2}<${n1}<${n3}`);
}else if(n2<n3 && n3<n1){
    console.log(`${n2}<${n3}<${n1}`);
}else if(n3<n1 && n1<n2){
    console.log(`${n3}<${n1}<${n2}`);
}else if(n3<n2 && n2<n1){
    console.log(`${n3}<${n2}<${n1}`)
}