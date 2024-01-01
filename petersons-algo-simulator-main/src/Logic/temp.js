var flag = [false, false];
var turn = 0;

function simulate() {
  setInterval(function() {
    process1();
    setTimeout(process2, 1500); //Add a delay between the two 
  }, 5000); //Add a delay between each iteration 
}
function process1() {

  flag[0] = true;
  turn = 1;

  let intervalId = setInterval(function() {

    if (!flag[1] || turn != 1) {
      clearInterval(intervalId);
      //CRITICAL SECTION
      document.getElementById("output").innerHTML += "Process 1: <b>entered</b> critical section<br>";

      setTimeout(function() {
        document.getElementById("output").innerHTML += "Process 1: exiting critical section<br>";
        flag[0] = false;
      }, 2000); //wait for 2 seconds before exiting critical section
    }
  }, 100); //check flag and turn every 100 milliseconds

}

function process2() {
  flag[1] = true;
  turn = 0;
  let intervalId = setInterval(function() {
    if (!flag[0] || turn != 0) {
      clearInterval(intervalId);
      //CRITICAL SECTION
      document.getElementById("output").innerHTML += "Process 2: <b>entered</b> critical section<br>";
      setTimeout(function() {
        document.getElementById("output").innerHTML += "Process 2: exiting critical section<br>";
        flag[1] = false;
      }, 2000); 
    }
  }, 100); 
}
