//---------- Assignment 1 -------------

//Q1

/*
Write a program that allow to user enter number then print it Example
Input: 5
Output: 5
*/

//solution:-

/* var x = undefined;
x = Number(prompt("Enter Number"));
document.getElementById('demo').innerHTML = x; */

//==================================================================

//Q2

/*
Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
Example1
Input: 12 Output Yes Example 2
Input: 9 Output No
*/

//Solution:-

/* var num = prompt("Enter Number");
if (num % 3 == 0 && num % 4 == 0) {
    document.getElementById('demo').innerHTML='Yes';
} else {
    document.getElementById('demo').innerHTML='No';
}  */

//=====================================================================

//Q3

/* Write a program that allows the user to insert 2 integers then print the max Example1
Input: 3 5
Output: 5
Example 2
Input: 10 7
Output: 10 */

//solution:-

/* var x, y;
x = Number(prompt("Enter First Integer"));
y = Number(prompt("Enter Second Integer"));
if (x > y) {
    document.getElementById('demo').innerHTML = x
} else {
    document.getElementById('demo').innerHTML = y
} */
//===========================================================================

//Q4

/*Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
Example 1
Input: -5
Output negative Example2
Input: 10
Output positive*/

//Solution:-

/* var num = +window.prompt("Enter number");
if (num >= 0) {
    document.getElementById('demo').innerHTML = "Positive"
} else {
    document.getElementById('demo').innerHTML = "Negative";
}  */

//=========================================================================

//Q5

/* Write a program that take 3 integers from user then print the max element and the min element.
Example 1
Input:7,8,5
Output:
max element = 8
min element = 5
Example2
Input: 3 6 9 Outputs:
Max element = 9 Min element = 3 */

//solution:-

/* var x, y, z;
x = +window.prompt("Enter first integer");
y = +window.prompt("Enter second integer");
z = +window.prompt("Enter third integer");
if (x > y && x > z) {
    document.getElementById('demo').innerHTML = 'Max Number = ' + x;
} else if (y > x && y > z) {
    document.getElementById('demo').innerHTML = 'Max Number = ' + y;
} else {
    document.getElementById('demo').innerHTML = 'Max Number =' + z;
}
if (x < y && x < z) {
    document.getElementById('demo').innerHTML += '<br>' + 'Min Number = ' + x;
} else if (y < x && y < z) {
    document.getElementById('demo').innerHTML += '<br>' + 'Min Number =' + y;
} else {
    document.getElementById('demo').innerHTML += '<br>' + 'Min Number =' + z;
} */

//=================================================================================

//Q6

/* Write a program that allows the user to insert integer number then check If a number is oven or odd
7- Example 1
Input: 8
Output: even
Example 2
Input: 7
Output: odd */

//solution:-

/* var x;
x = +window.prompt("Write Number");
if (x % 2 == 0) {
    document.getElementById("demo").innerHTML = x + " ===> Even"
} else {
    document.getElementById("demo").innerHTML = x + " ===> Odd";
} */

//==================================================================================

//Q8

/* Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
Example1
Input: O
Output: vowel
Example 2
Input: b
Output:
Consonant */

//solution:-

/* var x = window.prompt("write a char");
if(x==='a'|| x==='e'|| x==='i'|| x==='o'|| x==='u'){
    document.getElementById("demo").innerHTML="vowel";
}else{
    document.getElementById("demo").innerHTML="consonant";
} */
//===============================================================================

//Q9

/* Write a program that allows user to insert integer then print all numbers between 1 to that’s number
Example Input 5
Output 1, 2, 3, 4, 5 */

//solution:-

/* var x = +window.prompt('Enter an integer');
var srr="";
for (var i = 1; i <= x; i++) {
    if(i==x){
        srr+=i;
    }else{
    srr += i+", ";
}
}
document.getElementById("demo").innerHTML=srr; */
//==============================================================================


//Q10

/* Write a program that allows user to insert integer then print a multiplication table up to 12.
Example Input: 5 Outputs:
5 10 15 20 25 30 35 40 45 50 55 60
 */

//solution:-

/* var x = +window.prompt("Enter Number");
var y = "";
for (var j = 1; j <= 12; j++) {
    y += (x * j) + " ";
}
document.getElementById('demo').innerHTML = y; */

//==============================================================================

//Q11

