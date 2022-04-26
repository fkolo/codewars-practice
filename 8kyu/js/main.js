//check same case

function sameCase(a, b){
    //first check if a is a special character or b is a special character then return -1
    if ((a.toUpperCase() == a.toLowerCase()) || (b.toUpperCase() == b.toLowerCase()) ){
        return -1    
    //check if a and b are both upper case
    } else if ( a == a.toUpperCase() && b == b.toUpperCase()){
      return 1;
    //check if a and b are noth lower case
    } else if (a == a.toLowerCase() && b == b.toLowerCase()){
      return 1
    //check if a is uppercase and b is lower case, then return 0 or if a is lowercase and b is uppercase then return 0
    } else if ( (a == a.toUpperCase() && b == b.toLowerCase() ) || (b == b.toUpperCase() && a == a.toLowerCase() )){
    return 0;
    } else {
      return -1
    }
  }


//alternate solution
//   function sameCase(a, b){
//     const alpha = 'abcdefghijklmnopqrstuvwxyz'
//     if(!alpha.includes(a.toLowerCase()) || !alpha.includes(b.toLowerCase())) return -1
    
//     const checkCase = x => {
//       if(x === x.toLowerCase()) return 'lower'
//       if(x === x.toUpperCase()) return 'upper'
//     }
  
//     return checkCase(a) === checkCase(b) ? 1 : 0
//   }


//fundamentals: return

function add(a,b){
    return a + b
}

function divide(a,b){
    return a / b
}

function multiply(a,b){
    return a * b
}

function mod(a,b){
    return a % b
}
   
function exponent(a,b){
    return Math.pow(a, b) //or a ** b
}
    
function subt(a,b){
    return a - b
}

// const add = (a, b) => a + b;
// const subt = (a, b) => a - b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const mod = (a, b) => a % b;
// const exponent = (a, b) => a ** b;

//string cleaning (revisit this one and use a solution that isn't regex)

function stringClean(s){
    // Function will return the cleaned string
  var result = '';
  for(var i=0;i<s.length;i++) {
    if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
    }
  return result;
  }


//to square(root) or not to square(root)

function squareOrSquareRoot(array) {
    var result = []; //square brackets because it's an empty array

    //for loop to construct new array
    for (let i = 0; i < array.length; i++){
    
        if(Math.sqrt(array[i]) == Math.floor(Math.sqrt(array[i]))){
            result.push(Math.sqrt(array[i]))
        } else {
            result.push(array[i]*array[i])
        }

   } return result
}


//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
    // find class average
    let classAverage = classPoints.reduce((acc, i ) => acc + i, 0) / classPoints.length
    if (classAverage > yourPoints){
        return false

    } else {
        return true
    }
    

  }
  
  //function betterThanAverage2(classPoints, yourPoints) {
    //return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 


// find multiples of a number

function findMultiples(integer, limit) {
    let multiples =[]
   for (let i = 1; i <= limit; i ++){
       if (integer * i <= limit) {
           multiples.push(integer * i)
       }
   } return multiples
  }

  function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
      
    return result
  }

  // Name Shuffler

  function nameShuffler(str){
      let name = str.split(' ')
      let first = name[0]
      let second = name[1]
      return `${second} ${first}`
  }


  function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
  }

  // Cat years, Dog years

  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    if (humanYears === 1){return [1, 15, 15]}
    if (humanYears === 2){return [2, 24, 24]}
    return [humanYears, ((humanYears-2)*4)+24, ((humanYears-2)*5)+24]

   
  }

  //capitalization and mutability

  function capitalizeWord(word) {
      //word.charAt(0).toUpperCase() is just returning a capitalized 'W'. to get the whole word we must slice the rest of the letters from our original string
  
    return word.charAt(0).toUpperCase() + word.slice(1); 
  }


  //Bin to Decimal

  function binToDec(bin){
    // ...
    console.log( bin.parseInt(bin, 2))
    
  }