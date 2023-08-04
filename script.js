// let firstDigit;
// let secondDigit;
// let operator;
// let result;
// let eqString;
// let count = 0;

// const resultView = document.getElementById('result');
// const eqStringView = document.getElementById('eqString');

// const clearBtn = document.getElementsByClassName('clear');
// const deleteBtn = document.getElementsByClassName('delete');
// const numberbtns = document.querySelectorAll('.digit');
// const opBtns = document.querySelectorAll('.op');

// numberbtns.forEach((button) =>
//   button.addEventListener('click', () => appendNumber(button.textContent))
// )

// opBtns.forEach((btn) => 
//     btn.addEventListener('click', () => appendOperator(btn.textContent))
// )

// function appendNumber(n) {
//     eqStringView.textContent += n; 
// }

// function appendOperator(op) {
//     eqStringView.textContent += op; 
// }

// function operate(digit1, digit2, operator) {
//     if (operator=='+') {
//         result = digit1 + digit2;
//         eqString = digit1 + " + " + digit2;
//     } 
//     else if (operator=='-') {
//         result = digit1 - digit2;
//         eqString = digit1 + " - " + digit2;
//     }
//     else if (operator=='x') {
//         result = digit1 * digit2;
//         eqString = digit1 + " x " + digit2;
//     }
//     else if (operator=='÷') {
//         result = digit1 / digit2;
//         eqString = digit1 + " + " + digit2;
//     }

//     populate(result, eqString);
// }

// function populate(result, eqString) {
//     resultView.textContent = result;
//     eqStringView.textContent = eqString;
// }

// Function to update the displayed equation and result
function updateDisplay(value) {
    document.getElementById('eqString').textContent = value;
}

function updateResult(value) {
    document.getElementById('result').textContent = value;
}

// Function to evaluate the mathematical expression
function evaluateExpression(expression) {
    try {
        const result = Function(`return ${expression}`)();
        return result;
    } catch (error) {
        return 'Error';
    }
}

// Function to handle digit and operator button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    const eqString = document.getElementById('eqString').textContent;

    // If the CLEAR button is clicked, reset the display
    if (buttonValue === 'CLEAR') {
        updateDisplay('0');
        updateResult('0');
        return;
    }

    // If the DELETE button is clicked, remove the last character from the display
    if (buttonValue === 'DELETE') {
        updateDisplay(eqString.slice(0, -1));
        return;
    }

    // If the = (equal) button is clicked, evaluate the equation and display the result
    if (buttonValue === '=') {
        try {
            const result = evaluateExpression(eqString);
            updateResult(result.toString());
        } catch (error) {
            updateResult('Error');
        }
        return;
    }

    // For other buttons, append the clicked value to the displayed equation
    updateDisplay(eqString === '0' ? buttonValue : eqString + buttonValue);
}

// Function to add click event listeners to all buttons
function addClickEventListeners() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

// Function to handle keyboard events
function handleKeyboardEvent(event) {
    const key = event.key;

    // Allow specific keyboard keys for calculator functionality
    if (/^[0-9+\-*/.=]$/.test(key)) {
        debugger;
        event.preventDefault(); // Prevent default behavior of the key (e.g., scrolling)
        let keyText = key;
        let button = document.getElementsByClassName(keyText);
        if (button.length > 0) {
            button[0].click(); // Click the first element in the collection
        }
    } else if (key === 'Enter') {
        // Simulate the click of the '=' button when 'Enter' is pressed
        const equalButton = document.querySelector('.op-equal');
        if (equalButton) {
            equalButton.click();
        }
    } else if (key === 'Backspace') {
        // Handle the backspace functionality
        event.preventDefault(); // Prevent default behavior of the key (e.g., going back in the browser)
        const eqString = document.getElementById('eqString').textContent;
        if (eqString.length > 0) {
            updateDisplay(eqString.slice(0, -1)); // Remove the last character from the displayed equation
        }
    }
}

// Call the function to add click event listeners to all buttons
addClickEventListeners();

// Add event listener for keyboard events
document.addEventListener('keydown', handleKeyboardEvent);