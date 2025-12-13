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
/  of its diagonals. For example, the square matrix arr is shown below:
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

