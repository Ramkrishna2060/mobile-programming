
function mymarks() {

    let subject1 = Number(document.getElementById("Sub1").value);
    let subject2 = Number(document.getElementById("Sub2").value);
    let subject3 = Number(document.getElementById("Sub3").value);
    let subject4 = Number(document.getElementById("Sub4").value);
    let subject5 = Number(document.getElementById("Sub5").value);
    let subject6 = Number(document.getElementById("Sub6").value);
    let subject7 = Number(document.getElementById("Sub7").value);
    let subject8 = Number(document.getElementById("Sub8").value);

    let total = subject1 + subject2 + subject3 + subject4 +
                subject5 + subject6 + subject7 + subject8;

    document.getElementById("total").innerText =
        "Total Marks = " + total;

    if (total > 800) {

        document.getElementById("result").innerHTML =  "Invalid Marks";
        document.getElementById("result").style.color = "orange";

    }
    else if (total >= 700) {

        document.getElementById("result").innerHTML =  "You got Distinction";
        document.getElementById("result").style.color = "green";

    }
    else if (total >= 300) {

        document.getElementById("result").innerHTML = "You Passed";
        document.getElementById("result").style.color = "green";

    }
    else {

        document.getElementById("result").innerHTML = "You Failed";
        document.getElementById("result").style.color = "red";
    }
}
