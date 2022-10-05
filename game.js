const canvas1 = document.getElementById('myCanvas')
const button1 = document.getElementById('btn1')
const button2 = document.getElementById('btn2')
const button3 = document.getElementById('btn3')
const button4 = document.getElementById('btn4')
button1.addEventListener('click', button1function)
button2.addEventListener('click', button2function)
button3.addEventListener('click', button3function)
button4.addEventListener('click', button4function)

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

const lines = canvas1.getContext("2d");
lines.moveTo(0, 0);


function button1function() {
    console.log('btn1')
    lines.lineTo(80+counter1, 1+counter1)
    lines.stroke()
    counter1 = counter1 + 10

} 

function button2function() {
    console.log('btn2')
    lines.lineTo(15+counter2, 45+counter2)
    lines.stroke()
    counter2 = counter2 + 10
} 

function button3function() {
    console.log('btn3')
    lines.lineTo(100+counter3, 10+counter3)
    lines.stroke()
    counter3 = counter3 + 10
   
} 

function button4function() {
    lines.lineTo(25 + counter4, 50 + counter4)
    lines.stroke()
    counter4 = counter4 + 10
} 


