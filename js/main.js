const result = document.querySelector('#result');
const passLength = document.querySelector('#length');
const passLengthResult = document.querySelector('#length-result')
const includeNumbers = document.querySelector('#numbers');
const includeSymbols = document.querySelector('#symbols');
const generateBtn = document.querySelector('#generate');
const copyPass = document.querySelector('#copy');
const lowerCase = document.querySelector('#lowerCase');
const upperCase = document.querySelector('#upperCase');

const strength = document.querySelector('.strength');
const span1 = document.querySelector('.span1');
const span2 = document.querySelector('.span2');
const span3 = document.querySelector('.span3');
const span4 = document.querySelector('.span4');
// Set default password length 20 max on load
document.addEventListener('DOMContentLoaded', () => {
    passLength.value = 10;
    passLengthResult.innerText = 10;

    let onLoadLength = passLength.value;
    let onLoadNumbers = includeNumbers.checked;
    let onLoadSymbols = includeSymbols.checked;
    let onLoadLowerCase = lowerCase.checked;
    let onLoadUpperCase = upperCase.checked;
    result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength, onLoadLowerCase, onLoadUpperCase);
    if (onLoadNumbers == true && onLoadSymbols == true && onLoadLowerCase == true && onLoadUpperCase == true) {
        span1.style.backgroundColor = "green";
        span2.style.backgroundColor = "green";
        span3.style.backgroundColor = "green";
        span4.style.backgroundColor = "green";
    }
})

// Listen for password range change
passLength.addEventListener('change', (event) => {
    passLengthResult.innerText = event.target.value
})

// Listen for copy button
copyPass.addEventListener('click', () => {
    copy(result.value)
})

generateBtn.addEventListener('click', () => {
    const length = passLength.value;
    const numbers = includeNumbers.checked;
    const symbols = includeSymbols.checked;
    const lower = lowerCase.checked;
    const upper = upperCase.checked;
    result.value = generatePassword(numbers, symbols, length, lower, upper);
    if (numbers == true && symbols == true && lower == true && upper == true) {
        span1.style.backgroundColor = "green";
        span2.style.backgroundColor = "green";
        span3.style.backgroundColor = "green";
        span4.style.backgroundColor = "green";
    }
    else if (numbers == false && symbols == false && lower == false && upper == false) {
        span1.style.backgroundColor = "red";
        span2.style.backgroundColor = "red";
        span3.style.backgroundColor = "red";
        span4.style.backgroundColor = "red";
    }

    if (upper == true) {
        span1.style.backgroundColor = "green";
    } else {
        span1.style.backgroundColor = "red";
    }

    if (lower == true) {
        span2.style.backgroundColor = "green";
    } else {
        span2.style.backgroundColor = "red";
    }

    if (numbers == true) {
        span3.style.backgroundColor = "green";
    } else {
        span3.style.backgroundColor = "red";
    }

    if (symbols == true) {
        span4.style.backgroundColor = "green";
    } else {
        span4.style.backgroundColor = "red";
    }

    // if (upper == true) {
    //     if (lower == true) {
    //         if (numbers == true) {
    //             if (symbols == true) {
    //                 span1.style.backgroundColor = "green";
    //                 span2.style.backgroundColor = "green";
    //                 span4.style.backgroundColor = "green";
    //                 span3.style.backgroundColor = "green";
    //             } else {
    //                 span1.style.backgroundColor = "red";
    //                 span2.style.backgroundColor = "red";
    //                 span4.style.backgroundColor = "red";
    //                 span3.style.backgroundColor = "red";
    //             }
    //             span2.style.backgroundColor = "green";
    //             span4.style.backgroundColor = "green";
    //             span3.style.backgroundColor = "green";
    //         } else {
    //             span2.style.backgroundColor = "red";
    //             span4.style.backgroundColor = "red";
    //             span3.style.backgroundColor = "red";
    //         }
    //         span4.style.backgroundColor = "green";
    //         span3.style.backgroundColor = "green";
    //     } else {
    //         span4.style.backgroundColor = "red";
    //         span3.style.backgroundColor = "red";
    //     }
    //     span4.style.backgroundColor = "green";
    // }
    // else {
    //     span4.style.backgroundColor = "red";
    // }
})

function generatePassword(number, symbol, length, lower, upper) {
    let generatedPassword = '';
    let variationsCount = [lower, length, upper, number, symbol].length

    for (let i = 0; i < length; i += variationsCount) {
        if (lower) {
            generatedPassword += getRandomLower();
        }
        if (upper) {
            generatedPassword += getRandomUpper();
        }
        if (number) {
            generatedPassword += getRandomNumber();
        }
        if (symbol) {
            generatedPassword += getRandomSymbol();
        }
    }

    finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

function getRandomLower() {
    const mainLowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return mainLowerCase.toLowerCase();
}

function getRandomUpper() {
    const mainUpperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    return mainUpperCase.toUpperCase();
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Copy generated password in more secure way
function copy(text) {
    const input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    let copiedResult = document.execCommand('copy');
    document.body.removeChild(input);

    const alert = document.createElement("div")
    alert.classList.add("alert");
    alert.textContent = "Copied!"
    document.body.appendChild(alert)

    setTimeout(() => {
        document.querySelector('.alert').style.display = "none"
        document.body.removeChild(alert)
    }, 1000)
    return result;
}

const slider = document.getElementById("myRange");
const output = document.getElementById("length");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}