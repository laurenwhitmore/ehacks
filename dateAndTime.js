//find the date and time for the homepage
function continuetime1(){
    var refresh=1000;
    myTime= setTimeout('continuetime()',refresh)
}
function continuetime(){
    var today= new Date();
    var display=today.toUTCString();
    document.getElementById("dateAndTime").innerHTML=display;
    continuetime1();
}
