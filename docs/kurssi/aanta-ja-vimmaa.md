# Ääntä peliin

Nyt pelaaja pystyy suoriutumaan annetusta tehtävästä, joten on syytä palkita pelaajaa siitä. Nykyisellään sana vain katoaa ruudulta ilman sen suurempia juhlallisuuksia, mikä on yksinkertaisesti tylsää.

## Lisätään plop

Lisätään sanan katoamiseen äänitehoste. Löysin sopivan äänitehosteen [Freesound.orgista](https://freesound.org/people/Breviceps/sounds/447910/), muunsin sen MP3-muotoon ja tallensin pelin `assets`-hakemistoon nimellä `plop.mp3`. Äänitiedoston esittely `preload()`-funktiossa on tuttu juttu kuvien esittelemisestä:

	this.load.audio("plop", "assets/plop.mp3")

Funktiossa `create()` pitää tuoda ääni peliin:

	this.sound.add("plop")

Ja sen jälkeen `keyPress()`-funktiossa voidaan soittaa ääni:

	this.scene.sound.play("plop")

Nyt koodi näyttää tältä:

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
	}

	function create() {
		this.add.image(400, 300, "tausta")
		this.sound.add("plop")
		sana = this.add.bitmapText(300, 0, "desyrel", "")
		sana.text = "heippa"

		this.input.keyboard.on("keydown", keyPress)
	}

	function update() {
		sana.y += 1
	}

	function keyPress(event) {
		if (event.key.length === 1) kirjoitus += event.key.toLowerCase()
		if (kirjoitus.endsWith(sana.text)) {
			sana.destroy()
			this.scene.sound.play("plop")
		}
	}

Kun pelin käynnistää ja kirjoittaa `heippa`, sana katoaa ja kuuluu äänitehoste.

## Toinen äänitehoste

Lisätään vielä käyttäjän kirjoitukseen [kirjoituskoneen ääni](https://freesound.org/people/yottasounds/sounds/380136/), jotta käyttäjä saa toimistaan palautetta.

Preloadissa:

	this.load.audio("kirjoituskone", "assets/kirjoituskone.mp3")

Createssa:

	this.sound.add("kirjoituskone")

KeyPressissä:

	this.scene.sound.play("kirjoituskone")

Nyt peli pitää mukavaa kirjoituskoneen raksutusta.

## Sivuhuomautus tekijänoikeuksista

Löysin mielestäni hyvän äänitehosteen ZapSplat.comista, joka väittää tarjoavansa ilmaisia äänitehoisteita vapaasti käyttöön. Kannatti kuitenkin lukea [ZapSplatin lisenssiehdot](https://www.zapsplat.com/license-type/standard-license/), sillä äänitehosteen käyttäminen tässä projektissa ei olisi lisenssin mukaista.

Lisenssiehdoissa rajataan "Our sound effects must not be distributed in any form including on other websites, on social networks, file sharing platforms, CD, DVD or any other ROM.", ja minä tarvitsen äänitehosteen, jonka voin liittää tämän kurssin materiaaleihin. (Hieman myös ihmetyttää lisenssiehtojen kohta "Our sound effects must not be shared with any person.") Kannattaa siis olla tarkkana.

FreeSoundsista ottamani äänet on lisensoitu [CC0-lisenssillä](https://creativecommons.org/publicdomain/zero/1.0/deed.fi), joka tarkoittaa, että niillä saa tehdä ihan mitä tahansa: "Teosta voi lupaa pyytämättä kopioida, muokata, levittää ja esittää, mukaan lukien kaupallisessa tarkoituksessa."