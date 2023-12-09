

// Question 01
var city=prompt("Enter Your City Name")

if(city == "karachi"){
    document.write("Welcome to city of lights")
}

// Question 02
 
var gender=prompt("Enter Your Gender")

if(gender=="male"){
    document.write("<br>"+"Good Morning Sir")
}
else if(gender=="female"){
    document.write
    ("<br>"+"Good Morning Ma'am")
}

// Question 03

var signalcolor=prompt("Enter Your Color")

if(signalcolor==="red"){
    document.write("<br>"+"Must Stop")
}
else if(signalcolor==="yellow"){
    document.write("<br>"+"ready to move")
}
if(signalcolor==="green"){
    document.write("<br>"+"move now")
}

// Question 04 done
// Question 05
// Question 06
// Question 07
// Question 08
var usernumber=prompt("Enter Your Number")
if (usernumber%3===0){
    document.write("<br>"+"The number " + usernumber + " is divisible by 3.")
}else{ 
    document.write("<br>"+"The number " + usernumber + " is not divisible by 3.")
}
// Question 09
var num=prompt("Enter Your Number")
if (num%2===0){
    document.write("<br>"+"The number " + num + " even number")
}else{ 
    document.write("<br>"+"The number " + num + " odd number")
}
// Question 10
// Question 11


var firstNumber=prompt("Enter Your First Number")
var SecondNumber=prompt("Enter Your  Second  Number")
var operation=prompt("Enter Your +,-,/,%")

if(operation=="+"){
    document.write("<br>"+firstNumber+SecondNumber )
}
else if(operation==="-"){
    document.write("<br>"+firstNumber-SecondNumber )
}
else if(operation==="*"){
    document.write("<br>"+firstNumber*SecondNumber )
}
else if(operation==="/"){
    document.write("<br>"+firstNumber/SecondNumber )
}
else if(operation==="%"){
    document.write("<br>"+  firstNumber%SecondNumber )
}

