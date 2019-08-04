let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let ComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    } 
    else if (argMoveId == 2) {
        return 'papier';
    } 
    else if (argMoveId == 3){
        return 'nożyce';
    }
    printMessage('nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

let playerInput = prompt('Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.');


printMessage('Mój ruch to: ' + ComputerMove);

console.log('Gracz wpisał: ' + playerInput);

let PlayerMove = getMoveName(playerInput);



printMessage('Twój ruch to: ' + PlayerMove);

console.log('moves:', argComputerMove, argPlayerMove);

//function displayResult(argComputerMove, argPlayerMove) {
//    printMessage('Mój ruch to: ' + argComputerMove);
//    printMessage('Twój ruch to: ' + argPlayerMove);
//}
//displayResult();
let displayResult = ();
function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}   else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
}   else if(argComputerMove == 'kamień' && argPlayerMove =='kamień'){
    printMessage('Remis');
}   else if(argComputerMove == 'papier' && argPlayerMove =='papier'){
    printMessage('Remis');
}   else if(argComputerMove == 'nożyce' && argPlayerMove =='nożyce'){
    printMessage('Remis');
}   else if(argComputerMove == 'kamień' && argPlayerMove =='nieznany ruch'){
    printMessage('Nie oszukuj!');
}   else if(argComputerMove == 'papier' && argPlayerMove =='nieznany ruch'){
    printMessage('Nie oszukuj!');
}   else if(argComputerMove == 'nożyce' && argPlayerMove =='nieznany ruch'){
    printMessage('Nie oszukuj!');
}   else {
    printMessage('Tym razem przegrywasz :(');
  }
}





//if( ComputerMove == 'kamień' && PlayerMove == 'papier'){
//  printMessage('Ty wygrywasz!');
//} else if(computerMove == 'papier' && playerMove == 'nożyce'){
//    printMessage('Ty wygrywasz!');
//} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
//    printMessage('Ty wygrywasz!');
//}  else if(computerMove == 'kamień' && playerMove =='kamień'){
//    printMessage('Remis');
//}   else if(ComputerMove == 'papier' && PlayerMove =='papier'){
//    printMessage('Remis');
//}   else if(computerMove == 'nożyce' && playerMove =='nożyce'){
//    printMessage('Remis');
//}   else if(computerMove == 'kamień' && playerMove =='nieznany ruch'){
//    printMessage('Nie oszukuj!');
//}   else if(computerMove == 'papier' && playerMove =='nieznany ruch'){
//    printMessage('Nie oszukuj!');
//}   else if(computerMove == 'nożyce' && playerMove =='nieznany ruch'){
//    printMessage('Nie oszukuj!');
//}   else {
//    printMessage('Przegrałeś :(');
//}


