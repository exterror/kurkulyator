const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".num");
const operations = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

let displayNum1 = "";
let displayNum2 = "";
let result = null;
let lastOperation = "";
let decimalDigits = false;

numbers.forEach(number => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !decimalDigits) {
            decimalDigits = true;
        } else if (e.target.innerText === "." && decimalDigits) {
            return;
        }
        displayNum2 += e.target.innerText;
        display.innerText = displayNum2;
    })
})

operations.forEach(operation => {
    operation.addEventListener("click", (e) => {
        if (!displayNum2) result;
        decimalDigits = false;
        const operationName = e.target.innerText;
        if (displayNum1 && displayNum2 && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(displayNum2);
        }
        clearVar(operationName);
        lastOperation = operationName;
    })
})

function clearVar(name = "") {
    displayNum1 += displayNum2 + " " + name + " ";
    display.innerText = result;
    displayNum2 = "";
}

function mathOperation() {
    if (lastOperation === "*") {
        result = parseFloat(result) * parseFloat(displayNum2);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(displayNum2);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(displayNum2);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(displayNum2);
    }
}

equal.addEventListener("click", (e) => {
    if (!displayNum1 || !displayNum2) return;
    decimalDigits = false;
    mathOperation();
    clearVar();
    display.innerText = result;
    displayNum2 = result;
    displayNum1 = "";
})

clear.addEventListener("click", (e) => {
    display.innerText = "0";
    displayNum1 = "";
    displayNum2 = "";
    result = "";
})

window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ) {
        clickButton(e.key);
    } else if (
        e.key === "*" ||
        e.key === "/" ||
        e.key === "+" ||
        e.key === "-"

    ) {
        clickOperation(e.key);
    } else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    }
})

function clickButton(key) {
    numbers.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operations.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickEqual() {
    equal.click();
}

