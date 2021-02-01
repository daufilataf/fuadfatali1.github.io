function calc(){
var time = new Date();
var currenthour = time.getHours();
var welcome;
if(currenthour<=12)
welcome = 'Good Morning';
else if(currenthour >=12 && currenthour <= 17)
welcome = 'Good Afternoon';
else if(currenthour >= 17 && currenthour <= 24)
welcome = 'Good Evening';
document.write(welcome);
}

function hours(){
	var day = new Date();
	var currentHourst = day.getHours();
	var currentMinute = day.getMinutes(); 
	var currentSecond = day.getSeconds();
	var format = "AM";
	if(currentHourst > 12){
		currentHourst = currentHourst-12;
		format= "PM";
	}
	if(currentHourst==0){
		currentHourst=12;
	}
	if(currentHourst<10){
		currentHourst= "0"+currentHourst;
	}
	if(currentMinute < 10){
		currentMinute = "0"+currentMinute;
	}
	if(currentSecond < 10){
		currentSecond = "0"+currentSecond;
	}
	
	var currentTime = currentHourst + ":" + currentMinute + ":" + currentSecond+""+format;
	document.getElementById("currentclock").innerText = currentTime;
    document.getElementById("currentclock").textContent = currentTime;
	setTimeout(hours,1000);

}
function exactdate(){
var today = new Date();
var dd=  today.getDate();
var mm = today.getMonth()+1;
var yy = today.getFullYear();
if(mm < 10){
		mm = "0"+mm;
	}
if(dd < 10){
		dd = "0"+dd;
	}
var td = dd + "." + mm + "." + yy;
document.getElementById("td").innerText = td;
document.getElementById("td").textContent = td;
	
}

