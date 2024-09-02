function CheckIsEmpty() {
    let sum = Number(document.getElementById("sum").value);
    let quan = Number(document.getElementById("quan").value);
    let sor1 = Number(document.getElementById("sor1").value);
    let sor2 = Number(document.getElementById("sor2").value);
    let sor3 = Number(document.getElementById("sor3").value);
    let sor4 = Number(document.getElementById("sor4").value);
    let sor5 = Number(document.getElementById("sor5").value);
    let sor6 = Number(document.getElementById("sor6").value);
    let sor7 = Number(document.getElementById("sor7").value);
    let sor8 = Number(document.getElementById("sor8").value);
    let soch1_new = Number(document.getElementById("soch1-new").value);
    let soch2_new = Number(document.getElementById("soch2-new").value);
    let op_in_new = Number(document.getElementById("op-in-new").value);
    let soch_in_new = Number(document.getElementById("soch-in-new").value);
    if (sum == "" && quan == "" && sor1 == "" && sor2 == "" && sor3 == "" && sor4 == "" && sor5 == "" && sor6 == "" && sor7 == "" & sor8 == "" & soch1_new == "" && soch2_new == "" && op_in_new == "" && soch_in_new == "") {
        let output_text_new = document.getElementById("output-text-new");
        output_text_new.innerHTML = "";
        output_text_new.removeAttribute('style');
    }
    if (sor1 == "" && sor2 == "") {
        document.getElementById("sor_1").style.backgroundColor = "#4b9a25";
    }
    if (sor3 == "" && sor4 == "") {
        document.getElementById("sor_2").style.backgroundColor = "#4b9a25";
    }
    if (sor5 == "" && sor6 == "") {
        document.getElementById("sor_3").style.backgroundColor = "#4b9a25";
    }
    if (sor7 == "" && sor8 == "") {
        document.getElementById("sor_4").style.backgroundColor = "#4b9a25";
    }
    if (soch1_new == "" && soch2_new == "") {
        document.getElementById("soch-new").style.backgroundColor = "#4b9a25";
    }

    let fo1 = document.getElementById("fo1").value;
    if (fo1 == ""){
        document.getElementById("output-fo-help").setAttribute("hidden", "hidden");
        document.getElementById("output-fo-help-new").setAttribute("hidden", "hidden");
        document.getElementById("output-fo-two").setAttribute("hidden", "hidden");
        document.getElementById("fo-main").style.backgroundColor = "#4b9a25";
    }

    let so1 = document.getElementById("so1").value;
    let so2 = document.getElementById("so2").value;
    if (so1 == "" && so2 =="") {
        document.getElementById("so-main").style.backgroundColor = "#4b9a25";
        document.getElementById("output-so-help").setAttribute("hidden", "hidden");
    }

}

function CallOneSO() {  
    if (document.getElementById("sor/soch").checked == true) {
        document.getElementById("fo-pln").checked = false;
        document.getElementById("so-container").removeAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        OneSO();
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
        document.getElementById("output-so").removeAttribute("hidden", "hidden");
    }
}

