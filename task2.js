var nodePath = process.argv[0];
var appPath = process.argv[1];
var str_1 = process.argv[2];
var str_2 = process.argv[3];
var not_equal_left = false;
var not_equal_right = false;
var counter = -2;
var num_equal = 0;
var arr_l = [];
var arr_r = [];
var counter_l = 0;
var counter_r = 0;

arr_1 = str_1.split('');
arr_2 = str_2.split('');

len_1 = arr_1.length;
len_2 = arr_2.length;

if (len_1 != len_2){
    counter = -1;
}

if (counter != -1){
    for(var i = 0; i < len_1; i++){
        if (arr_1[i] == arr_2[i]){
            num_equal += 1;
        }
    }

    if(num_equal != len_1){
        not_equal_left = true;
        arr_l = arr_1.concat();
    
        not_equal_right = true;
        arr_r = arr_1.concat();
    }else{
        counter = 0; 
    }
}

while(not_equal_left){
    arr_l = arr_l.splice(1).concat(arr_l);
    counter_l += 1;
    num_equal = 0;

    for(var i = 0; i < len_1; i++){
        if (arr_l[i] == arr_2[i]){
            num_equal += 1;
        }
    }
   
    if (num_equal == len_1){
        not_equal_left = false;
    }

    if(counter_l == len_1){
        counter = -1;
        break;
    }
}

while(not_equal_right){
    arr_r = arr_r.splice(-1).concat(arr_r);
    counter_r += 1;
    num_equal = 0;

    for(var i = 0; i < len_1; i++){
        if (arr_r[i] == arr_2[i]){
            num_equal += 1;
        }
    }
   
    if (num_equal == len_1){
        not_equal_right = false;
    }

    if(counter_r == len_1){
        counter = -1;
        break;
    }
}

if(counter == 0){
    console.log(counter);
}

if(counter == -1){
    console.log(counter);
}

if (counter == -2){
    if(counter_l <= counter_r){
        console.log(counter_l);
    }else{
        console.log(counter_r);
    }
}