// בדיקת ריבוע מושלם

var answer = Number(prompt('Please type a number'))
flag = false;
for (var index = 0; index <= (answer / 2); index++) {
    if (index * index === answer){
        console.log("מספר מושלם")
        flag = true
    }
    
}
if (!flag){
    console.log("מספר לא מושלם")
}
