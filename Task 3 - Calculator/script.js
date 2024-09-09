//Light to Drak mode toggle//
function toggleMode() {
    const buttons = document.querySelectorAll('button');
    const display = document.getElementById('display');
    const calculator = document.getElementById('calculator')

    buttons.forEach(button => button.classList.toggle('dark-mode'));
    display.classList.toggle('dark-mode');
    calculator.classList.toggle('dark-mode');


    document.body.classList.toggle('dark-mode');
    document.getElementById('light-icon').style.display = 
        document.body.classList.contains('dark-mode') ? 'none' : 'inline';
    document.getElementById('dark-icon').style.display = 
        document.body.classList.contains('dark-mode') ? 'inline' : 'none';
}

// calculator function//

function appendToDisplay(input) {
    const display = document.getElementById('display');
    if (display) {
        display.value += input;
    }
}

function clearTheDisplay() {
    const display = document.getElementById('display');
    if (display) {
        display.value = '';
    }
}

function calculate(){
    const display = document.getElementById('display');
    if (display) {
        display.value = eval(display.value);
    }
}