{
    let roundCount = 0;

    function playGame(playerInput) {
        clearMessages();
        // roundCount++;
        roundCount = roundCount + 1;
        printRound('Runda: ' + roundCount);
        
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const getMoveName = function (argMoveID) {
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

        const computerMove = getMoveName(randomNumber),
            playerMove = getMoveName(playerInput);

        //    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

        console.log('Gracz wpisał: ' + playerInput);

        //    const playerMove = getMoveName(playerInput);



        function displayResult(argComputerMove, argPlayerMove) {
            printMessage('Mój ruch to: ' + argComputerMove);
            printMessage('Twój ruch to: ' + argPlayerMove);
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
                printRound('Rundę '+roundCount+' Wygrał gracz.');
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
                printRound('Rundę '+roundCount+' Wygrał gracz.');
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                printRound('Rundę '+roundCount+' Wygrał gracz.');
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
                printMessage('Remis');
                printRound('Runda  '+roundCount+' Remis')
            } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
                printMessage('Remis');
                printRound('Runda  '+roundCount+' Remis')
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
                printMessage('Remis');
                printRound('Runda  '+roundCount+' Remis')
            }  else {
                printMessage('Przegrałeś :(');
                printRound('Rundę '+roundCount+' Wygrał komputer');
            }
        }
        displayResult(computerMove, playerMove);
    }



    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });



}








//playGame(3);
