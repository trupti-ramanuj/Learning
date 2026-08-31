# Project related to Dom

## project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-4dniuxfr?embed=1&file=1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'purple') {
            body.style.backgroundColor = e.target.id;
        }
    });
});


```

## project 2 solution

```javascript
const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {

        result.innerHTML = `please give a valid height ${height}`

    } else if (weight === '' || weight < 0 || isNaN(weight)) {

        result.innerHTML = `please give a valid weight ${weight}`

    } else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2)

        //show the result

        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {

            result.innerHTML = `Under Weight ${bmi}`

        } else if (bmi === 18.6 || bmi <= 24.9) {

            result.innerHTML = `Normal Range ${bmi}`

        }
        else {

            result.innerHTML = `Overweight ${bmi}`

        }
    }

});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

// let date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```
## project 4 solution code
```javascript
const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess < 1) {
        alert('Please enter a number more than 1')
    } else if (guess > 100) {
        alert('Please enter a valid number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right')
        endGame()
    } else if (guess < randomNumber) {
        displayMessage('Number is Tooo low ')
    } else if (guess > randomNumber) {
        displayMessage('Number is Tooo High ')
    }
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}



function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('displed')
        startOver.removeChild(p)

        playGame=true;
    });
}


```
