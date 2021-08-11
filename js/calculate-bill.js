//get a reference to the calculate button
const calculateButtonElemnt = document.querySelector(".calculateBtn");
const billTotalElemnt = document.querySelector(".billTotal");
const billStringElemnt = document.querySelector(".billString");

//totalphonebill function

function totalPhoneBill(usage) {
    var arrUsage = usage.trim().split(/,\s*/);
    var callUsage = [];
    var smsUsage = [];

    for (var i = 0; i < arrUsage.length; i++) {
        if (arrUsage[i].startsWith('c')) {
            callUsage.push(arrUsage[i]);
        } else if (arrUsage[i].startsWith('s')) {
            smsUsage.push(arrUsage[i]);
        };
    };
    var callCost = callUsage.length * 2.75;
    var smsCost = smsUsage.length * 0.75;
    var totalCost = callCost + smsCost;
    var billAmount = totalCost.toFixed(2).toString();

    return billAmount;
}
// calculatebutton function
function calculateBtnClicked() {
    var billString = billStringElemnt.value;
    var billTotal = totalPhoneBill(billString);
    billTotalElemnt.innerHTML = billTotal;

    billTotalElemnt.classList.remove("warning", "danger");

    if (billTotal >= 20 && billTotal < 30) {
        billTotalElemnt.classList.add("warning");
    }
    else if (billTotal >= 30) {
        billTotalElemnt.classList.add("danger");
    }
}
calculateButtonElemnt.addEventListener('click', calculateBtnClicked);
