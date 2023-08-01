let firstDigit;
let secondDigit;
let result;

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    if(btn.classList.contains('digit')) {
        firstDigit = parseInt(btn.textContent);
    }
    operate();
});

function operate() {
    
}