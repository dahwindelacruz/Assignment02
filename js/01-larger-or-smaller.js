let x = parseInt(prompt('Please enter a number.'));
let y = parseInt(prompt('Please enter another number'));
if (x > y) {
    document.write(x + ' is greater than ' + y +'!');
} else if (x === y) {
    document.write('The numbers are the same!');
} else {
    document.write(y + ' is greater than ' + x +'!');
}