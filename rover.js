// VARIABLES AND FUNCTIONS
var myRover = {
  position: [0,0],
  direction: 'N'
}

var grid= [[-5,-4,-3,-2,-1,0,1,2,3,4,5], [-5,-4,-3,-2,-1,0,1,2,3,4,5]];

function gridArea(grid){
  if (myRover.position[0]===-5 || myRover.position[0]===5){
    turnLeft(myRover)
    console.log("You have reached the limit.")
  }

  else if (myRover.position[1]===-5 || myRover.position[1]===5){
    turnLeft(myRover)
    console.log("You have reached the limit.")
  }
}

/**function gridArea(grid){                    //FUNCTION TO WORK ON
  if (myRover.position[0]===grid[0[0]] || myRover.position[0]===grid[0[10]]){
    turnLeft(myRover)
    console.log("You have reached the limit.")
  }

  else if (myRover.position[1]===grid[0[0]] || myRover.position[1]===grid[0[0]]){
    turnLeft(myRover)
    console.log("You have reached the limit.")
  }
}
  +**/


function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++
      break;
    case 'E':
      myRover.position[1]++
      break;
    case 'S':
      myRover.position[0]--
      break;
    case 'W':
      myRover.position[1]--
      break;
  }
}

function goBackward(myRover) {
    switch(myRover.direction) {
      case 'N':
        myRover.position[0]--
        break;
      case 'E':
        myRover.position[1]--
        break;
      case 'S':
        myRover.position[0]++
        break;
      case 'W':
        myRover.position[1]++
        break;
    }
}

function turnLeft(myRover){
  switch(myRover.direction){
   case 'N':
      myRover.direction='W'
      break;
    case 'W':
      myRover.direction='S'
      break;
    case 'S':
      myRover.direction='E'
      break;
    case 'E':
      myRover.direction='N'
      break;
  }
}

function turnRight(myRover){
  switch(myRover.direction){
   case 'N':
      myRover.direction='E'
      break;
    case 'E':
      myRover.direction='S'
      break;
    case 'S':
      myRover.direction='W'
      break;
    case 'W':
      myRover.direction='N'
      break;
  }
}




//INTRODUCTION AND USERPROMPT
console.log("Welcome to project Mars Rover");
console.log("The rover is currently at starting position "+myRover.position+", direction: "+myRover.direction);
userInput = prompt("Please enter the commands you want the rover to move: ");
console.log("You entered: "+userInput);


//FUNCTION IS IMPLEMENTED WITH LOOPS
for (let numberOfCommands=0; numberOfCommands<userInput.length; numberOfCommands++){
  let letter = userInput.charAt(numberOfCommands);

  //MOVES FORWARDS
  if (letter==="f"){
    goForward(myRover);
    gridArea(grid);
  }

  //MOVES BACKWARDS
  else if (letter==="b"){
    goBackward(myRover);
    gridArea(grid);
  }

  //TURNS LEFT
  else if (letter==="l"){
    turnLeft(myRover);
    gridArea(grid);
  }

  //TURNS RIGHT
  else if (letter==="r"){
    turnRight(myRover);
    gridArea(grid);
  }

  //ERROR
  else {
    controle.log("Command "+letter+" does not exist.");
  }
}

//FINAL STATEMENTS
console.log("The new position is: "+myRover.position)
console.log("New direction: "+myRover.direction)
