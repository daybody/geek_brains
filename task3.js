var nodePath = process.argv[0];
var time_1 = process.argv[1];
var time_2 = process.argv[2];
var hh = 0;
var mm = 0;
var ss = 0;

time_1 = Number.parseInt(time_1);
time_2 = Number.parseInt(time_2);

var alltime = time_1+time_2;

hh = (alltime/3600)^0;
mm = ((alltime - hh*3600)/60)^0;
ss = alltime - (hh*3600 + mm *60)

if (hh != 0){
    process.stdout.write(hh +" Часов "+ mm + " Минут " + ss + " Секунд"); 
    
}else if (mm === 0) {
    process.stdout.write(ss + " Секунд")
} else {
    process.stdout.write(+ mm + " Минут " + ss + " Секунд"); 
}

