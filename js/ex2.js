// האם המספרים שווים

var userNumbers = []
for (var i=0; i<2; i++){
    var answer = Number(prompt('Please type a number'))
    userNumbers.push(answer)
}

if (userNumbers[0] === userNumbers[1]){
    console.log ("smae numbers")
}
else{
    console.log("not same")
}