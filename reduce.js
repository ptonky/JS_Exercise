/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with 
the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(acc,next){
        acc.push(next[key]); //push adds onto the original array and returns the new array
        return acc;
    },{});
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as 
the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and 
uppercase letter should count.

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next) { //split the string into an array so that we can use the reduce function
        let lowerCased = next.toLowerCase() //set the given string into lower case since the vowel constant is all lower case
        if(vowels.indexOf(lowerCased) !== -1) { //if the element exists within the vowel array (meaning greater than -1)
            if(acc[lowerCased]) { //if the current acc object matches any vowel...
                acc[lowerCased]++; //add 1 to that key
            } else {
                acc[lowerCased] = 1; //if not, give it a value of 1
            }
        }
        return acc; //returns the updated acc and the loop starts again
    }, {});
}

//alternative solution
    const vowels = ["a", "e", "i", "o", "u"];
    const result = str.split('').reduce((start, next) => { //split the string into an array so that we can use the reduce function
        if (vowels.indexOf(next) > -1) {    //if the element exists within the vowel array (meaning greater than -1)
            console.log("This is a vowel: ", next)
            start [next] += -1; //counter that adds 1 into the start object if a vowel is detected
        }
        console.log(start)

        console.log("---------")
        return start
    }, {"a":0, "e":0, "i":0, "o":0, "u":0}); //the start object before we iterate through the given string

    console.log(result);
/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each 
object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
       return arr.reduce(function(acc,next,idx) {
        acc[idx][key] = value;
        return acc;
       }, arr);
    }
/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. 
The partition function should run the callback function on each value in the array and if the result of the callback function 
at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at 
that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {
    return arr.reduce(function(acc,next) {
        if(callback(next)) {
            acc [0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}