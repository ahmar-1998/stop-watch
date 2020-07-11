var min = 0;
var sec = 0;
var msec = 0;

var minh = document.getElementById("min")
var sech = document.getElementById("sec")
var msech = document.getElementById("msec")

var interval;

function timer(){
    msec++
    msech.innerHTML = msec
    if(msec >=100){
        sec++
        sech.innerHTML = sec
        msec= 0;

    }
    if(sec >=60){
        min++
        minh.innerHTML = min
        sec = 0
    }
}



function start(){
    interval = setInterval(timer, 10)
    const button = document.querySelector('button')
    button.disabled = true
}

function stop(){
    clearInterval(interval)
}

function reset(){
    msec = 0;
    sec = 0;
    min = 0;
    minh.innerHTML = min
    sech.innerHTML = sec
    msech.innerHTML = msec
    stop()
    const button = document.querySelector('button')
    button.disabled = false
}