function OneSO() {
    var so1 = Number(document.getElementById("so1").value);
    var so2 = Number(document.getElementById("so2").value);
    var output_pre = document.getElementById("output-pre");
    var output_pre_otv = document.getElementById("output-pre-otv");
    var so_main = document.getElementById("so-main");
    
    var result_so = so1 / so2 * 100;
    if (isNaN(result_so) == true || isFinite(result_so) == false){
        output_pre.innerHTML = "0%";
    } else {
        output_pre.innerHTML = result_so.toFixed(1) + "%";
    }
    
    if (result_so < 0) {
        output_pre.innerHTML = "ERROR";
        output_pre_otv.innerHTML = "ERROR";
        output_pre.style.backgroundColor = "#ff6666";
        output_pre_otv.style.backgroundColor = "#ff6666";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (result_so >= 0 && result_so < 40) {
        output_pre.style.backgroundColor = "#ff6666";
        output_pre_otv.style.backgroundColor = "#ff6666";
        so_main.style.backgroundColor = "#ff6666";
        output_pre_otv.innerHTML = "ПЛХ(2)";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (result_so >= 40 && result_so < 65) {
        output_pre.style.backgroundColor = "#f9a23b";
        output_pre_otv.style.backgroundColor = "#f9a23b";
        so_main.style.backgroundColor = "#f9a23b";
        output_pre_otv.innerHTML = "УДВ(3)";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (result_so >= 65 && result_so < 85){
        output_pre.style.backgroundColor = "#4b9a25";
        output_pre_otv.style.backgroundColor = "#4b9a25";
        so_main.style.backgroundColor = "#4b9a25";
        output_pre_otv.innerHTML = "ХОР(4)";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (result_so >= 85 && result_so <= 100) {
        output_pre.style.backgroundColor = "#4b9a25";
        output_pre_otv.style.backgroundColor = "#4b9a25";
        so_main.style.backgroundColor = "#4b9a25";
        output_pre_otv.innerHTML = "ОТЛ(5)";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else if (result_so > 100){
        output_pre.innerHTML = "ERROR";
        output_pre_otv.innerHTML = "ERROR";
        output_pre.style.backgroundColor = "#ff6666";
        output_pre_otv.style.backgroundColor = "#ff6666";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        document.getElementById("output-so-help").removeAttribute("hidden", "hidden");
    } else {}
    CheckIsEmpty();
}

function OneFO() {
    var fo = Number(document.getElementById("fo1").value);
    var output_fo = document.getElementById("output-fo");
    var output_fo_one = document.getElementById("output-fo-one");
    var output_fo_three = document.getElementById("output-fo-three");

    var num1 = "Выполнил до 10 % учебных заданий, допущены ошибки, на уроке пассивный, не делает выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий, не знает пройденный материал";
    var num2 = "Выполнил до 20 % учебных заданий, допущены ошибки, на уроке пассивный, не всегда делает соответствующие выводы по итогам обратной связи с учителем, не проявляет самостоятельность при выполнении заданий";
    var num3 = "Выполнил до 30 % учебных заданий, допущены ошибки, стремится исправить свои ошибки, на уроке иногда проявляет активность, нуждается в поддержке учителя/родителей/сверстников при выполнений учебных заданий";
    var num4 = "Выполнил до 40 % учебных заданий, допустил ошибки, нуждается в помощи при исправлении ошибок, не всегда проявляет активность, иногда  проявляет самостоятельность при выполнении заданий";
    var num5 = "Выполнил до 50 % учебных заданий, допустил до 5-ти ошибок, нуждается в помощи учителя, на уроке не всегда активный, иногда проявляет самостоятельность при выполнении посильных заданий";
    var num6 = "Выполнил до 60 % учебных заданий, допустил до 4-х ошибок, нуждается в помощи учителя, на уроке проявляет старательность, самостоятельно может выполнить задания средней сложности";
    var num7 = "Выполнил до 70 % учебных заданий, допустил до 3-х ошибок, своевременно устранил ошибки, на уроке активный, проявляет самостоятельность при выполнении заданий";
    var num8 = "Выполнил до 80 % учебных заданий, допустил 1-2 незначительных ошибок, на основе комментариев учителя самостоятельно исправляет свои ошибки, активный, самостоятельный";
    var num9 = "Выполнил до 90 % учебных заданий, допустил незначительные неточности при выполнении  заданий, работает над ошибками, активный, самостоятельный";
    var num10 = "Выполнил 100 % учебных заданий, не допустил ошибок, активный, самостоятельный, может объяснить, обосновать свои ответы";

    if (fo == 0) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num1;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 1) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num1;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 2) {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num2;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 3){
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 2 (ПЛХ)"
        output_fo.innerHTML = num3;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "Уровень знаний: низкий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    } else if (fo == 4) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num4;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 5) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num5;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 6) {
        document.getElementById("fo-main").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-one").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").style.backgroundColor = "#f9a23b";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 3 (УДВ)"
        output_fo.innerHTML = num6;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 7) {
        document.getElementById("fo-main").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-one").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 4 (ХОР)"
        output_fo.innerHTML = num7;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        output_fo_three.innerHTML = "Уровень знаний: средний";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#f9a23b";
    } else if (fo == 8) {
        document.getElementById("fo-main").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-one").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 4 (ХОР)"
        output_fo.innerHTML = num8;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#4b9a25";
    } else if (fo == 9) {
        document.getElementById("fo-main").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-one").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 5 (ОТЛ)"
        output_fo.innerHTML = num9;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#4b9a25";
    } else if (fo == 10) {
        document.getElementById("fo-main").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-one").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").style.backgroundColor = "#4b9a25";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "Оценка: 5 (ОТЛ)"
        output_fo.innerHTML = num10;
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
        output_fo_three.innerHTML = "Уровень знаний: высокий";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#4b9a25";
    } else {
        document.getElementById("fo-main").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-one").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").style.backgroundColor = "#ff6666";
        document.getElementById("output-fo-two").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-help").removeAttribute("hidden", "hidden");
        output_fo_one.innerHTML = "ERROR"
        output_fo.innerHTML = "Упс, у вас ошибка.";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
        output_fo_three.innerHTML = "ERROR";
        document.getElementById("output-fo-help-new").removeAttribute("hidden", "hidden");
        document.getElementById("output-fo-three").style.backgroundColor = "#ff6666";
    }
    CheckIsEmpty();
}

