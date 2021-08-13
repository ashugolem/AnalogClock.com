setInterval(() => {

    var date = new Date();
    var currHr = date.getHours();
    var currMin = date.getMinutes();
    var currSec = date.getSeconds();
    var rotateHr = eval(currHr * 30 + currMin/2 + currSec/120);
    var rotateMin = eval(currMin * 6 + currSec/10);
    var rotateSec = eval(currSec * 6);
    var hr = document.getElementById('hour');
    var min = document.getElementById('minute');
    var sec = document.getElementById('second');
    
    hr.style.transform = `rotate(${rotateHr}deg)`;
    min.style.transform = `rotate(${rotateMin}deg)`;
    sec.style.transform = `rotate(${rotateSec}deg)`;
    
}, 1000);