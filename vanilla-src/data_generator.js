function createPlayer(amount) {

    var players = [];

    if (amount == 0) {
        alert('Please specify the number of players you want to create');
        return 0;
    }

    for (var i = 0; i < amount; i++) {

        var stat = (i % 2 == 1)? 'Stater' : 'Bench-warmer'

        var player = {
            number: i,
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

    localStorage.setItem('Roster', players);
}