function CallFull() {
    if (document.getElementById("fo-pln").checked == true) {
        document.getElementById("sor/soch").checked = false;
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").removeAttribute("hidden", "hidden");
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
    }
}

function CallOneFO() {
    if (document.getElementById("fo-pln").checked == true) {
        document.getElementById("sor/soch").checked = false;
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").removeAttribute("hidden", "hidden");
    } else {
        document.getElementById("so-container").setAttribute("hidden", "hidden");
        document.getElementById("fo-container").setAttribute("hidden", "hidden");
        document.getElementById("new-container").removeAttribute("hidden", "hidden");
    }
}

function enableSum() {
    document.getElementById("sum").disabled = false;
    document.getElementById("quan").disabled = false;
    document.getElementById("sor1").disabled = false;
    document.getElementById("sor2").disabled = false;
    document.getElementById("sor3").disabled = false;
    document.getElementById("sor4").disabled = false;
    document.getElementById("sor5").disabled = false;
    document.getElementById("sor6").disabled = false;
    document.getElementById("sor7").disabled = false;
    document.getElementById("sor8").disabled = false;
    document.getElementById("op-two").removeAttribute("hidden", "hidden");
    document.getElementById("op-one").setAttribute("hidden", "hidden");
}
function disableSum() {
    document.getElementById("sum").disabled = true;
    document.getElementById("quan").disabled = true;
    document.getElementById("sor1").disabled = true;
    document.getElementById("sor2").disabled = true;
    document.getElementById("sor3").disabled = true;
    document.getElementById("sor4").disabled = true;
    document.getElementById("sor5").disabled = true;
    document.getElementById("sor6").disabled = true;
    document.getElementById("sor7").disabled = true;
    document.getElementById("sor8").disabled = true;
    document.getElementById("op-one").removeAttribute("hidden", "hidden");
    document.getElementById("op-two").setAttribute("hidden", "hidden");
}
function enableSoch() {
    document.getElementById("soch1-new").disabled = false;
    document.getElementById("soch2-new").disabled = false;
    document.getElementById("soch-two").removeAttribute("hidden", "hidden");
    document.getElementById("soch-one").setAttribute("hidden", "hidden");
}
function disableSoch() {
    document.getElementById("soch1-new").disabled = true;
    document.getElementById("soch2-new").disabled = true;
    document.getElementById("soch-one").removeAttribute("hidden", "hidden");
    document.getElementById("soch-two").setAttribute("hidden", "hidden");
}

