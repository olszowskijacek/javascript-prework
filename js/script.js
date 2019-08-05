function playGame(playerInput) {
    clearMessages();
    
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    function getMoveName(argMoveID) {
        if (argMoveID == 1) {
            return 'kamień';
        } else if (argMoveID == 2) {
            return 'papier';
        } else if (argMoveID == 3) {
            return 'nożyce';
        } else {
            return 'nieznany ruch';
        }
    }
    console.log('test' + getMoveName(1));
    let computerMove = getMoveName(randomNumber);

//    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);



    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Mój ruch to: ' + argComputerMove);
        printMessage('Twój ruch to: ' + argPlayerMove);
        if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nie oszukuj!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nie oszukuj!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch') {
            printMessage('Nie oszukuj!');
        } else {
            printMessage('Przegrałeś :(');
        }
    }
    displayResult(computerMove, playerMove);
}



document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});












//playGame(3);
