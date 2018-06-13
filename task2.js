/* 
    Добавить сдвиги влево вправо через pop/push и shift/unshift +
    Проверка на существание сдвига : если за n = array.lenght итераций совпадение масив не стал равным то -1
    Если масивы равны то counter = 0 +
*/

var nodePath = process.argv[0];
var appPath = process.argv[1];
var testStr_1 = process.argv[2];
var testStr_2 = process.argv[3];
var counter = 0;
var counter_l = 0;
var counter_r = 0;
var not_equal = false;


var Arr_1 = testStr_1.split('');
var Arr_2 = testStr_2.split('');

for(var i = 0; i<Arr_1.length; i++){
    if(Arr_1[i] != Arr_2[i]){
        not_equal = true;
        break;
    }
}
console.log(Arr_1);


function rightShift(not_equal, Arr_1, Arr_2){
    rightArr_1 = Arr_1;
    while(not_equal){
        rightArr_1.push(rightArr_1.shift());
        counter_r += 1;
        for(var i = 0; i<rightArr_1.length; i++){
            if(rightArr_1[i] != Arr_2[i]){
                not_equal = true;
                continue;
            }else{
                not_equal = false;
            }
        }
    }
    return counter_r;
} 

//counter_l = leftShift(not_equal, Arr_1, Arr_2);
counter_r = rightShift(not_equal, Arr_1, Arr_2);





console.log('----------------');
console.log(Arr_1);
console.log(Arr_2);
//console.log(leftArr_1);
//console.log(rightArr_1);
console.log('counter_r = ' + counter_r);
console.log('counter_l = ' + counter_l);
console.log(not_equal);