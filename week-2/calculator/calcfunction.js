function calculate(operation) {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let answer;

    if (operation === "add") {
        answer = num1 + num2;
    }
    else if (operation === "subtract") {
        answer = num1 - num2;
    }
    else if (operation === "multiply") {
        answer = num1 * num2;
    }
    else if (operation === "divide") {

        if (num2 === 0) {
            answer = "Cannot divide by zero";
        }
        else {
            answer = num1 / num2;
        }
    }

    document.getElementById("result").textContent = answer;
}