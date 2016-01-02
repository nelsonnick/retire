/**
 * Created by 王天硕 on 2015/12/31.
 */
function getCalculateMonth(retireAge) {
    if (retireAge == 40) {
        return 233;
    }
    else if (retireAge == 41) {
        return 230;
    }
    else if (retireAge == 42) {
        return 226;
    }
    else if (retireAge == 43) {
        return 223;
    }
    else if (retireAge == 44) {
        return 220;
    }
    else if (retireAge == 45) {
        return 216;
    }
    else if (retireAge == 46) {
        return 212;
    }
    else if (retireAge == 47) {
        return 208;
    }
    else if (retireAge == 48) {
        return 204;
    }
    else if (retireAge == 49) {
        return 199;
    }
    else if (retireAge == 50) {
        return 195;
    }
    else if (retireAge == 51) {
        return 190;
    }
    else if (retireAge == 52) {
        return 185;
    }
    else if (retireAge == 53) {
        return 180;
    }
    else if (retireAge == 54) {
        return 175;
    }
    else if (retireAge == 55) {
        return 170;
    }
    else if (retireAge == 56) {
        return 164;
    }
    else if (retireAge == 57) {
        return 158;
    }
    else if (retireAge == 58) {
        return 152;
    }
    else if (retireAge == 59) {
        return 145;
    }
    else if (retireAge == 60) {
        return 139;
    }
    else if (retireAge == 61) {
        return 132;
    }
    else if (retireAge == 62) {
        return 125;
    }
    else if (retireAge == 63) {
        return 117;
    }
    else if (retireAge == 64) {
        return 109;
    }
    else if (retireAge == 65) {
        return 101;
    }
    else if (retireAge == 66) {
        return 93;
    }
    else if (retireAge == 67) {
        return 84;
    }
    else if (retireAge == 68) {
        return 75;
    }
    else if (retireAge == 69) {
        return 65;
    }
    else if (retireAge == 70) {
        return 56;
    }
    else
        return "超过设定范围，无法识别";
}
function simpleCalculate() {
    var retireAge = document.getElementById("retireAge").value;
    var latelyWages = document.getElementById("latelyWages").value;
    var payMonth = document.getElementById("payMonth").value;
    var averageNumber = document.getElementById("averageNumber").value;
    var accountBalance = document.getElementById("accountBalance").value;
    var workYear = document.getElementById("workYear").value;
    var workMonth = document.getElementById("workMonth").value;
    var buildYear = document.getElementById("buildYear").value;
    var buildMonth = document.getElementById("buildMonth").value;
    var basicMoney = document.getElementById("basicMoney");
    var limboMoney = document.getElementById("limboMoney");
    var accountMoney = document.getElementById("accountMoney");
    var totalMoney = document.getElementById("totalMoney");
    var CalculateMonth = getCalculateMonth(retireAge);

    var work = new Date(workYear, workMonth, "1", "0", "0", "0");
    var build = new Date(buildYear, buildMonth, "1", "0", "0", "0");
    var difference = (build.getYear() - work.getYear()) * 12 + build.getMonth() - work.getMonth();

    var a = parseFloat(((parseInt(latelyWages) + latelyWages * averageNumber) / 2 * payMonth / 12 * 0.01)).toFixed(3);
    var b = parseFloat((accountBalance / CalculateMonth)).toFixed(3);
    var c = parseFloat((latelyWages * averageNumber * 0.013 * difference / 12)).toFixed(3);
    var d = (parseFloat(a) + parseFloat(b)).toFixed(3);
    var e = (parseFloat(a) + parseFloat(b) + parseFloat(c)).toFixed(3);

    basicMoney.innerHTML = "基础养老金=(职工退休上限度全市在岗职工月平均工资+本人指数化月平均工资)/2*缴费年限*1%:" + a + "元";
    accountMoney.innerHTML = "个人账户养老金=个人账户存储额/计发月份:" + b + "元";
    if (build > work) {
        limboMoney.innerHTML = "过渡性养老金=本人指数化月平均工资*1.3%*缴费年限(建立个人账户前的缴费年限):" + c + "元";
        totalMoney.innerHTML = "退休金=基础养老金+过渡性养老金+个人账户养老金:" + e + "元";
    }
    else {
        limboMoney.innerHTML = "过渡性养老金=本人指数化月平均工资*1.3%*缴费年限(建立个人账户前的缴费年限):" + 0.000 + "元";
        totalMoney.innerHTML = "退休金=基础养老金+过渡性养老金+个人账户养老金:" + d + "元";
    }
}
function clearForm() {
    document.getElementById("limboMoney").innerHTML = "过渡性养老金=本人指数化月平均工资*1.3%*缴费年限(建立个人账户前的缴费年限)";
    document.getElementById("accountMoney").innerHTML = "个人账户养老金=个人账户存储额/计发月份";
    document.getElementById("totalMoney").innerHTML = "退休金=基础养老金+过渡性养老金+个人账户养老金";
    document.getElementById("retireAge").value = "50";
    document.getElementById("latelyWages").value = "4376";
    document.getElementById("payMonth").value = "180";
    document.getElementById("averageNumber").value = "0.600";
    document.getElementById("accountBalance").value = "0.00";
    document.getElementById("workYear").value = "1980";
    document.getElementById("workMonth").value = "1";
    document.getElementById("buildYear").value = "1996";
    document.getElementById("buildMonth").value = "1";
}