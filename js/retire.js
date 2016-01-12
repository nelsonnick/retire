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
function calculate_A() {
    var retireAge_A = document.getElementById("retireAge_A").value;
    var latelyWages_A = document.getElementById("latelyWages_A").value;
    var payMonth_A = document.getElementById("payMonth_A").value;
    var averageNumber_A = document.getElementById("averageNumber_A").value;
    var perMoney_A = document.getElementById("perMoney_A").value;
    var workYear = document.getElementById("workYear").value;
    var workMonth = document.getElementById("workMonth").value;
    var buildYear = document.getElementById("buildYear").value;
    var buildMonth = document.getElementById("buildMonth").value;

    var calculateMonth_A = getCalculateMonth(retireAge_A);

    var work = new Date(workYear, workMonth, "1", "0", "0", "0");
    var build = new Date(buildYear, buildMonth, "1", "0", "0", "0");
    var difference = (build.getYear() - work.getYear()) * 12 + build.getMonth() - work.getMonth();

    var a = parseFloat(((parseInt(latelyWages_A) + latelyWages_A * averageNumber_A) / 2 * payMonth_A / 12 * 0.01)).toFixed(2);
    var b = parseFloat((perMoney_A / calculateMonth_A)).toFixed(2);
    var c = parseFloat((latelyWages_A * averageNumber_A * 0.013 * difference / 12)).toFixed(2);
    var d = (parseFloat(a) + parseFloat(b)).toFixed(2);
    var e = (parseFloat(a) + parseFloat(b) + parseFloat(c)).toFixed(2);
    var f = (parseFloat(payMonth_A / 12)).toFixed(2);

    document.getElementById("basicMoney").innerHTML = a + "元";
    document.getElementById("accountMoney").innerHTML = b + "元";
    document.getElementById("averageNumber").innerHTML = averageNumber_A;
    document.getElementById("calculateMonth").innerHTML = calculateMonth_A;
    document.getElementById("perMoney").innerHTML = perMoney_A + "元";
    document.getElementById("payMoney").innerHTML = "未设定";
    document.getElementById("payYear").innerHTML = f + "年";
    document.getElementById("govMoney").innerHTML = "未设定";
    document.getElementById("returnYear").innerHTML = "无法计算";
    if (build > work) {
        document.getElementById("limboMoney").innerHTML = c + "元";
        document.getElementById("totalMoney").innerHTML = e + "元";
    }
    else {
        document.getElementById("limboMoney").innerHTML = 0.00 + "元";
        document.getElementById("totalMoney").innerHTML = d + "元";
    }


    document.getElementById("st-control-5").checked = "true";
}
function clear_A() {
    document.getElementById("basicMoney").innerHTML = "0元";
    document.getElementById("limboMoney").innerHTML = "0元";
    document.getElementById("accountMoney").innerHTML = "0元";
    document.getElementById("totalMoney").innerHTML = "0元";
    document.getElementById("averageNumber").innerHTML = "0";
    document.getElementById("calculateMonth").innerHTML = "0";
    document.getElementById("perMoney").innerHTML = "0元";
    document.getElementById("payMoney").innerHTML = "未设定";
    document.getElementById("payYear").innerHTML = "0年";
    document.getElementById("govMoney").innerHTML = "0元";
    document.getElementById("returnYear").innerHTML = "0年";


    document.getElementById("retireAge_A").value = "50";
    document.getElementById("latelyWages_A").value = "4376";
    document.getElementById("payMonth_A").value = "180";
    document.getElementById("averageNumber_A").value = "0.600";
    document.getElementById("perMoney_A").value = "0.00";
    document.getElementById("workYear").value = "1980";
    document.getElementById("workMonth").value = "1";
    document.getElementById("buildYear").value = "1996";
    document.getElementById("buildMonth").value = "1";
}
function calculate_B() {
    var retireAge_B = document.getElementById("retireAge_B").value;//退休年龄
    var payMonth_B = document.getElementById("payMonth_B").value;//缴费月份
    var retireUp = document.getElementById("retireUp").value;//增长幅度
    var remainYear = parseInt(payMonth_B / 12);//年数
    var remainMonth = payMonth_B % 12;//月数余数
    var remainYearNext = parseInt(payMonth_B / 12) + 1;//下年数
    var wages = new Array(49);
    var bases = new Array(49);
    var bw = new Array(49);
    var total = 0;//指数总和
    var perMoney_B = 0;//个人账户部分
    var payMoney_B = 0;//累计缴费
    var govMoney_B = 0;//社保统筹部分


    if (parseInt(remainMonth) == 0) {
        for (var o = 1; o < remainYearNext; o++) {
            if (parseInt(document.getElementById("wages" + o).value) == 0) {
                alert("未输入第" + o + "年的社会平均工资。请重新输入后再计算！");
                return;
            }
        }
    } else {
        for (var p = 1; p < (parseInt(remainYear) + 2); p++) {
            if (parseInt(document.getElementById("wages" + p).value) == 0) {
                alert("未输入第" + p + "年的社会平均工资。请重新输入后再计算！");
                return;
            }
        }
    }
    for (var i = 1; i < bases.length; i++) {
        wages[i] = "wages" + i;
        bases[i] = "bases" + i;
        if (parseInt(document.getElementById(wages[i]).value) == 0) {
            break;
        }
        bw[i] = document.getElementById(bases[i]).value / document.getElementById(wages[i]).value;
    }
    for (var l = 1; l < remainYearNext; l++) {
        total = (parseFloat(total) + parseFloat(bw[l])).toFixed(3);
        perMoney_B = (parseFloat(perMoney_B) + document.getElementById(bases[l]).value * 0.08).toFixed(2);
        payMoney_B = (parseFloat(payMoney_B) + document.getElementById(bases[l]).value * 0.2).toFixed(2);
        govMoney_B = (parseFloat(govMoney_B) + document.getElementById(bases[l]).value * 0.12).toFixed(2);
    }
    if (parseInt(document.getElementById("wages" + remainYearNext).value) == 0) {
        total = parseFloat(total) * 12;
        perMoney_B = parseFloat(perMoney_B) * 12;
        payMoney_B = parseFloat(payMoney_B) * 12;
        govMoney_B = parseFloat(govMoney_B) * 12;
    } else {
        total = (parseFloat(total) * 12 + (document.getElementById("bases" + remainYearNext).value / document.getElementById("wages" + remainYearNext).value) * remainMonth).toFixed(2);
        perMoney_B = (parseFloat(perMoney_B) * 12 + document.getElementById("bases" + remainYearNext).value * 0.08 * remainMonth).toFixed(2);
        payMoney_B = (parseFloat(payMoney_B) * 12 + document.getElementById("bases" + remainYearNext).value * 0.2 * remainMonth).toFixed(2);
        govMoney_B = (parseFloat(govMoney_B) * 12 + document.getElementById("bases" + remainYearNext).value * 0.12 * remainMonth).toFixed(2);
    }

    var averageNumber_B = (total / payMonth_B).toFixed(3);
    var calculateMonth_B = getCalculateMonth(retireAge_B);
    var latelyWages_B = document.getElementById("wages" + (parseInt(remainYear) - 1)).value;


    var a = parseFloat(((parseInt(latelyWages_B) + latelyWages_B * averageNumber_B) / 2 * payMonth_B / 12 * 0.01)).toFixed(2);
    var b = parseFloat((perMoney_B / calculateMonth_B)).toFixed(2);
    var c = (parseFloat(a) + parseFloat(b)).toFixed(2);//退休金总计
    var d = (parseFloat(payMonth_B / 12)).toFixed(2);

    var retire = new Array(50);//月退休工资
    var returnYear=0;//领取退休金年限
    var returnMonth=0;//领取退休金年限
    var pm=payMoney_B;
    aaa:
    for (var t = 1; t < retire.length; t++) {
        retire[t] = (c * Math.pow(retireUp * 0.01+1, t - 1)).toFixed(2);
        for(var r=1;r<13;r++){
            if (pm>0){
                pm=pm-retire[t];
            }else{
                returnMonth=r-1;
                break aaa;
            }
        }
        returnYear++;
    }

    document.getElementById("basicMoney").innerHTML = a + "元";
    document.getElementById("accountMoney").innerHTML = b + "元";
    document.getElementById("averageNumber").innerHTML = averageNumber_B;
    document.getElementById("calculateMonth").innerHTML = calculateMonth_B;
    document.getElementById("payMoney").innerHTML = payMoney_B + "元";
    document.getElementById("govMoney").innerHTML = govMoney_B + "元";
    document.getElementById("perMoney").innerHTML = perMoney_B + "元";
    document.getElementById("payYear").innerHTML = d + "年";
    document.getElementById("limboMoney").innerHTML = "0元";
    document.getElementById("totalMoney").innerHTML = c + "元";
    document.getElementById("returnYear").innerHTML = returnYear + "年"+returnMonth + "月";
    document.getElementById("st-control-5").checked = "true";
}

