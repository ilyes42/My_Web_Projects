var op = "";
var inOperation = false;
var emptyDisplay = false;
var maxText = 20;
var calcMemory = [];
var displayText = document.querySelector("#displayText");
var digits = document.querySelectorAll(".digits");
console.log(digits);
var ac = document.querySelector("#ac");
var equal = document.querySelector("#equal");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var mul = document.querySelector("#mul");
var divis = document.querySelector("#divis");
var sign = document.querySelector("#sign");
var decimal = document.querySelector("#decimal");
var percent = document.querySelector("#percent");

for (var i = 0; i < digits.length; i++) {
    digits[i].addEventListener("click", function () {
        if (emptyDisplay) {
            console.log(calcMemory);
            displayText.textContent = "0";
            emptyDisplay = false;;
        }
        if (displayText.textContent.length < maxText) {
            if (displayText.textContent === "0") {
                displayText.textContent = this.textContent;
            } else {
                displayText.textContent += this.textContent;
            }
        }
    });
}

ac.addEventListener("click", function () {
    calcMemory = [];
    displayText.textContent = "0";
    console.log(calcMemory);
    inOperation = false;
});

sign.addEventListener("click", function () {
    if (emptyDisplay) {
        displayText.textContent = "0";
        emptyDisplay = false;
    }
    if (displayText.textContent !== "0") {
        if (displayText.textContent[0] !== "-") displayText.textContent = "-" + displayText.textContent;
        else displayText.textContent = displayText.textContent.substr(1);
    }
});

decimal.addEventListener("click", function () {
    if (emptyDisplay) {
        displayText.textContent = "0";
        emptyDisplay = false;
    }
    if (!displayText.textContent.includes(".")) displayText.textContent += ".";
    inOperation = false;
});

plus.addEventListener("click", function () {
    if (inOperation) {
        if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
        calcMemory = [operation(calcMemory)];
        displayText.textContent = calcMemory[0];
        console.log(calcMemory);
        calcMemory = [];
    }
    if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
    inOperation = true;
    emptyDisplay = true;
    op = "plus";
});

minus.addEventListener("click", function () {
    if (inOperation) {
        if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
        calcMemory = [operation(calcMemory)];
        displayText.textContent = calcMemory[0];
        console.log(calcMemory);
        calcMemory = [];
    }
    if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
    inOperation = true;
    emptyDisplay = true;
    op = "minus";
});

mul.addEventListener("click", function () {
    if (inOperation) {
        if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
        calcMemory = [operation(calcMemory)];
        displayText.textContent = calcMemory[0];
        console.log(calcMemory);
        calcMemory = [];
    }
    if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
    inOperation = true;
    emptyDisplay = true;
    op = "mul";
});

divis.addEventListener("click", function () {
    if (inOperation) {
        if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
        calcMemory = [operation(calcMemory)];
        displayText.textContent = calcMemory[0];
        console.log(calcMemory);
        calcMemory = [];
    }
    if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
    inOperation = true;
    emptyDisplay = true;
    op = "divis";
});

percent.addEventListener("click", function(){
    displayText.textContent = Number.parseFloat(displayText.textContent) / 100;
});

equal.addEventListener("click", eq);

function eq() {
    if (displayText.textContent !== "0") calcMemory.push(Number.parseFloat(displayText.textContent));
    displayText.textContent = operation(calcMemory);
    calcMemory = [];
    console.log(calcMemory);
    inOperation = false;
    emptyDisplay = true;
}

function sum(arr) {
    return arr.reduce(function (acc, val) {
        return acc + val;
    });
}

function product(arr) {
    return arr.reduce(function (acc, val) {
        return acc * val;
    });
}

function dif(arr) {
    return arr.reduce(function (acc, val) {
        return acc - val;
    });
}

function division(arr) {
    return arr.reduce(function (acc, val) {
        return acc / val;
    });
}

function operation(x) {
    switch (op) {
        case "plus":
            return sum(x);
        case "minus":
            return dif(x);
        case "divis":
            return division(x);
        case "mul":
            return product(x);
        default:
            return;
    }
}