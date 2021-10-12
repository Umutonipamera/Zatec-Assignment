
//  1)function that takes a number of wins, draws and losses and calculates the numberof points a football team had obtained so far 

const footballPoints = (wins, draws, loses) =>{
    let points = 0;
    if(wins && draws && loses<= 0){
      points = 0;
    }
    else{
       points+= wins*3;
       points+=  draws*1;
       points += loses*0;
    }
    
    console.log(points);
}
footballPoints(3,4,2);
footballPoints(5,0,2);
footballPoints(0,0,1);

// 2)function which calculates the amount of fuel it needs, once given the distance. If a car needs 5 times the amount of fuel than the distance it travels

const calculateFuel = distance=>{
    if(distance <= 0){
        console.log('the distance must be a number greater than 0');
        return;
    }
    let fuel = distance *5;
    return fuel < 20?20:fuel;
}
   console.log(calculateFuel(15));
   console.log(calculateFuel(20));
   console.log(calculateFuel(38));
   console.log(calculateFuel(1));


// 3) checks whether a kid can watch an MA15+ rated movie. 

const acceptIntoCinema = (age, isSupervised) =>{
    if(age>=15 || isSupervised === false ){
      return true;
  }
   if(age>=15 || isSupervised === true ){
      return true;
  }
   if(age < 15 && isSupervised === false){
      return false;
  }
  if(age <15 || isSupervised === true){
      return true;
  }
 
}
console.log(acceptIntoCinema(12, true));
console.log(acceptIntoCinema(13, false));
console.log(acceptIntoCinema(16, false));


// 4) a function that takes an array and a string as arguments and return the index of the string. 
const findIndex = (arr, x) => {
    let a;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== x) {
        a = i;
      } else {
        return i;
      }
    }
  };
    console.log(findIndex(["hi", "zatec", "Rwanda", "training"], "Rwanda"));
    console.log(findIndex(["iPhone", "iPad", "iMac", "MacBook Air"], "iPad"));
    console.log(findIndex(["html", "css", "javascript", "tailwindcss"], "css")); 
    console.log(findIndex(["toyota", "mercedes benz", "volkswagen", "maclaren"], "toyota"));


// 5)program for a bartender, where he only serves drinks to adults and when he’s not on a break session

function serveDrinks(age, breakTime){
    if(age >= 18 && breakTime === false){
        return true;
    }else{
        return false;
    }
    if(age >=18 && breakTime === true){
        return false;
    }else{
        return false;
    }
    
}
 console.log(serveDrinks(17, true));
 console.log(serveDrinks(19, false));
 console.log(serveDrinks(30, true));


// 6)Pass in 2 numbers, and print the sum. 

function sum(x, y) {
      return (x + y);
     }

  console.log(sum(2, 6));


//   (ii) Validate if a number is in the range of 0 - 15.

  function numbers_ranges(x, y) {
    if ((x >= 0 && x <= 15 && y >= 0 && y <= 15))
       {
      return true;
       }
      else
       {
      return false;
    }
  }

  console.log(numbers_ranges(4, 5));
  console.log(numbers_ranges(2, 9));
  console.log(numbers_ranges(50, 89));


// 7) Display all multiple of 3 numbers in the range 0 - 40.


for (x=1; x <= 40; x++){
    if( x % 3 == 0 ){
        console.log(x)
    }
}

// 8)check if number is odd or even  and return 2 if is even and 1 if it is odd
for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");
    }
    else {
            console.log(x + " is odd");
    }
}

    
//  9) calculate age

const age = () => {
    const today = new Date("12/11/2021")
    const dob = new Date("08/22/1994")
    return today.getFullYear() - dob.getFullYear()
}
console.log(age())   


const str = ' have fun'; // 10)split the above string into an array of strings 

const arr = str.split(" "); //loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}
const str2 = arr.join(" ");
console.log(str2);
  


