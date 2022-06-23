/* 
 * Write a JavaScript function to clone an array.
 * Test Data :
 * console.log(array_Clone([1, 2, 4, 0]));
 * console.log(array_Clone([1, 2, [4, 0]]));
 * [1, 2, 4, 0]
 * [1, 2, [4, 0]]
 */

array1 = [1, 2, 4, 0];
array2 = [1, 2, [4, 0]];

console.log(array_clone1(array1));
console.log(array_clone1(array2));

console.log(array_clone2(array1));
console.log(array_clone2(array2));

/* METODO 1 */
function array_clone1(input) {
    let clone = [...input];
    return clone;
}

/* METODO 2 */
function array_clone2(input) {
    return input.slice(0);
}

