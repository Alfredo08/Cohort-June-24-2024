
let num = 10;

const timer = setInterval(() => {
    console.log("Hello, the timer is at", num);
    num --;

    if(num <= 0){
        clearInterval(timer);
    }
}, 1000);

console.log("Welcome to our timer!");