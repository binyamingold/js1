// מספר גבוה

var userNumbers = []
var max = 0;
for (var i=0; i<3; i++){
    var answer = Number(prompt('Please type a number'))
    if (answer> max){
        max = answer;
    } 
}
console.log (max);
