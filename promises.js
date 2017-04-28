// first example
// let myPromise = new Promise(function(resolve, reject){

//   let isSuccess = true //just as an example
//
//   if(isSuccess){
//     resolve("the data")
//   }else{
//     reject("reason it failed")
//   }
// })
//
// myPromise.then(function(result){
//   console.log("success: " + result)
// }).catch(function(result){
//   console.log("failed: " + result)
// })

 // second example
 // function userLookup(index){
//   let users = [
//     {
//       name: 'Bob',
//       age: 37
//     },
//     {
//       name: 'Mary',
//       age: 7
//     },
//     {
//       name: 'Enoch',
//       age: undefined
//     }
// //   ]
// // }
// //
// //   return new Promise(function(resolve, reject){
// //     let selectedUser = users[index]
// //
// //     if(selectedUser){
// //       resolve(selectedUser)
// //     }else{
// //       reject("Could not resolve user")
// //     }
// //   })
// // }
// //
// // userLookup(1).then(function(user){
// //   console.log("Found " + user.name)
// // }).catch(function(wrong){
// //   console.log("Error: " + wrong)
// // })
// // userLookup(2).then(function(user){
// //   console.log("Found " + user.name)
// // }).catch(function(wrong){
// //   console.log("Error " + wrong)
// // })
// // userLookup(10).then(function(user){
// //   console.log("Found " + user.name)
// // }).catch(function(wrong){
// //   console.log("Error " + wrong)
// // })
//
// //Third example
//
// // function ageEntered (user){
// //   if(user.age){
// //     if(user.age < 18){
// //       var description = "a minor"
// //     }else{
// //       var description = "an adult"
// //     }
// //   }
// //   return new Promise(function(resolve, reject){
// //     if (!user.name){
// //       reject("No user name found")
// //     }else if (!description){
// //       reject("Could not describe age for " + user.name)
// //     }else{
// //       resolve(user.name + " is " + description)
// //     }
// //   })
// // }
// //
// // ageEntered({name: 'Phil', age:17}).then(function(describe){
// //   console.log(describe)
// // }).catch(function(error){
// //   console.log("Error: " + error)
// // })
// //
// //
// // ageEntered({age:17}).then(function(describe){
// //   console.log(describe)
// // }).catch(function(error){
// //   console.log("Error: " + error)
// // })
//
//
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
reverseText("food").then(function(result){
  console.log(result)
}).catch(function(error){
  console.log("Error: " + error)
})


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

  capitalizeText("food").then(function(result){
  console.log(result)
  }).catch(function(error){
  console.log("Error: " + error)
  })


                      // easy version
 //  function reverseString(str) {
 //   console.log (str.split('').reverse().join(''))
 // }
 //
 // reverseString("hi")
