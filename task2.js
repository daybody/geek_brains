var nodePath = process.argv[0];
var appPath = process.argv[1];
var testStr_1 = process.argv[2];
var testStr_2 = process.argv[3];
var counter = 0;

var myArray_1 = testStr_1.split('');
var myArray_2 = testStr_2.split('');
console.log(myArray_1);
console.log(myArray_2);

for(var i = 0; i<myArray_1.length; i++){
    if(myArray_1[i] === myArray_2[i]){
        counter = -1;
        break;     
    }else{
        myArray_2=myArray_2.splice(-1).concat(myArray_2);
        counter = counter + 1;
        if(myArray_1[i] === myArray_2[i]){
            break; 
        }
    }
}

console.log(counter);