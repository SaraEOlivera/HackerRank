// 1 - 
// Solved me First: Complete the function to compute the sum
//  of 2 integers.

function solvedMeFirst(a,b) {
    return a+b;
}

console.log("solvedMeFirst: ", solvedMeFirst(2,3));

//***************************************************** */

// 2 - Simple Array Sum: Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}
let numeros = [1, 2, 3];
console.log("simpleArraySum:", simpleArraySum(numeros));

//************************************************************ */

// 3 - Compare the Triplets
/*
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges,
 awarding points on a scale from 1 to 100 for three categories: problem clarity, originality,
  and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for
 Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to calculate their comparison points by comparing each category:

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
*/

function compareTheTriplets(a,b) {
    let winAna = 0;
    let winBob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) 
            winAna++;
        else if (a[i] < b[i])
            winBob++
    }
    return [winAna, winBob];
}

let anna = [21, 22, 23];
let bob = [43, 42, 1];
console.log("compareTheTriplets: ", compareTheTriplets(anna, bob));

/*************************************************************************** */


// 4 - In this challenge, you need to calculate and print the sum of elements in an array,
//  considering that some integers may be very large.

function aVeryBigSum(ar) {
    let bigSum = 0n;

    for (let i = 0; i < ar.length; i++) {
        bigSum += BigInt(ar[i]);
    }
    return bigSum;
}

unArray = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]  

console.log("aVeryBigSum", aVeryBigSum(unArray));

/* 5 - Given a square matrix, calculate the absolute difference between the sums
of its diagonals. For example, the square matrix arr is shown below:
1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 = 15
The right-to-left diagonal = 3+5+9 = 17
Their absolute difference is 15 - 17 = 2
*/

function diagonalDifference(arr) {
    // Write your code here
    let sumLR = 0;
    let sumRL = 0;
    for(i = 0; i< arr.length; i++){
        sumLR += arr[i][i];
        sumRL += arr[i][(arr.length - 1)- i];
    }
    return Math.abs(sumLR - sumRL); 
}

matriz = [[1,2,3],[4,5,6],[9,8,9]];
console.log(diagonalDifference(matriz));

/*
6 - Given an array of integers, calculate the ratios of its elements that are
positive, negative, and zero. Print the decimal value of each fraction on a new line
 with 6 places after the decimal.
 */
let items = [0, -67, -74, -38, -72, -53, 0, -13, -95, -91, -100, -59, 0, -10, -68, -71, -62, -21, 0, -42, -57, -16, -66, -23, 0, -80, -63, -68, -65, -71, 0, -71, -15, -32, -26, -8, 0, -6, -51, -87, -19, -71, 0, -93, -26, -35, -56, -89, 0, -21, -74, -39, -57, -8, 0, -69, -29, -24, -99, -53, 0, -65, -42, -72, -18, -4, 0, -73, -46, -63, -78, -87];
console.log("cant: ", items.length)
function plusMinus(arr) {
    // Write your code here
    let pos = 0;
    let neg = 0;
    let zeros = 0;
    let total = arr.length;
    for (let i = 0; i< total; i++){
        if (arr[i] === 0) zeros++;
        else if (arr[i] > 0) pos++;
        else neg++;
    }
    let rNeg = neg / total;
    rNeg = rNeg.toFixed(6);
    let rPos = pos / total;
    rPos = rPos.toFixed(6);
    let rZero = zeros / total;  
    rZero = rZero.toFixed(6);

    console.log(rPos);
    console.log(rNeg);
    console.log(rZero);
}

console.log("plusMinus ", plusMinus(items));

/*
7 - This is a staircase of size n = 4 Its base and height are both equal to n. 
It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
Write a program that prints a staircase of size n. Print a staircase as described above. 
No value should be returned.
Note: The last line is not preceded by spaces. All lines are right-aligned.
*/
function staircase(n) {
    // Write your code here
    let symbA = "#";
    let symB = " ";
    let row = 1;
    while (row <= n) {
        let linea = "";
        let espacios =symB.repeat(n - row); 
        let caracter = symbA.repeat(row);
        row++;
        linea += espacios + caracter
        console.log(linea);
        linea = "";
    }
}
console.log("Staircase ", staircase(6));

/*
7 - Given five positive integers, find the minimum and maximum values that can be calculated
 by summing exactly four of the five integers. Then print the respective minimum and maximum
  values as a single line of two space-separated long integers.
 */

let elems = [1,3,5,7,9];
function miniMaxSum(arr) {
    // Write your code here
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+= arr[i]
    }
    let numMin = Math.min(...arr);
    let numMax = Math.max(...arr);
    let sumMax  = sum - numMin
    let sumMin  = sum - numMax

   console.log(sumMin, sumMax);
}
console.log("miniMaxSum: ", miniMaxSum(elems));

/* 8 - You are in charge of the cake for a child's birthday. It will have one candle 
for each year of their total age. They will only be able to blow out the tallest of the
 candles. Your task is to count how many candles are the tallest. Example:
 candles = [4, 4, 1, 3]. 
 The tallest candles are 4 units high. There are 2 candles with this height, so the 
 function should return 2.
 */
let velas = [82, 49, 82, 82, 41, 82, 15, 63, 38, 25];

function birthdayCakeCandles(candles) {
    // Write your code here
    let totalTall = 0;
    let maxi = Math.max(...candles);
    for(let i=0; i<candles.length; i++){
        if(candles[i] === maxi){
            totalTall++;
        }
    }
    return totalTall;
}

console.log("Velas: ", birthdayCakeCandles(velas));

/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. Example
s = '12:01:00PM' returns '12:01:00'
s = '12:01:00AM' returnos '00:01:00'
 */