function clear_B() {
    var wages = new Array(49);
    var bases = new Array(49);
    for (var i = 1; i < bases.length; i++) {
        wages[i] = "wages" + i;
        bases[i] = "bases" + i;
        document.getElementById(wages[i]).value = "0";
        document.getElementById(bases[i]).value = "0";
    }
    document.getElementById("wagesRatios").value = "0.00";
    document.getElementById("wagesDiffer").value = "0";
    document.getElementById("averageNumber_B").value = "0.600";
    document.getElementById("retireAge_B").value = "50";
    document.getElementById("payMonth_B").value = "180";
    document.getElementById("retireUp").value = "0";

    document.getElementById("basicMoney").innerHTML = "0元";
    document.getElementById("limboMoney").innerHTML = "0元";
    document.getElementById("accountMoney").innerHTML = "0元";
    document.getElementById("totalMoney").innerHTML = "0元";
    document.getElementById("averageNumber").innerHTML = "0";
    document.getElementById("calculateMonth").innerHTML = "0";
    document.getElementById("perMoney").innerHTML = "0元";
    document.getElementById("payMoney").innerHTML = "未设定";
    document.getElementById("payYear").innerHTML = "0年";
    document.getElementById("govMoney").innerHTML = "0元";
    document.getElementById("returnYear").innerHTML = "0年";

    wagesChange();
}
function payMonthChange() {
    var a = parseFloat(document.getElementById("payMonth_B").value / 12).toFixed(3);
    var wages = new Array(49);
    var bases = new Array(49);

    for (var i = 1; i < bases.length; i++) {
        wages[i] = "wages" + i;
        bases[i] = "bases" + i;
    }
    if (a < 15 || a > 48) {
        for (var m = 1; m < wages.length; m++) {
            document.getElementById(wages[m]).disabled = true;
            document.getElementById(bases[m]).disabled = true;
        }
    } else {
        for (var k = 1; k < Math.ceil(parseFloat(a)) + 1; k++) {
            document.getElementById(wages[k]).disabled = false;
            document.getElementById(bases[k]).disabled = false;
        }
        for (var j = Math.ceil(parseFloat(a)) + 2; j < wages.length; j++) {
            document.getElementById(wages[j]).disabled = true;
            document.getElementById(bases[j]).disabled = true;
        }
    }
}

