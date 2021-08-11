// get a reference to the sms or call radio buttons
const callCostSettingElemnt = document.querySelector(".callCostSetting");
const smsCostSettingElemnt = document.querySelector(".smsCostSetting");
const warningLevelSettingElemnt = document.querySelector(".warningLevelSetting");
const criticalLevelElemnt = document.querySelector(".criticalLevelSetting");
const addBtnsettings = document.querySelector(".addBtnsettings");
const updateBtnsettings = document.querySelector(".updateSettings");
const callTotalSettingsElemnt = document.querySelector(".callTotalSettings");
const smsTotalSettingsElemnt = document.querySelector(".smsTotalSettings");
const totalSettingsElemnt = document.querySelector(".totalSettings");


// get refences to all the settings fields
var callCostSetting = 2.75;
var smsCostSetting = 0.75;
var warningLevelSetting = 20;
var criticalLevel = 30;

var callsTotal = 0;
var smsTotal = 0;

//get a reference to the 'Update settings' button
function updateSettings() {

    if (callCostSettingElemnt.value != "") {
        callCostSetting = Number(callCostSettingElemnt.value);
    } 
    if (callCostSettingElemnt.value != "") {
        smsCostSetting = Number(smsCostSettingElemnt.value);
    }
    if (warningLevelSettingElemnt.value != "") {
        warningLevelSetting = Number(warningLevelSettingElemnt.value);
    }
    if (criticalLevelElemnt.value != "") {
        criticalLevel = Number(criticalLevelElemnt.value);
    }

}

// bill total function
function settingsBillTotal() {
    var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotal += callCostSetting;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotal += smsCostSetting;
    }

    callTotalSettingsElemnt.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElemnt.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalSettingsElemnt.innerHTML = costTotal.toFixed(2);


    totalSettingsElemnt.classList.remove("warning", "danger");

    if (costTotal >= warningLevelSetting && costTotal < criticalLevel) {
        totalSettingsElemnt.classList.add("warning");
    }
    else if (costTotal >= criticalLevel) {
        totalSettingsElemnt.classList.add("danger");
    }
}
//add an event listener for when the 'Update settings' button is presse
updateBtnsettings.addEventListener('click', updateSettings);
//add an event listener for when the add button is pressed
addBtnsettings.addEventListener('click', settingsBillTotal);



