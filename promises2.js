              // reverse part


function reverseText(text, callback){
  let splitText = text.split("")
  let reverseArray = splitText.reverse()
  // callback(reverseArray.join(""))
  let reversedWord = reverseArray.join("")

  return new Promise(function(resolve, reject){
    //if no word reverse reject
    if (reversedWord == ""){
      reject("No word was found")
    //else show the reversed word
    }else{
      resolve(reversedWord)
    }
  })
}
// reverseText("food").then(function(result){
//   console.log(result)
// }).catch(function(error){
//   console.log("Error: " + error)
// })

               // captitalize part

function capitalizeText(text, callback){
  // callback(text.toUpperCase())
  let captitalizeWord = text.toUpperCase()
  return new Promise(function(resolve, reject){

    if (captitalizeWord == ""){
      reject("No word was found")
    //else show the reversed word
    }else{
      resolve(captitalizeWord)
    }
  })
}
// reversing text of inserted word
reverseText("food").then(function(result){
// take the reverseText and it will insert it into the capitalizeText function and turn the text into all capitals
// return does this
  return capitalizeText(result)
  console.log(result)
}).then(function(result){
  console.log("The capitalized reverse word is: " + result)
}).catch(function(error){
  console.log("Error: " + error)
})