function firstStep() {
    document.getElementById("wages1").value = document.getElementById("1st").value;
    document.getElementById("1st").value = "0";
    $('#myModal2').modal();
}
function fixed() {
    var wages = new Array(49);
    for (var i = 1; i < wages.length; i++) {
        wages[i] = "wages" + i;
        if (document.getElementById(wages[i]).disabled == false) {
            document.getElementById(wages[i]).value = document.getElementById("wages1").value;
        } else {
            document.getElementById(wages[i]).value = "0";
        }
    }
    wagesChange();
    document.getElementById("wagesRatios").value = "0";
    document.getElementById("wagesDiffer").value = "0";
    $('#myModal3').modal();
}

function ratios() {
    var wages = new Array(49);
    wages[1] = "wages1";
    for (var i = 2; i < wages.length; i++) {
        wages[i] = "wages" + i;
        if (document.getElementById(wages[i]).disabled == false) {
            document.getElementById(wages[i]).value =
                Math.round(parseInt(document.getElementById(wages[i - 1]).value) + document.getElementById(wages[i - 1]).value * parseFloat(document.getElementById("wagesRatios").value).toFixed(2) * 0.01);
        } else {
            document.getElementById(wages[i]).value = "0";
        }
    }
    wagesChange();
    document.getElementById("wagesRatios").value = "0";
    document.getElementById("wagesDiffer").value = "0";
    $('#myModal3').modal();
}

function differ() {
    var wages = new Array(49);
    wages[1] = "wages1";
    for (var i = 2; i < wages.length; i++) {
        wages[i] = "wages" + i;
        if (document.getElementById(wages[i]).disabled == false) {
            document.getElementById(wages[i]).value = parseInt(document.getElementById(wages[i - 1]).value) + parseInt(document.getElementById("wagesDiffer").value);
        } else {
            document.getElementById(wages[i]).value = "0";
        }
    }
    wagesChange();
    document.getElementById("wagesRatios").value = "0";
    document.getElementById("wagesDiffer").value = "0";
    $('#myModal3').modal();
}

function base() {
    var wages = new Array(49);
    var bases = new Array(49);

    for (var i = 1; i < bases.length; i++) {
        bases[i] = "bases" + i;
        wages[i] = "wages" + i;
        if (document.getElementById(bases[i]).disabled == false) {
            document.getElementById(bases[i]).value = Math.ceil(document.getElementById(wages[i]).value * document.getElementById("averageNumber_B").value);
        } else {
            document.getElementById(bases[i]).value = "0";
        }
    }
    document.getElementById("averageNumber_B").value = "0.600";
}


function wagesChange() {
    payMonthChange();
    var wages = new Array(49);
    var bases = new Array(49);

    for (var i = 1; i < bases.length; i++) {
        wages[i] = "wages" + i;
        bases[i] = "bases" + i;
        document.getElementById(bases[i]).min = Math.ceil(document.getElementById(wages[i]).value * 0.6);
        document.getElementById(bases[i]).max = Math.ceil(document.getElementById(wages[i]).value * 3);
        document.getElementById(bases[i]).value = Math.ceil(document.getElementById(wages[i]).value * 0.6);
    }
}

