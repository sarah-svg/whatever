const catPic = document.getElementById('cat-pic');
const dogPic = document.getElementById('dog-pic');
const horsePic = document.getElementById('horse-pic');

const catSound = document.getElementById('cat-sound');
const dogSound = document.getElementById('dog-sound');
const horseSound = document.getElementById('horse-sound');

// event listeners 
catPic.addEventListener('click', () => {
    catSound.play();
    // catPic.style.transform = 'rotate(360deg)';
});

catPic.addEventListener('click', () => {
    // catPic.classList.toggle('rotated');
    catPic.style.transform = 'rotate(360deg)';
});

dogPic.addEventListener('click', () => {
    dogSound.play();
});
horsePic.addEventListener('click', () => {
    horseSound.play();
});

// keydown event listeners
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        catSound.play();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        dogSound.play();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play();
    }
});



// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
