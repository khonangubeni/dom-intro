// get a reference to the textbox where the bill type is to be entered
const billTypeTextElemnt = document.querySelector(".billTypeText");
const addToBillButtonElemnt = document.querySelector(".addToBillBtn");
const callTotalOneElemnt = document.querySelector(".callTotalOne");
const smsTotalOneElemnt = document.querySelector(".smsTotalOne");
const totalOneElemnt = document.querySelector(".totalOne");
const totalCost_billElemnt = document.querySelector(".totalCost_bill");

var callsTotalOne = 0;
var smsTotalOne = 0;

function textBillTotal() {
    var billTypeText = billTypeTextElemnt.value.trim();

    if (billTypeText == "call") {
        callsTotalOne += 2.75;
    } else if (billTypeText == "sms") {
        smsTotalOne += 0.75;
    }

    callTotalOneElemnt.innerHTML = callsTotalOne.toFixed(2);
    smsTotalOneElemnt.innerHTML = smsTotalOne.toFixed(2);
    var costTotalOne = callsTotalOne + smsTotalOne;
    totalOneElemnt.innerHTML = costTotalOne.toFixed(2);


    totalOneElemnt.classList.remove("warning", "danger");

    if (costTotalOne >= 30 && costTotalOne < 50) {
        totalCost_billElemnt.classList.add("warning");
    }
    else if (costTotalOne >= 50) {
        totalCost_billElemnt.classList.add("danger");
    }
}

addToBillButtonElemnt.addEventListener('click', textBillTotal);
//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
