const team = {
	_players: [
		{ firstName: "Mike", lastName: "American", age: 30 },
		{ firstName: "Mike", lastName: "Hunt", age: 20 },
		{ firstName: "Joe", lastName: "Everyman", age: 25 },
	],
	_games: [
		{
			opponent: "California Greens",
			teamPoints: 69,
			opponentPoints: 420,
		},
		{
			opponent: "Montreal Englishmen",
			teamPoints: 8008135,
			opponentPoints: 80085,
		},
		{ opponent: "Tokyo Yagoos", teamPoints: 55, opponentPoints: 65 },
	],
	get players() {
		return this._players;
	},
	get games() {
		return this._games;
	},
	addPlayers(newFirstName, newLastName, newAge) {
		player = {
			firstName: newFirstName,
			lastName: newLastName,
			age: newAge,
		};
		this._players.push(player);
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		game = {
			opponent: newOpponent,
			teamPoints: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		this.games.push(game);
	},
};

team.addPlayers("Bugs", "Bunny", 76);
console.log(team.players);
team.addGame("Tit Annes", 100, 98);
console.log(team.games);
