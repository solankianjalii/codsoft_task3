let expression = "";
const display = document.getElementById('display');

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;        
        if (value === 'C') {
            expression = "";
            display.value = expression;
            return;
        }

        if (value === '=') {
            try {
               
                expression = expression.replace('×', '*');
                display.value = eval(expression);
                expression = display.value; 
            } catch {
                display.value = "Error";
                expression = "";
            }
            return;
        }
        expression += value;
        display.value = expression;
    });
});
