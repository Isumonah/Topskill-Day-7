let input = document.getElementById("input")
let submit = document.getElementById("submit")
let numbers = document.getElementById("numbers")
let remove = document.getElementById("remove")
let positiveNumbers = document.getElementById("positive-numbers")

let myArray = []


submit.addEventListener("click", function(){
  if(myArray.length === 5){
    alert("You can only choose 5 numbers")
  }
  else if(myArray.length === 4){
    myArray.push(input.value)
  numbers.innerHTML += input.value
   input.value = "" ;
  }
  else{
  myArray.push(input.value)
  numbers.innerHTML += input.value + ", "
    input.value = "";
  }
})

  remove.addEventListener("click", function(){
  for(let i = 0; i < myArray.length; i++){
    if(myArray[i] > 0){
      positiveNumbers.innerHTML += myArray[i] + " ";
    }
  }
})