/* Write a program that allows to user to insert number then print all even numbers between 1 to this number
Example:
Input: 15
Output: 2 4 6 8 10 12 14 */

//solution:-

/* var x = +window.prompt("Enter Number");
var y = "";
for (var i = 1; i <= x; i++) {
    if (i % 2 == 0) {
        y += i + " ";
    }
}
document.getElementById('demo').innerHTML = y; */

//=============================================================================

//Q12

/* Write a program that take two integers then print the power Example:
Input: 4 3
Output: 64 Hint how to calculate 4^3 = 4 * 4 * 4 =64 */

//solution:-

/* var x = +window.prompt("Enter Number");
var y = +window.prompt("Enter Power");
var z = 1;
for (var i = 1; i <= y; i++) {
    z = z * x;
}
document.getElementById("demo").innerHTML = z; */
//===========================================================================

//Q12 (second)

/* Write a program to enter marks of five subjects and calculate total, average and percentage.
Example
Input: - Enter Marks of five subjects:
95
76
58
90
89
Output:-.Total marks = 435
Average Marks =87
Percentage =87 */

//solution:-

/* var x = [5], y = ['First', 'second', 'third', 'fourth', 'fifth'];
var total = 1, ave = 1, pre = 1;
for (var i = 0; i < 5; i++) {
    x[i] = +window.prompt("Enter Marks of " + y[i] + " subject");
}
for (var i = 0; i < 5; i++) {
    total += x[i];
}
ave = total / 5;
pre = (total / 500) * 100;
document.getElementById('demo').innerHTML = 'total marks : ' + total;
document.getElementById('demo').innerHTML += '<br>' + 'average : ' + ave;
document.getElementById('demo').innerHTML += '<br>' + 'Percentage : ' + pre; */

//==========================================================================

//Q13

/* Write a program to input month number and print number of days in that month.
Example:
Input: - Month Number: 1
Output:-. Days in Month: 31 */

//solution:-

/* var month = +window.prompt("Enter the month number(1-12): ");
if (month === 1) {
    document.getElementById("demo").innerHTML = "Days in January Month: 31 day";
} else if (month === 2) {
    document.getElementById("demo").innerHTML = "Days in February Month: 28 or 29 day";
} else if (month === 3) {
    document.getElementById("demo").innerHTML = "Days in March Month: 31 day";
} else if (month === 4) {
    document.getElementById("demo").innerHTML = "Days in April Month: 30 day";
} else if (month === 5) {
    document.getElementById("demo").innerHTML = "Days in May Month: 31 day";
} else if (month === 6) {
    document.getElementById("demo").innerHTML = "Days in June Month: 30 day";
} else if (month === 7) {
    document.getElementById("demo").innerHTML = "Days in July Month: 31 day";
} else if (month === 8) {
    document.getElementById("demo").innerHTML = "Days in August Month: 31 day";
} else if (month === 9) {
    document.getElementById("demo").innerHTML = "Days in September Month: 30 day";
} else if (month === 10) {
    document.getElementById("demo").innerHTML = "Days in October Month: 31 day";
} else if (month === 11) {
    document.getElementById("demo").innerHTML = "Days in November Month: 30 day";
} else if (month === 12) {
    document.getElementById("demo").innerHTML = "Days in December Month: 31 day";
} else {
    window.alert("Invalid Input!");
} */
//=========================================================================================

//Q14

/* Write a program to input marks of five subjects
Physics, Chemistry, Biology, Mathematics and Computer
, Find percentage and grade
Percentage >= 90%: Grad A
Percentage >= 80%: Grad B
Percentage >= 70%: Grad C
Percentage >= 60%: Grad D
Percentage >= 40%: Grad E
Percentage < 40%: Grad F */

//solution:-

/* var subjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'Computer'];
var marks = [5];
for (var i = 0; i < 5; i++) {
    marks[i] = window.prompt("Enter " + subjects[i] + " Grade ...");
}
for (var i = 0; i < 5; i++) {
    if (marks[i] >= 90) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is : A" + "<br>";
    } else if (marks[i] >= 80) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is :B" + "<br>";
    } else if (marks[i] >= 70) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is :C" + "<br>";
    } else if (marks[i] >= 60) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is :D" + "<br>";
    } else if (marks[i] >= 40) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is :E" + "<br>";
    } else if (marks[i] < 40) {
        document.getElementById('demo').innerHTML += "your " + subjects[i] + " grade is :F" + "<br>";
    } else {
        document.getElementById('demo').innerHTML += " you Failed!" + "br";
    }
} */
//=======================================================================================

