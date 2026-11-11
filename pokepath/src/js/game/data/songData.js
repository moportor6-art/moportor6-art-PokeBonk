const songs = {
	0: {
		name: ['Route 1-1', 'Ruta 1-1', 'Route 1-1', 'Rota 1-1', 'Zona 1-1', 'Route 1-1', 'ルート1-1', '루트 1-1', '路線 1-1', 'Droga 1-1'],
		song: 'route1',
		order: 0
	},
	1: {
		name: ['Route 1-2', 'Ruta 1-2', 'Route 1-2', 'Rota 1-2', 'Zona 1-2', 'Route 1-2', 'ルート1-2', '루트 1-2', '路線 1-2', 'Droga 1-2'],
		song: 'route2',
		order: 1
	},
	2: {
		name: ['Route 1-3', 'Ruta 1-3', 'Route 1-3', 'Rota 1-3', 'Zona 1-3', 'Route 1-3', 'ルート1-3', '루트 1-3', '路線 1-3', 'Droga 1-3'],
		song: 'route3',
		order: 2
	},
	9: {
		name: ['Route 1-4', 'Ruta 1-4', 'Route 1-4', 'Rota 1-4', 'Zona 1-4', 'Route 1-4', 'ルート1-4', '루트 1-4', '路線 1-4', 'Droga 1-4'],
		song: 'route10',
		order: 3
	},
	3: {
		name: ['Route 2-1', 'Ruta 2-1', 'Route 2-1', 'Rota 2-1', 'Zona 2-1', 'Route 2-1', 'ルート2-1', '루트 2-1', '路線 2-1', 'Droga 2-1'],
		song: 'route4',
		order: 4
	},
	4: {
		name: ['Route 2-2', 'Ruta 2-2', 'Route 2-2', 'Rota 2-2', 'Zona 2-2', 'Route 2-2', 'ルート2-2', '루트 2-2', '路線 2-2', 'Droga 2-2'],
		song: 'route5',
		order: 5
	},
	5: {
		name: ['Route 2-3', 'Ruta 2-3', 'Route 2-3', 'Rota 2-3', 'Zona 2-3', 'Route 2-3', 'ルート2-3', '루트 2-3', '路線 2-3', 'Droga 2-3'],
		song: 'route6',
		order: 6
	},
	10: {
		name: ['Route 2-4', 'Ruta 2-4', 'Route 2-4', 'Rota 2-4', 'Zona 2-4', 'Route 2-4', 'ルート2-4', '루트 2-4', '路線 2-4', 'Droga 2-4'],
		song: 'route11',
		order: 7
	},
	6: {
		name: ['Route 3-1', 'Ruta 3-1', 'Route 3-1', 'Rota 3-1', 'Zona 3-1', 'Route 3-1', 'ルート3-1', '루트 3-1', '路線 3-1', 'Droga 3-1'],
		song: 'route7',
		order: 8
	},
	7: {
		name: ['Route 3-2', 'Ruta 3-2', 'Route 3-2', 'Rota 3-2', 'Zona 3-2', 'Route 3-2', 'ルート3-2', '루트 3-2', '路線 3-2', 'Droga 3-2'],
		song: 'route8',
		order: 9
	},
	8: {
		name: ['Route 3-3', 'Ruta 3-3', 'Route 3-3', 'Rota 3-3', 'Zona 3-3', 'Route 3-3', 'ルート3-3', '루트 3-3', '路線 3-3', 'Droga 3-3'],
		song: 'route9',
		order: 10
	},
	11: {
		name: ['Route 3-4', 'Ruta 3-4', 'Route 3-4', 'Rota 3-4', 'Zona 3-4', 'Route 3-4', 'ルート3-4', '루트 3-4', '路線 3-4', 'Droga 3-4'],
		song: 'route12',
		order: 11
	},
	12: {
		name: ['Route 4-1', 'Ruta 4-1', 'Route 4-1', 'Rota 4-1', 'Zona 4-1', 'Route 4-1', 'ルート 4-1', '루트 4-1', '路線 4-1', 'Droga 4-1'],
		song: 'route13',
		order: 12
	},
	13: {
		name: ['Route 4-2', 'Ruta 4-2', 'Route 4-2', 'Rota 4-2', 'Zona 4-2', 'Route 4-2', 'ルート 4-2', '루트 4-2', '路線 4-2', 'Droga 4-2'],
		song: 'route14',
		order: 13
	},
	14: {
		name: ['Route 4-3', 'Ruta 4-3', 'Route 4-3', 'Rota 4-3', 'Zona 4-3', 'Route 4-3', 'ルート 4-3', '루트 4-3', '路線 4-3', 'Droga 4-3'],
		song: 'route15',
		order: 14
	},
	15: {
		name: ['Route 4-4', 'Ruta 4-4', 'Route 4-4', 'Rota 4-4', 'Zona 4-4', 'Route 4-4', 'ルート 4-4', '루트 4-4', '路線 4-4', 'Droga 4-4'],
		song: 'route16',
		order: 15
	},
	16: {
		name: ['Route 5-1', 'Ruta 5-1', 'Route 5-1', 'Rota 5-1', 'Zona 5-1', 'Route 5-1', 'ルート 5-1', '루트 5-1', '路線 5-1', 'Droga 5-1'],
		song: 'route17',
		order: 16
	},
	17: {
		name: ['Route 5-2', 'Ruta 5-2', 'Route 5-2', 'Rota 5-2', 'Zona 5-2', 'Route 5-2', 'ルート 5-2', '루트 5-2', '路線 5-2', 'Droga 5-2'],
		song: 'route18',
		order: 17
	},
	18: {
		name: ['Route 5-3', 'Ruta 5-3', 'Route 5-3', 'Rota 5-3', 'Zona 5-3', 'Route 5-3', 'ルート 5-3', '루트 5-3', '路線 5-3', 'Droga 5-3'],
		song: 'route19',
		order: 18
	},
	19: {
		name: ['Route 5-4', 'Ruta 5-4', 'Route 5-4', 'Rota 5-4', 'Zona 5-4', 'Route 5-4', 'ルート 5-4', '루트 5-4', '路線 5-4', 'Droga 5-4'],
		song: 'route20',
		order: 19
	},

	20: {
		name: ['Route 6-1', 'Ruta 6-1', 'Route 6-1', 'Rota 6-1', 'Zona 6-1', 'Route 6-1', 'ルート 6-1', '루트 6-1', '路線 6-1', 'Droga 6-1'],
		song: 'route23',
		order: 20
	},
	21: {
		name: ['Route 6-2', 'Ruta 6-2', 'Route 6-2', 'Rota 6-2', 'Zona 6-2', 'Route 6-2', 'ルート 6-2', '루트 6-2', '路線 6-2', 'Droga 6-2'],
		song: 'route25',
		order: 21
	},
	22: {
		name: ['Route 6-3', 'Ruta 6-3', 'Route 6-3', 'Rota 6-3', 'Zona 6-3', 'Route 6-3', 'ルート 6-3', '루트 6-3', '路線 6-3', 'Droga 6-3'],
		song: 'route29',
		order: 22
	},
	23: {
		name: ['Route 6-4', 'Ruta 6-4', 'Route 6-4', 'Rota 6-4', 'Zona 6-4', 'Route 6-4', 'ルート 6-4', '루트 6-4', '路線 6-4', 'Droga 6-4'],
		song: 'route24',
		order: 23
	},
	24: {
		name: ['Route 7-1', 'Ruta 7-1', 'Route 7-1', 'Rota 7-1', 'Zona 7-1', 'Route 7-1', 'ルート 7-1', '루트 7-1', '路線 7-1', 'Droga 7-1'],
		song: 'route30',
		order: 24
	},
	25: {
		name: ['Route 7-2', 'Ruta 7-2', 'Route 7-2', 'Rota 7-2', 'Zona 7-2', 'Route 7-2', 'ルート 7-2', '루트 7-2', '路線 7-2', 'Droga 7-2'],
		song: 'route21',
		order: 25
	},
	26: {
		name: ['Route 7-3', 'Ruta 7-3', 'Route 7-3', 'Rota 7-3', 'Zona 7-3', 'Route 7-3', 'ルート 7-3', '루트 7-3', '路線 7-3', 'Droga 7-3'],
		song: 'route26',
		order: 26
	},
	27: {
		name: ['Route 7-4', 'Ruta 7-4', 'Route 7-4', 'Rota 7-4', 'Zona 7-4', 'Route 7-4', 'ルート 7-4', '루트 7-4', '路線 7-4', 'Droga 7-4'],
		song: 'route22',
		order: 27
	},
	28: {
		name: ['Route 8-1', 'Ruta 8-1', 'Route 8-1', 'Rota 8-1', 'Zona 8-1', 'Route 8-1', 'ルート 8-1', '루트 8-1', '路線 8-1', 'Droga 8-1'],
		song: 'route31',
		order: 28
	},
	29: {
		name: ['Route 8-2', 'Ruta 8-2', 'Route 8-2', 'Rota 8-2', 'Zona 8-2', 'Route 8-2', 'ルート 8-2', '루트 8-2', '路線 8-2', 'Droga 8-2'],
		song: 'route27',
		order: 29
	},
	30: {
		name: ['Route 8-3', 'Ruta 8-3', 'Route 8-3', 'Rota 8-3', 'Zona 8-3', 'Route 8-3', 'ルート 8-3', '루트 8-3', '路線 8-3', 'Droga 8-3'],
		song: 'route32',
		order: 30
	},
	31: {
		name: ['Route 8-4', 'Ruta 8-4', 'Route 8-4', 'Rota 8-4', 'Zona 8-4', 'Route 8-4', 'ルート 8-4', '루트 8-4', '路線 8-4', 'Droga 8-4'],
		song: 'route28',
		order: 31
	},
	32: {
		name: ['Route 9-1', 'Ruta 9-1', 'Route 9-1', 'Rota 9-1', 'Zona 9-1', 'Route 9-1', 'ルート 9-1', '루트 9-1', '路線 9-1', 'Droga 9-1'],
		song: 'route33',
		order: 32
	},
	33: {
		name: ['Route 9-2', 'Ruta 9-2', 'Route 9-2', 'Rota 9-2', 'Zona 9-2', 'Route 9-2', 'ルート 9-2', '루트 9-2', '路線 9-2', 'Droga 9-2'],
		song: 'route34',
		order: 33
	},
	34: {
		name: ['Route 9-3', 'Ruta 9-3', 'Route 9-3', 'Rota 9-3', 'Zona 9-3', 'Route 9-3', 'ルート 9-3', '루트 9-3', '路線 9-3', 'Droga 9-3'],
		song: 'route35',
		order: 34
	},
	35: {
		name: ['Route 9-4', 'Ruta 9-4', 'Route 9-4', 'Rota 9-4', 'Zona 9-4', 'Route 9-4', 'ルート 9-4', '루트 9-4', '路線 9-4', 'Droga 9-4'],
		song: 'route36',
		order: 35
	},
	36: {
		name: ['Route 10-1', 'Ruta 10-1', 'Route 10-1', 'Rota 10-1', 'Zona 10-1', 'Route 10-1', 'ルート 10-1', '루트 10-1', '路線 10-1', 'Droga 10-1'],
		song: 'route37',
		order: 36
	},
	37: {
		name: ['Route 10-2', 'Ruta 10-2', 'Route 10-2', 'Rota 10-2', 'Zona 10-2', 'Route 10-2', 'ルート 10-2', '루트 10-2', '路線 10-2', 'Droga 10-2'],
		song: 'route38',
		order: 37
	},
	38: {
		name: ['Route 10-3', 'Ruta 10-3', 'Route 10-3', 'Rota 10-3', 'Zona 10-3', 'Route 10-3', 'ルート 10-3', '루트 10-3', '路線 10-3', 'Droga 10-3'],
		song: 'route39',
		order: 38
	},
	39: {
		name: ['Route 10-4', 'Ruta 10-4', 'Route 10-4', 'Rota 10-4', 'Zona 10-4', 'Route 10-4', 'ルート 10-4', '루트 10-4', '路線 10-4', 'Droga 10-4'],
		song: 'route40',
		order: 39
	},
	40: {
		name: ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'],
		song: 'halloween',
		order: 40
	},
}


export const songData = Object.keys(songs)
  	.map(key => ({
	    song: songs[key].song,
	    name: songs[key].name,
	    id: songs[key].order
	}))
	.sort((a, b) => a.id - b.id);