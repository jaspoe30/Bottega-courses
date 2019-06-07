newFunction();

function newFunction() {
    let average = (array) => array.reduce((a, b) => a + b) / array.length;
    console.log(average([31, 72, 63, 14, 45]));
}