function FOPlan() {
    var sum = Number(document.getElementById("sum").value);
    var quan = Number(document.getElementById("quan").value);
    var sor1 = Number(document.getElementById("sor1").value);
    var sor2 = Number(document.getElementById("sor2").value);
    var sor3 = Number(document.getElementById("sor3").value);
    var sor4 = Number(document.getElementById("sor4").value);
    var sor5 = Number(document.getElementById("sor5").value);
    var sor6 = Number(document.getElementById("sor6").value);
    var sor7 = Number(document.getElementById("sor7").value);
    var sor8 = Number(document.getElementById("sor8").value);
    var soch1_new = Number(document.getElementById("soch1-new").value);
    var soch2_new = Number(document.getElementById("soch2-new").value);
    var op_in_new = Number(document.getElementById("op-in-new").value);
    var soch_in_new = Number(document.getElementById("soch-in-new").value);
    var op_out_new = document.getElementById("op-out-new");
    var soch_out_new = document.getElementById("soch-out-new");
    var summa_out_new = document.getElementById("summa-out-new");
    var output_text_new = document.getElementById("output-text-new");
    
    var prem1 = [sor1, sor3, sor5, sor7,];
    var prem2 = [sor2, sor4, sor6, sor8,]; 
    var prem1_checked = Number(prem1.reduce((a, b,) => a + b));
    var prem2_checked = Number(prem2.reduce((a, b,) => a + b));
    
    var sum_op = sum + quan + prem1_checked + prem2_checked;
    var sum_soch = soch1_new + soch2_new;

    
    if (sum_op > 0 && sum_soch > 0) {
        enableSum();
        enableSoch();

        var quan_resilt = quan * 10;
        var op_result = ((prem1_checked + sum) / (prem2_checked + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let op_result_fix = Number(op_result.toFixed(1));
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((op_result_fix + result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (sum_op > 0 && soch_in_new > 0) {
        enableSum();
        disableSoch();

        var quan_resilt = quan * 10;
        var op_result = ((prem1_checked + sum) / (prem2_checked + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        let op_result_fix = Number(op_result.toFixed(1));
        let result_new = Number((op_result_fix + soch_in_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0 && sum_soch > 0) {
        disableSum();
        enableSoch();

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((op_in_new + result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0 && soch_in_new > 0) {
        disableSum();
        disableSoch();

        let result_new = Number((op_in_new + soch_in_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (document.getElementById("sum").value.length > 0 || document.getElementById("quan").value.length > 0 || document.getElementById("sor1").value.length > 0 || document.getElementById("sor2").value.length > 0 || document.getElementById("sor3").value.length > 0 || document.getElementById("sor4").value.length > 0 || document.getElementById("sor5").value.length > 0 || document.getElementById("sor6").value.length > 0 || document.getElementById("sor7").value.length > 0 || document.getElementById("sor8").value.length > 0) {
        enableSum();
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");

        var quan_resilt = quan * 10;
        var op_result = ((prem1_checked + sum) / (prem2_checked + quan_resilt)) * 50;

        if (isNaN(op_result) == true || isFinite(op_result) == false){
            op_out_new.innerHTML = "0.0%";
            op_result = 0;
        } else {
            op_out_new.innerHTML = op_result.toFixed(1) + "%";
        }

        var op_result_fix = Number(op_result.toFixed(1));
        var result_fix_new = op_result_fix.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (document.getElementById("soch1-new").value.length > 0 || document.getElementById("soch2-new").value.length > 0) {
        enableSoch();

        var result_soch_new = (soch1_new / soch2_new) * 50
        if (isNaN(result_soch_new) == true || isFinite(result_soch_new) == false){
            soch_out_new.innerHTML = "0.0%";
            result_soch_new = 0;
        } else {
            soch_out_new.innerHTML = result_soch_new.toFixed(1) + "%";
        }
        
        let result_soch_fix_new = Number(result_soch_new.toFixed(1));
        let result_new = Number((result_soch_fix_new).toFixed(1));
        var result_fix_new = result_new.toFixed();
        summa_out_new.innerHTML = result_fix_new + "%";

    } else if (op_in_new > 0) {
        disableSum();
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");

        var result_fix_new = Number(op_in_new);
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";

    } else if (soch_in_new > 0) {
        disableSoch();
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1").disabled = false;
        document.getElementById("sor2").disabled = false;
        document.getElementById("sor3").disabled = false;
        document.getElementById("sor4").disabled = false;
        document.getElementById("sor5").disabled = false;
        document.getElementById("sor6").disabled = false;
        document.getElementById("sor7").disabled = false;
        document.getElementById("sor8").disabled = false;

        var result_fix_new = Number(soch_in_new);
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";

    } else {
        document.getElementById("op-one").removeAttribute("hidden", "hidden");
        document.getElementById("soch-one").removeAttribute("hidden", "hidden");
        document.getElementById("op-two").setAttribute("hidden", "hidden");
        document.getElementById("soch-two").setAttribute("hidden", "hidden");
        document.getElementById("sum").disabled = false;
        document.getElementById("quan").disabled = false;
        document.getElementById("sor1").disabled = false;
        document.getElementById("sor2").disabled = false;
        document.getElementById("sor3").disabled = false;
        document.getElementById("sor4").disabled = false;
        document.getElementById("sor5").disabled = false;
        document.getElementById("sor6").disabled = false;
        document.getElementById("sor7").disabled = false;
        document.getElementById("sor8").disabled = false;
        document.getElementById("soch1-new").disabled = false;
        document.getElementById("soch2-new").disabled = false;

        var result_fix_new = 0;
        summa_out_new.innerHTML = result_fix_new.toFixed() + "%";
    }

    if (result_fix_new < 0) { 
        output_text_new.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
    } else if (result_fix_new >= 0 && result_fix_new < 40) {
        output_text_new.innerHTML = "Оценка за четверть: 2";
        document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
    } else if (result_fix_new >= 40 && result_fix_new < 65) {
        output_text_new.innerHTML = "Оценка за четверть: 3";
        document.getElementById("output-text-new").style.backgroundColor = "#f9a23b";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#f9a23b");
    } else if (result_fix_new >= 65 && result_fix_new < 85){
        output_text_new.innerHTML = "Оценка за четверть: 4";
        document.getElementById("output-text-new").style.backgroundColor = "#4b9a25";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
    } else if (result_fix_new >= 85 && result_fix_new <= 100) {
        output_text_new.innerHTML = "Оценка за четверть: 5";
        document.getElementById("output-text-new").style.backgroundColor = "#4b9a25";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#4b9a25");
    } else {
        output_text_new.innerHTML = "Где-то ошибка ...";
        document.getElementById("output-text-new").style.backgroundColor = "#ff6666";
        let metaThemeColorAndroid = document.querySelector("meta[name=theme-color]");
        metaThemeColorAndroid.setAttribute("content", "#ff6666");
    }
    CheckIsEmpty();
    checkSors(sor1,sor2,"sor_1");
    checkSors(sor3,sor4,"sor_2");
    checkSors(sor5,sor6,"sor_3");
    checkSors(sor7,sor8,"sor_4");
    checkSors(soch1_new,soch2_new,"soch-new");
}
function checkSors(sor1,sor2,id) {
    var checked = ((sor1/sor2)*100).toFixed();
    if (checked < 0) { 
        document.getElementById(id).style.backgroundColor = "#ff6666";
    } else if (checked >= 0 && checked < 40) {
        document.getElementById(id).style.backgroundColor = "#ff6666";
    } else if (checked >= 40 && checked < 65) {
        document.getElementById(id).style.backgroundColor = "#f9a23b";
    } else if (checked >= 65 && checked < 85){
        document.getElementById(id).style.backgroundColor = "#4b9a25";
    } else if (checked >= 85 && checked <= 100) {
        document.getElementById(id).style.backgroundColor = "#4b9a25";
    } else if (checked == isFinite(checked) || checked == isNaN(checked)){
        document.getElementById(id).style.backgroundColor = "#4b9a25";
    }
}