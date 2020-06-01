/* 1) Write a JavaScript program to compute the sum of the two given integers. 
      If the two values are same, then returns triple their sum. */

      let x=5
      let y=5
      sum=x+y

      if (x===y){
          console.log("triple sum", sum*3)
      } else {
          console.log("sum", sum)
      }

/* 2) Write a JavaScript program to check two given numbers and return true 
      if one of the number is 50 or if their sum is 50.*/

      //Version1 

      let num1=50
      let num2=20

      if(num1===50 || num2===50 || num1+num2===50){
        console.log("true")
      } else {
        console.log("false")
      }

      //Version1 

      let num3=10
      let num4=40
      let sumNew= num1+num2

      if(num3===50 || num4===50 || sumNew===50){
          console.log("true")
      } else {
          console.log("false")
      }

/* 3) Write a JavaScript program to remove a character at the specified position of a given string 
      and return the new string.*/

      let string = "tomorrow"
      let newString = string.replace('o','')
      console.log(newString)

let name = 'Arbiona'
undefined
let splittedName = name.substring(0,3)
undefined
splittedName
"Arb"
name
"Arbiona"
function stringCutter (text, positionToRemove){
 return text.substring(0, positionToRemove) + text.substring(positionToRemove+1)
}
undefined
stringCutter("Arbiona", 1)
"Abiona"
stringCutter("Arbiona", 3)
"Arbona"

// 4) Write a JavaScript program to find the largest of three given integers.

    let num5=60
    let num6=30
    let num7=10

    if (num5>num6){
        highestNum=num5
    } else {
        highestNum=num6
    } 
    if (num7>highestNum){
        highestNum=num7
    }
    console.log(highestNum)

//  5) Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

//  7) Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.

    function city(string) {
        if (string.length >= 3 && ((string.substring(0, 3) == 'Los') || (string.substring(0, 3) == 'New'))) {
                return string;
        }
        return '';
    }
    
    console.log(city("New York"));
    console.log(city("Los Angeles"));
    console.log(city("London"));
    console.log(city("Stockholm"));

//  8) Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.

    let array= [1,2,3,4]
    let sum2 = array[0]+array[1]+array[2]
    console.log(sum2)


    //13. Write a JavaScript program to find the index of the greatest element of a given array of integers

let testData = [1, 5, 10, 20, 1, 2, 12,41, 4]

function maxIndex(ourArray) {
    //choose a starting velue for the biggest number (example: first element)
    let max = ourArray[0]
    let maxIndex = 0;

    // go through all the elements
    for (let i =1; i < ourArray.length; i++){
        if (ourArray[i] > max) {
            max = ourArray[i] // if the current element is the greater one, save it somewhere
            maxIndex = i // if the current element is the bigger, save the index somewhere
        }
    }

    return maxIndex
}
console.log(maxIndex(testData))

//14. Write a JavaScript program to get the largest "even"gv number from an array of integers.

function maxEven(ourArray) {
    let max = ourArray[0]
    for (let i =1; i < ourArray.length; i++){
        if (ourArray[i] % 2 === 1 && ourArray[i] > max) {
            max = ourArray[i]
        }
    }
    return max
}