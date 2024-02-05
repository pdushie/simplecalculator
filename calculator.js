function one()
{
    let display = document.getElementById("screen");
    display.value +=1;
    console.log(display);
}
function two()
{
    let display = document.getElementById("screen");
    display.value +=2;
    console.log(display);
}
function three()
{
    let display = document.getElementById("screen");
    display.value +=3;
    console.log(display);
}
function four()
{
    let display = document.getElementById("screen");
    display.value +=4;
    console.log(display);
}
function five()
{
    let display = document.getElementById("screen");
    display.value +=5;
    console.log(display);
}
function six()
{
    let display = document.getElementById("screen");
    display.value +=6;
    console.log(display);
}
function seven()
{
    let display = document.getElementById("screen");
    display.value +=7;
    console.log(display);
}
function eight()
{
    let display = document.getElementById("screen");
    display.value +=8;
    console.log(display);
}
function nine()
{
    let display = document.getElementById("screen");
    display.value +=9;
    console.log(display);
}
function zero()
{
    let display = document.getElementById("screen");
    display.value +=0;
    console.log(display);
}


function add()
{
    let display = document.getElementById("screen");
    display.value += "+";
}

function minus()
{
    let display = document.getElementById("screen");
    display.value +="-";
}

function times()
{
    let display = document.getElementById("screen");
    display.value +="*";
}

function divide()
{
    let display = document.getElementById("screen");
    display.value +="/"
}

function dot()
{
    let display = document.getElementById("screen");
    display.value +=".";
}

function equal()
{
    let display = document.getElementById("screen");
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
    console.log(result);
}


function clr()
{
    let display = document.getElementById("screen");
    display.value ="";
}