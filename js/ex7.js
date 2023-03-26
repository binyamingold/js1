// בדיקת שנה מעוברת

var answer = Number(prompt('Please type a number 4 digit'))

// ללוח שנה גרגוריני

if(answer%4 === 0){
    if(answer % 100 === 0){
        if(answer % 400 === 0){
            console.log("שנה מעוברת")
        }
        else{
            console.log("השנה לא מעוברת")
        }
    }
    else{
        console.log('השנה לא מעוברת')
    }
}
else{
    console.log("השנה לא מעוברת")
}




// ללוח שנה יהודי - עברי
if (answer % 19 == 0 || answer % 19 == 3 || answer % 19 == 6 ||
    answer % 19 == 8 || answer % 19 == 11 || answer % 19 == 14 ||
    answer % 19 == 17 ){
        console.log("השנה היא מעוברת");
    }
    else{
        console.log("השנה לא מעוברת");
    }