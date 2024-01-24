const h = document.querySelectorAll('.h');
const m = document.querySelectorAll('.m');
const s = document.querySelectorAll('.s');
const days_span = document.querySelectorAll('.days span');
const month_span = document.querySelectorAll('.month span');
const meridian = document.querySelectorAll('.meridian span');
const date = document.querySelector('.date');

function runClock(){

    //date
    var time = new Date();
    var da = time.getDate();
    da = da<10?'0'+da:da;
    var mon = time.getMonth()+1;
    mon = mon<10?'0'+mon:mon;
    var ye = time.getFullYear();
    date.innerHTML = `${da}-${mon}-${ye}`;

    //day
    days_span[time.getDay()].classList.add('active'); 

    //month
    month_span[time.getMonth()].classList.add('active');

    //time
    var hr = time.getHours();
    hr = hr<10?'0'+hr:hr;
    var min = time.getMinutes();
    min = min<10?'0'+min:min;
    var secs = time.getSeconds();
    secs = secs<10?'0'+secs:secs;

    if(hr>=12){
        meridian[1].classList.add('active');
    }
    else{
        meridian[0].classList.add('active');
    }
    hr = hr.toString();
    min = min.toString();
    secs = secs.toString();

    h[0].innerHTML = hr[0];
    h[1].innerHTML = hr[1];

    m[0].innerHTML = min[0];
    m[1].innerHTML = min[1];

    s[0].innerHTML = secs[0];
    s[1].innerHTML = secs[1];

}

setInterval(runClock,1000);
runClock();