window.onload = countgo;

function countgo() {
	civ = document.querySelector('.icount .time');
	var time = new Date();
	var target = new Date(2013,8,20);

	uallsec = Math.floor((target.getTime() - time.getTime()) / 1000); //ms から s　に変換
	var	hour = Math.floor(uallsec / 3600);//s to h
	var min = Math.floor((uallsec - hour * 3600) / 60);
	var sec = uallsec - (hour * 3600 + min * 60);
	//alert(allsec + "\n" + hour + "\n" + min + "\n" + sec + "\n");
	if (min < 10) min = "0" + min;
	if (sec < 10) sec = "0" + sec;
	if (hour < 10) hour = "0" + hour;
					
	civ.innerHTML = hour + ":" + min + ":" + sec;

	/*if (hour > 72) {
		var days = Math.floor(hour / 24);
		civ.innerHTML = "<span style='font-size:140px'>"+ days + "</span>" + "Days";
	}*/
	setTimeout("countgo()",1000);
}