//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. 
//Once the value is 0 it should log “DONE!” and stop.

function countDown(time){
    let timer = setInterval(function(){
      time--; //subtracting one second each time
      if(time <= 0){ //is the time less than or equal to 0?
        clearInterval(timer); 
        console.log('DONE!'); 
      }
      else {
        console.log(time);
      }
  
    },1000) //the amount of time the interval runs (every second in this case)
  }
  

//Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, 
// it add 1 to a counter. 
//If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

  function randomGame(){
    let num;
    let times = 0;
    let timer = setInterval(function(){
      num = Math.random(); //the dafult is a number between 0-1
      times++
      if(num > .75) {
        clearInterval(timer);
        console.log("It took " + times + " try/tries.");
      }
    },1000)
  }