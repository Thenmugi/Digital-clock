let datetime = new  Date()
function display_date(){
    datetime =new Date()
    let dates=set_zero(datetime.getDate());
    let months=set_zero(datetime.getMonth());
    let years=datetime.getFullYear();
    document.getElementById('date').innerHTML=dates
    document.getElementById('month').innerHTML=months
    document.getElementById('year').innerHTML=years
}
function display_time(){
    datetime = new Date()
    let hrs=set_zero(datetime.getHours())
    let mins=set_zero(datetime.getMinutes())
    let secs =set_zero(datetime.getSeconds())
    if (hr>12){
        hr=hr-12;
        document.getElementById('m').innerHTML="PM"
    }

    document.getElementById('hr').innerHTML=hrs;
    document.getElementById('min').innerHTML=mins;
    document.getElementById('sec').innerHTML=secs;
}
function set_zero(num){
    return num<10?"0"+num:num
}
setInterval(display_time,500)
setInterval(display_date,500)
