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
        var img = document.createElement('img');
        img.alt = 'Player Icon';

        var player = {
            img: img,
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

function getRoster() {
    return JSON.parse(localStorage.getItem('Roster'));
}

function createPlayer(img, inputName, pos, num, stat, college, home, age, dob, pid) {

    var player = {
        img: img,
        number: num,
        name: inputName,
        status: stat,
        position: pos,
        college: college,
        hometown: home,
        age: age,
        DOB: dob,
        ID: pid
    }
    return player;
}

function updatePlayerStorage(img, inputName, pos, num, stat, college, home, age, dob, pid) {

    var backRoster = JSON.parse(localStorage.getItem('Roster'));    
    index = -1;

    for (var i = 0; i < backRoster.length; i++) {

        if (backRoster[i].ID == pid) {

            index = i;
            break;
        }
    }

    backRoster[i].img = img;
    backRoster[i].num = num;
    backRoster[i].inputName = name;
    backRoster[i].stat = stat;
    backRoster[i].position = pos;
    backRoster[i].college = college;
    backRoster[i].hometown = home;
    backRoster[i].age = age;
    backRoster[i].DOB = dob;
    backRoster[i].ID = pid;
}

function deletePlayerByIndex(index) {

    var backRoster = JSON.parse(localStorage.getItem('Roster'));
    backRoster.splice(index, 1);
    localStorage.setItem('Roster', JSON.stringify(backRoster));

}

function deletePlayerByNumber(num) {

    var backRoster = JSON.parse(localStorage.getItem('Roster'));    
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

function deletePlayerById(inputId) {

    var backRoster = JSON.parse(localStorage.getItem('Roster'));    
    index = -1;

    for (var i = 0; i < backRoster.length; i++) {

        if (backRoster[i].ID == inputId) {

            index = i;
            break;
        }
    }
    if (index == -1) alert('The player with ID ' + inputId + ' cannot be found');
    else deletePlayerByIndex(index);
}