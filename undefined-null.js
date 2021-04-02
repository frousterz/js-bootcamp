// undefined is used to represent the absense oif a value
let name 
console.log(name)

if (name === undefined) {
    console.log('provide a name');
} else {
    console.log(name);
}

// undefined for function params
// undefined as function default return value

let square = function (num) {
    console.log(num);
}

let result = square(3)
console.log(result);  // <---- undefined


let age = 27
// null as assigned value
age = null



// Summary
// null is an assigned value. It means nothing.
// undefined typically means a variable has been declared but not defined yet.
// null and undefined are falsy values.
// null and undefined are both primitives. However an error shows that typeof null = object.
// null !== undefined but null == undefined