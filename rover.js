console.log('Welcome to project Mars Rover');
console.log('The rover is currently at position'+myRover.position);
console.log('Please enter the commands you want the rover to move: ');
userInput= //user input given by commands


var myRover = {
  position: [0,0],
  direction: 'N'
};

var gridLimit=[[0,1,2,3,4,5,6,7,8,9], [0,1,2,3,4,5,6,7,8,9]];



for (let numberOfCommands=0; numberOfCommands<userInput.length; numberOfCommands++){

  if (userInput(numberOfCommands[])==="f"){
    function goForward(myRover);
    console.log("cool story bro");
  } else if ((userInput(numberOfCommands[])==="b"){
    function goBackward(myRover);
  }
  else if ((userInput(numberOfCommands[])==="l"){
    console.log("Turned Left");

    if direction==="W" {
      direction='S'
    }
    else if direction==="S" {
      direction='E'
    }
    else if direction==="E" {
      direction='N'
    }
    else if direction==="N" {
      direction='S'
    }
    else {
      print "That command does not exist";
    }

  }
  else if (userInput==="r"){
    console.log("Turned Left");

    if direction==="W" {
      direction='N'
    }
    else if direction==="N" {
      direction='E'
    }
    else if direction==="E" {
      direction='S'
    }
    else if direction==="S" {
      direction='E'
    }
    else {
      print "That command does not exist";
    }
  }
}
}
function goForward(myRover) {
  switch(myRover.direction) {
    case 'N':
      myRover.position[0]++
      console.log("rover has moved.")
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
  };

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
    };


  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}

goForward(myRover);
