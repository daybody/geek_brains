var nodePath = process.argv[0];
var appPath = process.argv[1];
var time_1 = process.argv[2];
var time_2 = process.argv[3];
var hh = 0;
var mm = 0;
var ss = 0;

time_1 = Number.parseInt(time_1);
time_2 = Number.parseInt(time_2);

var alltime = time_1+time_2;

hh = (alltime/3600)^0;
mm = ((alltime - hh*3600)/60)^0;
ss = alltime - (hh*3600 + mm *60)

hours   = ['час', 'часа', 'часов'];
minuts  = ['минута', 'минуты', 'минут'];
seconds = ['секнда', 'скунды', 'секунд'];

function getEnding(number, endings)
{
    var outEndings, i;
    number = number % 100;
    if (number>=11 && number<=19) {
        outEndings=endings[2];
    }
    else {
        i = number % 10;
        switch (i)
        {
            case (1): outEndings = endings[0]; break;
            case (2):
            case (3):
            case (4): outEndings = endings[1]; break;
            default: outEndings = endings[2];
        }
    }
    return outEndings;
}


var hhEnds = getEnding(hh, hours);
var mmEnds = getEnding(mm, minuts);
var ssEnds = getEnding(ss, seconds);

outHours = [hh, hhEnds].join(' ');
outMinuts = [mm, mmEnds].join(' ');
outSeconds = [ss, ssEnds].join(' ');

if (hh !=0 && mm != 0 && ss !=0){
    console.log(outHours, outMinuts, outSeconds);
}

if (hh != 0 && mm != 0 && ss == 0){
    console.log(outHours, outMinuts);
}

if (hh != 0 && mm == 0 && ss != 0){
    console.log(outHours, outSeconds);
}

if (hh != 0 && mm == 0 && ss == 0){
    console.log(outHours);
}

if (hh == 0 && mm != 0 && ss != 0){
    console.log(outMinuts, outSeconds);
}

if (hh == 0 && mm != 0 && ss == 0){
    console.log(outMinuts);
}

if (hh == 0 && mm == 0 && ss != 0){
    console.log(outSeconds);
}