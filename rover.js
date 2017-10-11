// VARIABLES AND FUNCTIONS
var myRover = {
  position: [0,0],
  direction: 'N',
  grid: [0,0]
}

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


//INTRODUCTION AND USERPROMPT
console.log("Welcome to project Mars Rover");
console.log("The rover is currently at starting position "+myRover.position+", direction: "+myRover.direction);
userInput = prompt("Please enter the commands you want the rover to move: ");
console.log("You entered: "+userInput);


//FUNCTION IS IMPLEMENTED WITH LOOPS
for (let numberOfCommands=0; numberOfCommands<userInput.length; numberOfCommands++){
  let letter = userInput.charAt(numberOfCommands);

//MOVES FORWARDS
  if (letter==="f" && myRover.direction==="N"){
    if (myRover.grid[0]!==5){
      myRover.grid[0]++;
      goForward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="f" && myRover.direction==="W"){
    if (myRover.grid[1]!==-5){
      myRover.grid[1]--;
      goForward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="f" && myRover.direction==="S"){
    if (myRover.grid[0]!==-5){
      myRover.grid[0]--;
      goForward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="f" && myRover.direction==="E"){
    if (myRover.grid[1]!==5){
      myRover.grid[1]++;
      goForward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

//MOVES BACKWARDS
  else if (letter==="b" && myRover.direction==="N"){
    if (myRover.grid[0]!==-5){
      myRover.grid[0]--;
      goBackward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="b" && myRover.direction==="W"){
    if (myRover.grid[1]!==5){
      myRover.grid[1]--;
      goBackward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="b" && myRover.direction==="S"){
    if (myRover.grid[0]!==5){
      myRover.grid[0]++;
      goBackward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }

  else if (letter==="b" && myRover.direction==="E"){
    if (myRover.grid[1]!==-5){
      myRover.grid[1]--;
      goBackward(myRover);
    }
    else {
      console.log("Rover has reached the end of the grid. Chose another command");
    }
  }


  else if (letter==="l"){   //CHANGES DIRECTION TO LEFT
    if (myRover.direction==="W") {
      myRover.direction='S'
    }
    else if (myRover.direction==="N") {
      myRover.direction='W'
    }
    else if (myRover.direction==="S") {
      myRover.direction='E'
    }
    else if (myRover.direction==="E") {
      myRover.direction='N'
    }
    else {
      console.log( "That command does not exist")
    }
  }

  else if (letter==="r"){   //CHANGES DIRECTION TO RIGHT
    if (myRover.direction==="W") {
      myRover.direction='N';
    }
    else if (myRover.direction==="N") {
      myRover.direction='E'
    }
    else if (myRover.direction==="S") {
      myRover.direction='W'
    }
    else if (myRover.direction==="E") {
      myRover.direction='S'
    }
    else {
      console.log( "That command does not exist")
    }
  }

  else {
    console.log('Invalid command.')
  }
}


//FINAL STATEMENTS
console.log("The new position is: "+myRover.position)
console.log("New direction: "+myRover.direction)
