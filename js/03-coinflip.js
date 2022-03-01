let coinFlip = Math.floor(Math.random() * 10) + 1;
let choice = window.prompt('Heads or tails');
if (coinFlip <= 5 && choice == "heads") {
    window.document.write('The flip was heads and you chose heads...you win!');
} else if (coinFlip <= 5 && choice == 'tails') {
    window.document.write('The flip was heads but you chose tails...you lose!')
} else if (coinFlip >= 6 && choice == 'heads') {
    window.document.write('The flip was tails but you chose heads...you lose!')
} else {
    window.document.write('The flip was tails and you chose tails...you win!')
}