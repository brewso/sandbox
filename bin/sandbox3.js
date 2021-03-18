#!/usr/bin/env node --experimental-modules

// Use the getMostCommonCharacter() function to find and return the most common Character in the String.

const start = () => {

    let bigString = "ngjiopdbnspaih vjolkenbaoiph joapnjhbjhgfiopsjahnoibptheoiwhnbitohsauibhtiudsahutiohbwiahotb";

    console.log(getMostCommonCharacter(bigString));
};

const getMostCommonCharacter = (string) => {
    // Use this space to solve the problem
    let letter = "end";
    let array = {};
    let count = 0;

    //get each letter and its count into an object
    for (let i = 0; i < string.length; i++) {
        if (array[string[i]] === undefined) {
            array[string[i]] = 1;
        } else {
            array[string[i]] += 1;
        }
    }

    //get the max count
    for (let i in array) {
        if(array[i] > count){
            count = array[i];
            letter = i;
        }
    }


    return letter;
};

start();
