// מספרים מתחלקים

var userNumbers = []
for (var i=0; i<2; i++){
    var answer = Number(prompt('Please type a number'))
    userNumbers.push(answer)
}

if (userNumbers[0] % userNumbers[1] === 0){
    console.log("The numbers are divided")
}
else{
    console.log("The numbers are not divided")
}