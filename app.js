const catPic = document.getElementById('cat-pic');
const dogPic = document.getElementById('dog-pic');
const horsePic = document.getElementById('horse-pic');

const catSound = document.getElementById('cat-sound');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');

// event listeners 
catPic.addEventListener('click', () => {
    catSound.play();
});
dogPic.addEventListener('click', () => {
    dogSound.play();
});
horsePic.addEventListener('click', () => {
    horseSound.play();
});

// keydown event listeners



// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
