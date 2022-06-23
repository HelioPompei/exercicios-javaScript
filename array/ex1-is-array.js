/*
 * 1. Write a JavaScript function to check whether an `input` is an array or not. 
 * Test Data :
 * console.log(is_array('w3resource'));
 * console.log(is_array([1, 2, 4, 0]));
 * false
 * true
*/

let input1 = "String";
let input2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let input3 = [];

/* METODO 1 */
const is_array1 = data => data instanceof Array;

console.log("metodo 1 :" + is_array1(input1));
console.log("metodo 1 :" + is_array1(input2));
console.log("metodo 1 :" + is_array1(input3));

/* METODO 2 */
console.log("metodo 2 :" + Array.isArray(input1));
console.log("metodo 2 :" + Array.isArray(input2));
console.log("metodo 2 :" + Array.isArray(input3));

/* METODO 3 */
var is_array2 = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    return false;
};
console.log("metodo 3 :" + is_array2(input1));
console.log("metodo 3 :" + is_array2(input2));
console.log("metodo 3 :" + is_array2(input3));

