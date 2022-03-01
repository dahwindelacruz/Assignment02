let number = parseInt(prompt('Please enter a number between 1 and 100.'));
if (number < 1 || number > 100) {
    console.log('Only numbers between 1 and 100 are acceptable.');
} else if (number >= 60 && number <= 69) {
    console.log('You received a D.');
} else if (number >= 70 && number <= 79) {
    console.log('You received a C.');
} else if (number >= 80 && number <= 89) {
    console.log('You received a B.');
} else if (number >= 80 && number <= 100) {
    console.log('You received a A.'); 
} else {
    console.log('You received and F.');
}