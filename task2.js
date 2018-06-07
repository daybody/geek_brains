var nodePath = process.argv[0];
var appPath = process.argv[1];
var testStr_1 = process.argv[2];
var testStr_2 = process.argv[3];
var counter = 0;
var not_equal = false;

var myArray_1 = testStr_1.split('');
var myArray_2 = testStr_2.split('');

for(var i = 0; i<myArray_1.length; i++){
    if(myArray_1[i] != myArray_2[i]){
        not_equal = true;
        counter = 0;
        break;
    }else{
        counter = -1;
    }
}

while(not_equal){
    myArray_1=myArray_1.splice(-1).concat(myArray_1);
    counter +=1;
    for(var i = 0; i<myArray_1.length; i++){
        if(myArray_1[i] != myArray_2[i]){
            not_equal = true;
            continue;
        }else{
            not_equal = false;
        }
    }
}

console.log(counter);
