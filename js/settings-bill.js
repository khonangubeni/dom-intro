// get a reference to the sms or call radio buttons

//variables
var radioBillAddButton = document.querySelector('.radioBillAddButton');
var updateSettings = document.querySelector('.updateSettings');
//variables
var callCostSettingElemnt = document.querySelector('.callCostSetting');
var smsCostSettingElemnt = document.querySelector('.smsCostSetting');
var warningLevelSettingElemnt = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElemnt = document.querySelector('.criticalLevelSetting');

//variables
var callTotalSettingsElemnt = document.querySelector('.callTotalSettings');
var smsTotalSettingElemnt = document.querySelector('.smsTotalSettings');
var totalSettingsElemnt = document.querySelector('.totalSettings');
//variables
var callsTotalSetting = 0;
var smsTotalSetting = 0;
var totalCost = 0;


updateSettings.addEventListener('click', function(){

   
    var callCostSetting = callCostSettingElemnt.value;
    if(parseInt(callCostSetting)<= 29)
    {
        callsTotalSetting += parseInt(callCostSetting);
    }

    var smsCostSetting = smsCostSettingElemnt.value;
    if(parseInt(smsCostSetting)<= 29)
    {
        smsTotalSetting += parseInt(smsCostSetting);
    }
    
    var warningLevelSetting = warningLevelSettingElemnt.value;
    if(parseInt(smsCostSetting)>= 30 || parseInt(smsCostSetting)< 60)
    {
        totalCost += parseInt(warningLevelSetting);
    }
    
    var criticalLevelSetting = criticalLevelSettingElemnt.value;;
    if(parseInt(smsCostSetting)>= 60)
    {
        totalCost += parseInt(criticalLevelSetting);
    } 
 
});


radioBillAddButton.addEventListener('click', function(){
         

    var billItemTypeWithSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        var billItemType = billItemTypeWithSettings.value
        // billItemType will be 'call' or 'sms'
      
        if (billItemType === "call"){
            callsTotalSetting += 2.75
        }
        else if (billItemType === "sms"){
            smsTotalSetting += 0.75;
        }
        
        //update the totals that is displayed on the screen.
        callTotalSettingsElemnt.innerHTML = callsTotalSetting.toFixed(2);
        smsTotalSettingElemnt.innerHTML = smsTotalSetting.toFixed(2);
        totalCost = callsTotalSetting + smsTotalSetting;
        totalSettingsElemnt.innerHTML = totalCost.toFixed(2);
        
        
        if (totalCost >= 50){
            // adding the danger class will make the text red
            totalSettingsElemnt.classList.add("danger");
        }
        else if (totalCost >= 30){
            totalSettingsElemnt.classList.add("warning");
        }
    
});
