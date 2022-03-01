let game = prompt('Are you ready to play a game? Enter yes or no.');
if (game == 'yes') {
    window.alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');
    
    let direction = prompt('Which direction would you like to head (please enter forward, left,  or right)?');
    switch (direction) {
        case 'left':
            window.alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
            break;
        case 'forward':
            window.alert('You walk 100 yards and safely make your way out of the cave.');
            break;
        case 'right':
            window.alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
        default:
            window.alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
    }
        let rating = parseInt(prompt('Please rate this game between 1 and 10.'));
        if (rating < 1 || rating > 10) {
            window.alert('Thank you for playing this game.');
        } else if (rating >= 6 && rating <= 10) {
            window.alert('Thank you, please play again.');
        } else {
            window.alert('Thank you, we are working hard to improve this game.')
        }
} else if (game == 'no') {
    window.alert('Thank you, please play again sometime.');
} else {
    window.alert('Thank you, please play again sometime.');
}