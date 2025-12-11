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



