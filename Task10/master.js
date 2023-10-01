// String


// Problem (1)

// var str = prompt("Enter str");


// function reverse(str){
//   return (str.split("").reverse().join(""))
// }
// console.log( reverse(str));


// problem (2)

// var input1 = prompt("Enter input1");
// var input2 = prompt("Enter input2")


// function Check(input1, input2)
// {
//     if (input1.toUpperCase() == input2.toUpperCase())
//     {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(Check(input1,input2 ));



// problem  (3)


// function check(input1) {
//     if (input1 == input1.toUpperCase())
//         return true;
//     else {
//         return false;
//     }
// }
// console.log(check("mohamed"));


// problem (4)


// var str = prompt("Enter str");
// var pos1 = prompt("Enter pos 1");
// var pos2 = prompt("Enter pos 2");


// function position(str ,pos1,pos2)
// {
//     return str.slice(pos1,pos2);
// }
// console.log( position(str ,pos1,pos2));


// problem (5)


// var fName = prompt("Enter fName");
// var sName = prompt("Enter sName");
// var lName = prompt("Enter lName");


// function concat(fName ,sName,lName)
// {
//    return fName.concat(sName,lName);
// }
// console.log( concat(fName ,sName, lName) );


// problem (6)




// function checkPalindrome(str) {
//     let palind = str.split("");
//     if (str === palind.reverse().join("")) {
//         console.log(`the string ${str} is palindrome`);
//     } else {
//         console.log(`the string ${str} is not palindrome`);
//     }
// };
// checkPalindrome("madam");


// problem (7)


// var str = prompt("Enter str");
// function trim(str)


//  {
//   return(str.trim());
//  }
//  console.log(trim(str));



// problem (8)


// checkUrl = function (url) {
//     if (url.startsWith("ww.") && url.endsWith(".eraa")) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// };
// checkUrl("ww.soad.eraa");



// problem (9)


// function removeO(str) {
//     let x = str.replace(/o/gi, "");
//     return x;

// }


// console.log(removeO("ErOaao"));





// problem (10)


// var str1 = prompt("Enter str 1");
// var str2 = prompt("Enter str 2");
// var str3 = prompt("Enter str 3");


// function substring(str1,str2,str3)
// {
//     if(str1.search(str2)>=0 && str1.search(str3)>=0)
//     return true;
//     else
//     return false;
// }
// console.log(substring(str1,str2,str3) );


////////////////////////////////////////////////////////////////////////////////////////


// Loop

// problem (1)


// var num1 = +prompt("Enter num 1");
// var num2 = +prompt("Enter num 2");


// function check(num1,num2)
// {
//     if(num1==15||num2==15||num1+num2==15)
//     {
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(check(num1,num2));



// problem (2)


// var num = +prompt("Enter num 1");


// function square(num)
//  {
// if(num>0 && Math.sqrt(num)%1==0 ){

//     console.log(" perfect");
// }
// else
// {
//     console.log("not perfect");
// }
// }
// square(num);


// problem (3)


// function find(x1, x2, x3, x4, x5) {
//     let variables = [x1, x2, x3, x4, x5];
//     for (let i = 0; i <= variables.length; i++){
//         if (variables[i] === 0) {
//             return i + 1
//         }
//     }
// }
// console.log(find(1, 2, 0, 4, 5));




// problem (4)


// var str = prompt("Enter Letter");


// function converting(str)
// {
//     if(str==str.toUpperCase())
//     return str.toLowerCase();
//     else if (str==str.toLowerCase())
//     return str.toUpperCase();
//     else
//     return "Error";
// }
// console.log(converting(str));



// problem (5)




// function checkSum(num1, num2) {
//     let sum = 0;
//     for (let i = num1; i <= num2; i++){
//         if (i % 2 == 1) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// checkSum(10, 30);



// problem (6)

// var num = +prompt("Enter num");
// var numStr = num.toString();
// function checkLuckyDay(num) {
//     for (let i = 0; i <= num; i++) {
//         if (numStr.includes(4) || numStr.includes(7)) {
//             console.log("It's your lucky day");
//             return;
//         } else {
//             console.log("“It's not your lucky day");
//         }
//     }
// }
// checkLuckyDay(num);




// problem (7)



// var num = +prompt("Enter num");

// function divisors(num) {
//     for (let i = 1; i <= num; i++)
//     {
//     if(num % i == 0)
//     console.log(i);
//     }
// }
// divisors(num);



// problem (8)


// var num = +prompt("Enter num");


// function primeNum(num) {
   
//     for (let i = 2; i <= num; i++)
//     {
//       var count=0;
//       for (let j = 1; j <= i; j++)
//       {
//         if(i % j == 0)
//         {
//          count++;
//         }
//       }
//       if(count == 2)
//       {
//         console.log(i);
//       }
//     }
// }
// primeNum(num);




// problem (9)


// function sumNumb(num) {
//     let numbers = [];
//     let sum = 0;
//     let odd = 0;
//     let even = 0;

//     for (let i = 0; i < num; i++) {
//         numbers.push(+prompt(`Insert ${num} numbers`))
//         sum += numbers[i];
//     }
//     console.log(`the sum of number is ${sum}`);
//     for (j = 0; j < numbers.length; j++){
//         if (numbers[j] % 2 === 0) {
//             even++
//         } else {
//             odd++
//         }
//     }
//     console.log(`number if even numbers is ${even}`);
//     console.log(`number if odd numbers is ${odd}`);

//     }
// sumNumb(5);




// problem (10)


// function game(rows) {
//     let start = 1;
//     for (let i = 0; i < rows; i++){
//         let row = "";
//         for (let k = 0; k < 3; k++){
//             row += start + k + " ";
//         }
//         row += "pum";
//         console.log(row);
//         start += 4
//     }
// }
// game(4);






// problem (11)


// var num1 = +prompt("Enter num 1");
// var num2 = +prompt("Enter num 2");


// function positiveOrNegative(num1,num2)
// {
//     if(num1 + num2 > 0)
//     return "positive";
//     else if(num1 + num2 < 0)
//     return "Negative";
//     else
//     return "Zero";
// }
// console.log(positiveOrNegative(num1,num2) );



// problem (12)


// var grade = +prompt("enter grade")


// function test(grade){
// if(grade>100){
//     console.log("impossible")
// }
// else if(grade >= 85 && grade <= 100)
// console.log("A");
// else if(grade >= 75)
// console.log("B");
// else if(grade >= 60)
// console.log("c");
// else if(grade <= 60)
// {
//     if(grade >= 0)
//     console.log("F");
// else
// {
//     console.log("impossible");
// }
// }
// else{
//     console.log("not founded");
// }
// }
// test(grade);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////77


