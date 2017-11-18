function initializeRoster(amount) {

    var players = [];

    if (amount == 0) {
        alert('Please specify the number of players you want to create');
        return 0;
    }

    for (var i = 0; i < amount; i++) {

        var stat = (i % 2 == 1) ? 'Stater' : 'Bench-warmer';
        var now = new Date();
        var dob = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();

        var player = {
            number: i,
            name: 'Player ' + i,
            status: stat,
            position: 'position ' + i,
            College: 'UCSD',
            Hometown: 'San Diego',
            Age: (30 - i),
            DOB: Date.now(),
            ID: (11110 + i)
        }

        players.push(player);
    }
    localStorage.setItem('Roster', JSON.stringify(players));

    return 1;
}

function removeRoster() {
    localStorage.removeItem('Roster');
}

function createPlayer(inputName, pos, num, stat, college, home, age, dob, pid) {

    var player = {
        number: num,
        name: inputName,
        status: stat,
        position: pos,
        College: college,
        Hometown: home,
        Age: age,
        DOB: dob,
        ID: pid
    }

    var backRoster = JSON.parse(localStorage.getItem('Roster'));
    backRoster.push(player);
    localStorage.setItem('Roster', JSON.stringify(backRoster));
    return player;
}

function deletePlayerByIndex(index) {

    var backRoster = JSON.parse(localStorage.getItem('Roster'));
    backRoster.splice(index, 1);
    localStorage.setItem('Roster', JSON.stringify(backRoster));

}

function deletePlayerByNumber(num) {

    index = -1;

    for (var i = 0; i < backRoster.length; i++) {

        if (backRoster[i].number == num) {

            index = i;
            break;
        }
    }
    if (index == -1) alert('The player with number ' + num + ' cannot be found');
    else deletePlayerByIndex(index);
}

function deletePlayerByName(inputName) {

    index = -1;

    for (var i = 0; i < backRoster.length; i++) {

        if (backRoster[i].name == inputName) {

            index = i;
            break;
        }
    }
    if (index == -1) alert('The player with name ' + name + ' cannot be found');
    else deletePlayerByIndex(index);
}