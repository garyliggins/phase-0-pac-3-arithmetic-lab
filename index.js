const add = (a,b) => {
return a + b;
}

const subtract = (a,b) => {
return a - b;
}

const multiply = (a,b) => {
return a * b;
}

const divide = (a,b) => {
return a / b;
}

const increment = (n) => {
    return n+=1;
}

const decrement = (n) => {
    return n-=1;
}

function makeInt(string) {
    return parseInt(string,10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}
