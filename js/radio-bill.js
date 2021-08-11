// get a reference to the sms or call radio buttons
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");

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

    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalTwoElement.innerHTML = costTotal.toFixed(2);


    totalTwoElement.classList.remove("warning", "danger");

    if (costTotal >= 30 && costTotal < 50) {
        totalTwoElement.classList.add("warning");
    }
    else if (costTotal >= 50) {
        totalTwoElement.classList.add("danger");
    }
}

radioBillAddBtnElement.addEventListener('click', radioBillTotal);

