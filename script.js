var ans = 0;

var exp = "";

var digitflg = false;

function digitalfunction(event) {
    // debugger
    // var num = event.target.innerText;
    // digitflg = true;
    // exp = exp + (num);

    // document.getElementById("clickit").innerHTML = exp;

}

function reset() {
    exp = "";
}

function operatorfun(event) {

    // console.log(operator)
    // debugger

    if (digitflg === true) {

        var opt = event.target.innerText;
        exp = exp + opt;

        document.getElementById("clickit").innerHTML = exp;

        digitflg = false;

    }
}

function equalfun(event) {

    exp = exp.replace(/×/g, "*");
    var ans = Function(`'use strict'; return (${exp})`)()
    exp = ans;
    document.getElementById("clickit").innerHTML = ans;

}

function pointfun(event) {

    document.getElementById("clickit").innerHTML = exp;
    // console.log(event.target.innerText)

}

function btnac() {

    digitflg = false

    reset();

    // debugger
    document.getElementById("clickit").innerHTML = 0;
}

$(document).ready(function(){
    $(".clicked").click(function(event){
    debugger
    var num = event.target.innerText;
    digitflg = true;
    exp = exp + (num);

    // document.getElementById("clickit").innerHTML = exp;
    $('#clickit').html(exp);
    })
})

