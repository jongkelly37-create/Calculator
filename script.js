// Get the display and all buttons
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = ''; // Stores what user types

// Loop through all buttons and listen for clicks
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number; // number buttons
        const action = button.dataset.action; // operators and special buttons

        // If button is a number or dot
        if (number !== undefined) {
            // Prevent multiple dots
            if (number === '.' && currentInput.includes('.')) return;
            currentInput += number;
            display.textContent = currentInput;
        }

        // If button is an action
        if (action !== undefined) {
            if (action === 'clear') { // AC button
                currentInput = '';
                display.textContent = '0';
            } else if (action === 'delete') { // DEL button
                currentInput = currentInput.slice(0, -1);
                display.textContent = currentInput || '0';
            } else if (action === '=') { // Equal button
                try {
                    // Calculate result
                    currentInput = eval(currentInput).toString();
                    display.textContent = currentInput;
                } catch {
                    display.textContent = 'Error';
                    currentInput = '';
                }
            } else { // Operators like +, -, *, /, %
                currentInput += action;
                display.textContent = currentInput;
            }
        }
    });
});