//******************************** Using switch case*******************************

//Q15

/*Write a program to print total number of days in month */

//solution:-

/* var month = +window.prompt("Enter the month number(1-12): ");
switch (month) {
    case 1: document.getElementById("demo").innerHTML = "Days in January Month: 31 day";
        break;
    case 2: document.getElementById("demo").innerHTML = "Days in February Month: 28 or 29 day";
        break;
    case 3: document.getElementById("demo").innerHTML = "Days in March Month: 31 day";
        break;
    case 4: document.getElementById("demo").innerHTML = "Days in April Month: 30 day";
        break;
    case 5: document.getElementById("demo").innerHTML = "Days in May Month: 31 day";
        break;
    case 6: document.getElementById("demo").innerHTML = "Days in June Month: 30 day";
        break;
    case 7: document.getElementById("demo").innerHTML = "Days in July Month: 31 day";
        break;
    case 8: document.getElementById("demo").innerHTML = "Days in August Month: 31 day";
        break;
    case 9: document.getElementById("demo").innerHTML = "Days in September Month: 30 day";
        break;
    case 10: document.getElementById("demo").innerHTML = "Days in October Month: 31 day";
        break;
    case 11: document.getElementById("demo").innerHTML = "Days in November Month: 30 day";
        break;
    case 12: document.getElementById("demo").innerHTML = "Days in December Month: 31 day";
        break;
    default: alert("Invalid Input!");
} */
//=========================================================================================

//Q16

//Write a program to check whether an alphabet is vowel or consonant

//solution:-

/* var x = window.prompt("write a char");
switch (x) {
    case 'a':
        document.getElementById("demo").innerHTML = "vowel";
        break;
    case 'e':
        document.getElementById("demo").innerHTML = "vowel";
        break;
    case 'i':
        document.getElementById("demo").innerHTML = "vowel";
        break;
    case 'o':
        document.getElementById("demo").innerHTML = "vowel";
        break;
    case 'u':
        document.getElementById("demo").innerHTML = "vowel";
        break;
    default:
        document.getElementById("demo").innerHTML = "consonant";
} */
//====================================================================

//Q17

//Write a program to find maximum between two numbers

//solution:-

/* var x = +window.prompt("First Number"), y = +window.prompt("second number");
switch (true) {
    case x > y:
        document.getElementById("demo").innerHTML = "Maximum value of " + x + " and " + y + " is : " + x;
        break;
    case y > x:
        document.getElementById("demo").innerHTML = "Maximum value of " + x + " and " + y + " is : " + y;
        break;
    default:
        window.alert("equal number !!!");

} */
//===========================================================================

//Q18

//Write a program to check whether a number is even or odd

/* var x = Number(window.prompt("Enter Number"));
switch (true) {
    case x % 2 == 0:
        document.getElementById("demo").innerHTML = "even";
        break;
    default:
        document.getElementById("demo").innerHTML = "odd";
} */
//==================================================================================

//Q19

//Write a program to check whether a number is positive or negative or zero

//solution:-

/* var x = Number(window.prompt("Enter Number"));
switch (true) {
    case x > 0:
        document.getElementById("demo").innerHTML = "positive";
        break;
    case x < 0:
        document.getElementById("demo").innerHTML = "negative";
        break;
    default:
        document.getElementById("demo").innerHTML = "zero";
} */
//==================================================================================

//Q20

//Write a program to create Simple Calculator

//solution:-

/* var x = +window.prompt("First Number");
var y = +window.prompt("Second Number");
var z = window.prompt("Enter operator");
switch (z) {
    case '+':
        document.getElementById('demo').innerHTML = (x + " + " + y + " = " + (x + y));
        break;
    case '-':
        document.getElementById('demo').innerHTML = (x + " - " + y + " = " + (x - y));
        break;
    case '*':
        document.getElementById('demo').innerHTML = (x + " * " + y + " = " + (x * y));
        break;
    case '/':
        if (y == 0 || y < 0) {
            alert("Division by Zero or negative not allowed")
        } else {
            document.getElementById('demo').innerHTML = (x + " / " + y + " = " + (x / y));
        }
        break;
        default:
            window.alert("invalid operator");
} */