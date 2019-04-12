# wgsn-code-challenge
Question 1:

"use strict";

 

/**

* Find the greatest common divisor (GCD) of two positive integers.

*

* @param {number} a - The first integer

* @param {number} b - The second integer

*

* @return {number} The largest integer that evenly divides both numbers

*/

const gcd = (a, b) => {

                // Please implement this.

};

 

console.log("gcd(60, 500) = 20:", gcd(60, 500));

console.log("gcd(3125, 100) = 25:", gcd(3125, 100));

console.log("gcd(32, 8) = 8:", gcd(32, 8));

console.log("gcd(4, 9) = 1:", gcd(4, 9));

 

 

 

Question 2:

 

"use strict";

 

/**

* Count the number of anagrams in a list of words.

*

* An anagram is a word made up of the same letters as another word in the array (but not

* necessarily in the same order).

*

* I like to think of it like this: Draw a line connecting each pair of words that contain exactly

* the same letters. For example, with this list of words:

*

* TAR RAT BOB ART

*

* You would end up with 3 connecting lines (TAR---RAT, TAR---ART, RAT---ART). So the result is 3.

*

* @param {string[]} wordsList - The list of words

*

* @return {number} The number of words which are anagrams of other words

*/

const countAnagrams = (wordsList) => {

    // Please implement this.

};

 

console.log("Zero:", countAnagrams([]));

console.log("Zero:", countAnagrams(["Top"]));

console.log("Zero:", countAnagrams(["Top", "Spot"]));

console.log("One:", countAnagrams(["Top", "Pot"]));

console.log("Two:", countAnagrams(["Top", "Pot", "Spot", "Stop", "Foo"]));

console.log("Three:", countAnagrams(["Top", "Pot", "Opt"]));

console.log("Nine:", countAnagrams(["Top", "Pot", "Opt", "Spot", "Stop", "Tops", "Opts"]));