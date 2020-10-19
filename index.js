const { fuchsia } = require("color-name");

document.querySelectorAll('.test').addEventListener('click',()=>{
    alert('test');
})

const test = () => {
    console.log('active');
}

test();

console.log('new');
console.log('super new');

function sum (a, b) {
    return a + b;
};

sum(1, 2);