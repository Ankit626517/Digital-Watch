function dis() {
    

var dateTime= new Date();
var hrs = dateTime.getHours()
var min = dateTime.getMinutes()
var sec = dateTime.getSeconds()
var session = document.getElementById('session')

if (hrs>=12) {
    session.innerHTML='PM'
    
}
else{
    session.innerHTML='AM'
}
if (hrs>12) {
    hrs= hrs-12
    
}

hrs= (hrs<10) ? "0" + hrs : hrs;
min= (min<10) ? "0" + min : min;
sec= (sec<10) ? "0" + sec : sec;
var H=document.getElementById('hours')
var M=document.getElementById('minutes')
var S=document.getElementById('seconds')
H.innerHTML=hrs
M.innerHTML=min
S.innerHTML=sec
}
setInterval(dis,10)