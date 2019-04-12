"use strict";

// Question 2:

// Count the number of anagrams in a list of words.
// An anagram is a word made up of the same letters as another word in the array (but not necessarily in the same order).
// I like to think of it like this: Draw a line connecting each pair of words that contain exactly the same letters. For example, with this list of words:
// TAR RAT BOB ART
// You would end up with 3 connecting lines (TAR---RAT, TAR---ART, RAT---ART). So the result is 3.

const countAnagrams = (wordsList) => {
    if(
      Array.isArray(wordsList) === false 
      || 
      wordsList.every(x => { return typeof x === 'string' }
    )) 
    return 0; // Judging by the examples, I assume that we can only accept an array of strings

    const sortByLetter = wordsList.map(x => x.toLowerCase().split("").sort().join(""));
    const countWords = sortByLetter.reduce( (prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
    const getValues = Object.values(countWords);
    const applyFormula = getValues.map(x => (x * (x - 1))/2);
    const count = applyFormula.reduce((prev, cur) =>  prev + cur);
    return count;   
};

