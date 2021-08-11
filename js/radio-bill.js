// get a reference to the sms or call radio buttons
const radioBillAddBtnElemnt = document.querySelector(".radioBillAddBtn");
const callTotalTwoElemnt = document.querySelector(".callTotalTwo");
const smsTotalTwoElemnt = document.querySelector(".smsTotalTwo");
const totalTwoElemnt = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;

// Radio button function

function radioBillTotal() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotal += 2.75;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotal += 0.75;
    }

    callTotalTwoElemnt.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElemnt.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalTwoElemnt.innerHTML = costTotal.toFixed(2);


    totalTwoElemnt.classList.remove("warning", "danger");

    if (costTotal >= 30 && costTotal < 50) {
        totalTwoElemnt.classList.add("warning");
    }
    else if (costTotal >= 50) {
        totalTwoElemnt.classList.add("danger");
    }
}

radioBillAddBtnElemnt.addEventListener('click', radioBillTotal);

