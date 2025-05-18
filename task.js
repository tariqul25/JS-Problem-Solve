
// Task 1

let totalMoney = 1000;
let orange = 300;
let apples = 400;
let costMoney = orange + apples;
let remainMoney = totalMoney - costMoney;

console.log(remainMoney);



// Task 1

var burger = 400 ;

if(burger > 500){
    console.log ('your coke with burger is free');
}
else{
    console.log('your coke coke with burger is 30 tk');
}










// Task 2

var mark = 95;

if(mark> 90 && mark <= 100 ){
    console.log('you get A')
}
else if(mark >=80){
    console.log('you get B')
}
else if(mark >=70){
    console.log('you get C')
}
else if(mark >=60){
    console.log('you get D')
}
else{
    console.log('You got F')
}


// Task 3

var myResult= 91;
var friendResult= 22;

if(myResult > 80){
    if(friendResult>80){
        console.log('chol lunch e jaii')
    }
    else if (friendResult < 80 && friendResult >=60){
        console.log('na re next time')
    }
    else if (friendResult < 60 && friendResult >=40){
        console.log('tor msg e dekbo na')
    }
    else  {
        console.log('block ka')
    }
}
else{
    console.log('its time for sleep')
}


// Task 4

var num1= 70;
var num2= 55;
var result;

if (num1 > num2 ){
    result = num1 * 2;
   console.log(result); 
}
else{
    result= num1 + num2 ;
    console.log(result);
}


num1>num2? console.log(result=num1*2)  : console.log(result=num1+num2)


num1>num2? result=num1*2 : result=num1+num2
console.log(result)




// Task 5

var ticketPrice = 800 ;
var age = 72;
var isStudent= false;


if (age >=60 ){
    discount = ticketPrice * 15/100;
    console.log(ticketPrice=ticketPrice-discount)
}
else if(isStudent){
    discount = ticketPrice * 50/100;
    console.log(ticketPrice=ticketPrice-discount)
}
else if(age<10){
    console.log('ticket is free')
}
else{
    console.log(ticketPrice)
}
 