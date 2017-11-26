function initializeRoster(amount) {
    alert('initializing roster');
    var players = [];

    if (amount == 0) {
        alert('Please specify the number of players you want to create');
        return 0;
    }

    for (var i = 0; i < amount; i++) {

        var stat = (i % 2 == 1) ? 'Starter' : 'Bench-warmer';
        var now = new Date();
        var dob = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();
        var img = document.createElement('img');
        img.alt = 'Player Icon';
        var stats = {
            fouls: 0,
            redCards: 0,
            yellowCards: 0,
            shotsOnGoal: 0,
            goals: 0,
            cKicks: 0,
            pKicks: 0,
            tIns: 0,
            appearances: 0
        }

        var player = {
            img: img,
            number: i,
            name: 'Player ' + i,
            status: stat,
            position: 'position ' + i,
            college: 'UCSD',
            hometown: 'San Diego',
            age: (30 - i),
            DOB: Date.now(),
            ID: ('P' + (11110 + i)),
            stats: stats
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

function createPlayer(img, inputName, pos, num, stat, college, home, age, dob, pid, stats) {

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
        ID: pid,
        stats: stats
    }
    return player;
}

function updatePlayerStorage(img, inputName, pos, num, stat, college, home, age, dob, pid) {
    var backRoster = getRoster();   
    var index = -1;

    for (var i = 0; i < backRoster.length; i++) {

        if (backRoster[i].ID == pid) {

            console.log('got in if statement');
            index = i;
            break;
        }
    }

    backRoster[i].img = img;
    backRoster[i].number = num;
    backRoster[i].inputName = name;
    backRoster[i].stat = stat;
    backRoster[i].position = pos;
    backRoster[i].college = college;
    backRoster[i].hometown = home;
    backRoster[i].age = age;
    backRoster[i].DOB = dob;
    backRoster[i].ID = pid;

    localStorage.setItem('Roster', JSON.stringify(backRoster));
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

function initializeInputStats() {
    //alert('Initializing input stats');
    var inputRoster = JSON.parse(localStorage.getItem('Roster'));
    console.log(inputRoster);
    for (var i = 0; i < inputRoster.length; ++i){
        var name = inputRoster[i].name;
        var number = inputRoster[i].number;
        var position = inputRoster[i].position;
        var template = document.getElementById('playerTemplate').content;
        //console.log(template);
        //template.querySelector('#tempName').innerText = name;
        //console.log(template.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1]);
        template.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[1].innerText = name;
        //template.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.innerText = name;
        //template.querySelector('#tempPos').innerText = position;
        template.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[3].innerText = position;
        //template.querySelector('#tempNum').innerText = number;
        template.childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[1].childNodes[3].innerText = number;
        //console.log(template.querySelector('#playerDiv'));
        //var f = ('show_modal('+name+')');
        //template.querySelector('#playerDiv').setAttribute('onClick',f);
        //template.querySelector('#playerDiv').setAttribute('onClick','show_modal('+name+')');
        //template.querySelector('#playerDiv').setAttribute('onClick','show_modal("'+name+'")');
        template.childNodes[1].childNodes[1].setAttribute('onClick','show_modal("'+name+'")');
        //console.log(template.childNodes[1].childNodes[1]);
        //template.querySelector('#playerDiv').setAttribute('onclick',function f(){show_modal(name)});
        //template.querySelector('#playerDiv').onclick = function f(){show_modal(name)};
        //console.log(template.querySelector('#playerDiv'));
        var toAdd = document.getElementById('playerTemplate').content.cloneNode(true);
        //console.log(toAdd);
        document.getElementById('IStbody').appendChild(toAdd);
    }
    return 1;
}

function viewStats(name){
    var inputRoster = JSON.parse(localStorage.getItem('Roster'));
    for (var i = 0; i < inputRoster.length; ++i){
        var player = inputRoster[i];
        if (player.name == name) {
            document.getElementById('fouls').innerText = player.stats.fouls;
            document.getElementById('redCards').innerText = player.stats.redCards;
            document.getElementById('yellowCards').innerText = player.stats.yellowCards;
            document.getElementById('shotsOnGoal').innerText = player.stats.shotsOnGoal;
            document.getElementById('goals').innerText = player.stats.goals;
            document.getElementById('cKicks').innerText = player.stats.cKicks;
            document.getElementById('pKicks').innerText = player.stats.pKicks;
            document.getElementById('tIns').innerText = player.stats.tIns;
            document.getElementById('appearances').innerText = player.stats.appearances;
            document.getElementById('update_btn').setAttribute('onClick','updateStats("'+name+'")');
            break;
        }
    }
}

function updateStats(name){
    var inputRoster = JSON.parse(localStorage.getItem('Roster'));
    for (var i = 0; i < inputRoster.length; ++i){
        var player = inputRoster[i];
        if (inputRoster[i].name == name) {
            player.stats.fouls = document.getElementById('fouls').innerText;
            player.stats.redCards = document.getElementById('redCards').innerText;
            player.stats.yellowCards = document.getElementById('yellowCards').innerText;
            player.stats.shotsOnGoal = document.getElementById('shotsOnGoal').innerText;
            player.stats.goals = document.getElementById('goals').innerText;
            player.stats.cKicks = document.getElementById('cKicks').innerText;
            player.stats.pKicks = document.getElementById('pKicks').innerText;
            player.stats.tIns = document.getElementById('tIns').innerText;
            player.stats.appearances = document.getElementById('appearances').innerText;
            //inputRoster[i] = player;
            console.log(inputRoster);
            localStorage.setItem('Roster', JSON.stringify(inputRoster));
            break;
        }
    }
    close_modal();
}