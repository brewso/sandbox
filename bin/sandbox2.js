#!/usr/bin/env node --experimental-modules

// Use the getLongerString() function to find and return the longest String in the Array.

const start = () => {

    let arrayOfStrings = ["Apples", "Oranges", "Blueberries", "Peaches", "Raspberries", "Strawberries", "Watermelon"];

    console.log(getLongestString(arrayOfStrings));
};

const getLongestString = (array) => {
    // Use this space to solve the problem
    let longest = "";
    for (var i = 0; i < array.length; i++) {
        if (array[i].length > longest.length) {
            longest = array[i];
        }
    }
    return longest;
};

start();
