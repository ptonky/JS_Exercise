// forEach

const colors = ['teal', 'cyan', 'peach', 'purple' ];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(colors, function(color) {
    console.log(color.toUpperCase());
})

// Map
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
    return a.href;
});

myMap([1,2,3], function(val){
    return val * 3
})

[3,6,9]

function myMap(arr, callback) {
    const mappedArray = [];
    for(let i=0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i]));
    }
    return mappedArray;
}

const priorityMap = myMap(todos, function(todo) {
    return todo.priority;
});

//filter
filter(arr, callback)

function myFilter(arr, callback) {
    const filteredArray = [];
    for (let i=0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }    
    return filteredArray;
}