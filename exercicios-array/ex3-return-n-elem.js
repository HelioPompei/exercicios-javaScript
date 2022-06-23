/* 
 * Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 * Test Data :
 * console.log(first([7, 9, 0, -2]));
 * console.log(first([],3));
 * console.log(first([7, 9, 0, -2],3));
 * console.log(first([7, 9, 0, -2],6));
 * console.log(first([7, 9, 0, -2],-3));
 * Expected Output :
 * 7
 * []
 * [7, 9, 0]
 * [7, 9, 0, -2]
 * []
 */

console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/* METODO 1 */

function first(array, n) {
    if (array.length == 0) {
        return [];
    } else if (n == null) {
        return array[0];
    } else if (n < 0) {
        return [];
    } else {
        return array.slice(0, n);
    }
}
