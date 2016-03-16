var ms = 0;
var sec = 0;
var min = 0;
var h = 0;
var delay = 0;
var start = 0;

var Timer = {
    createTime:function () {
        var parent = document.createElement('div');
        parent.classList.add('row');
        document.body.appendChild(parent);
        var timer = document.createElement('div');
        timer.classList.add('col-md-2','col-md-offset-3','timer');
        timer.innerHTML = '0 : 00: 00: 00';
        parent.appendChild(timer);
    },
    createLineOfButtons:function(){
        var line=document.createElement('div');
        line.classList.add('buttons');
        document.body.appendChild(line);
    },
    createButtonStart:function (){
        var StartButton=document.createElement('button');
        StartButton.classList.add('col-md-offset-4', 'btn', 'btn-success','start');
        StartButton.innerHTML='Start';
        StartButton.addEventListener("click", startTimer);
        var line=document.getElementsByClassName('buttons')[0];
        line.appendChild(StartButton);
    },
    createButtonClear:function(){
        var ClearButton=document.createElement('button');
        ClearButton.classList.add('col-md-offset-1', 'btn', 'btn-danger','clear');
        ClearButton.innerHTML='Clear';
        ClearButton.addEventListener("click", clearTimer);
        var line=document.getElementsByClassName('buttons')[0];
        line.appendChild(ClearButton);
    }
};

function startTimer(){
    var StartButton = document.getElementsByClassName('start')[0];
    StartButton.classList.remove('btn-success');
    StartButton.classList.add('btn-primary');
    StartButton.innerHTML = 'Pause';
    StartButton.removeEventListener("click", startTimer);
    StartButton.addEventListener("click", timerPause);
    var timer = document.getElementsByClassName('timer')[0];
    if (delay) {
        start = start + Date.now() - delay;
    } else {
        start = Date.now();
    }
     timerId = setInterval(function() {

        ms = Date.now() - start;
        sec = ms / 1000 ^ 0;
        min = sec / 60 ^ 0;
        h = min / 60 ^ 0;
        timer.innerHTML = addZeros(h % 60) + ' : ' + addZeros(min % 60) + ' : ' + addZeros(sec % 60) + ' : ' + addZeros(ms % 1000, 3);
    }, 1);
}

function clearTimer(){
    var clearButton = document.getElementsByClassName('start')[0];
    clearButton.classList.remove('btn-primary');
    clearButton.classList.add('btn-success');
    clearButton.innerHTML = 'Start';
    var timer = document.getElementsByClassName('timer')[0];
    timer.innerHTML = '00 : 00 : 00 : 000';
    ms = sec = min = h = delay = 0;
    clearButton.removeEventListener("click", timerPause);
    clearButton.addEventListener("click", startTimer);
    clearInterval(timerId);
}

function addZeros(n, needLength) {
    needLength = needLength || 2;
    n = String(n);
    while (n.length < needLength) {
        n = "0" + n;
    }
    return n;
}

function timerPause() {
    var StartButton = document.getElementsByClassName('start')[0];
    StartButton.classList.remove('btn-primary');
    StartButton.classList.add('btn-success');
    StartButton.innerHTML = 'Continue';
    StartButton.removeEventListener("click", timerPause);
    StartButton.addEventListener("click", startTimer);
    delay = Date.now();
    clearInterval(timerId);
}

Timer.createTime();
Timer.createLineOfButtons();
Timer.createButtonStart();
Timer.createButtonClear();