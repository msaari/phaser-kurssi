var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: {
		preload: preload,
		create: create,
		update: update
	}
}

var game = new Phaser.Game(config)

var sana = null
var kirjoitus = ""

function preload() {
	this.load.image("tausta", "assets/tausta.jpg")
	this.load.bitmapFont("desyrel", "assets/desyrel.png", "assets/desyrel.xml")
	this.load.audio("plop", "assets/plop.mp3")
	this.load.audio("kirjoituskone", "assets/kirjoituskone.mp3")
}

function create() {
	this.add.image(400, 300, "tausta")
	this.sound.add("plop")
	this.sound.add("kirjoituskone")
	sana = this.add.bitmapText(300, 0, "desyrel", "")
	sana.text = "heippa"

	this.input.keyboard.on("keydown", keyPress)
}

function update() {
	sana.y += 1
}

function keyPress(event) {
	this.scene.sound.play("kirjoituskone")
	if (event.key.length === 1) kirjoitus += event.key.toLowerCase()
	if (kirjoitus.endsWith(sana.text)) {
		sana.destroy()
		this.scene.sound.play("plop")
	}
}
