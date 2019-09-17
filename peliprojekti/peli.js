var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create
	}
}

var game = new Phaser.Game(config)

function preload() {
	this.load.image("tausta", "assets/tausta.jpg")
}

function create() {
	this.add.image(400, 300, "tausta")
}
