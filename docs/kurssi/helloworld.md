# Pakollinen "hello world" -vaihe

Rakennetaan nyt lähtökohdat projektille ja saatetaan se sellaiseen kuntoon, että ruudulle ilmestyy jotain.

## HTML-tiedoston luominen

Ihan ensimmäiseksi tarvitaan HTML-tiedosto, jonka webbiserveri tarjoilee selaimella avattavaksi ja jossa pelimme tulee pyörimään.

Luodaan siis ensimmäiseksi projektia varten oma hakemisto:

	mkdir peliprojekti

Luo tähän hakemistoon tiedosto `index.html`, jonka sisältö on seuraavanlainen:

```
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<h1>Heippa maailma!</h1>
</body>
</html>
```

Tämän tiedoston voi avata suoraan selaimessa, jolloin ruutuun tulostuu "Heippa maailma!" niin kuin pitääkin, mutta tehdäänpä tämä myös webbipalvelimen kautta.

Jos käytössäsi on PHP- tai Python-palvelin, käynnistä se `peliprojekti`-hakemistossa. Kun palvelin on käynnissä, luomasi sivu pitäisi nyt löytyä osoitteesta `http://localhost:8000/index.html`. Kokeile avata tämä sivu selaimessasi.

Jos käytät XAMPP-palvelinta, `peliprojekti`-hakemiston pitää olla XAMPP-palvelimen hakemistorakenteen sisällä; sen käytännön seikkoihin en nyt tässä mene.

## Phaserin lisääminen

On monia eri tapoja ottaa Phaser osaksi omaa projektia. Käytämme tässä nyt kaikista helpointa, eli Phaserin lataamista CDN-palvelimelta. Tämä on hyvin vaivaton tapa, mikäli käytössä on nettiyhteys.

Phaser otetaan käyttöön lisäämällä tämä rivi HTML-sivusi `head`-osioon:

	<script src="//cdn.jsdelivr.net/npm/phaser@3.19.0/dist/phaser.min.js"></script>

Tämä `script`-tagi lataa Phaserin version 3.19.0 palvelimelta. Tämän muutoksen jälkeen `index.html` näyttää siis tältä:

```
<!DOCTYPE html>
<html>
<head>
	<script src="//cdn.jsdelivr.net/npm/phaser@3.19.0/dist/phaser.min.js"></script>
</head>
<body>
	<h1>Heippa maailma!</h1>
</body>
</html>
```

Versionumero voi muuttua päivitysten myötä. Nykyisen version osoite löytyy [Phaserin lataussivulta](https://phaser.io/download/stable). Jos käytössäsi ei jostain syystä ole nettiyhteyttä, tuolta lataussivulta voit ladata Phaserin tiedoston omalle koneellesi. Valitse `min.js`-versio, tallenna se samaan hakemistoon kuin `index.html` ja laita tiedostoon viittaus muotoon

	<script src="phaser.min.js"></script>

Nyt Phaser ladataan omalta koneeltasi, eikä nettiyhteyttä tarvita.

## Oman Javascript-koodin lisääminen

Pelin koodi voitaisiin kirjoittaa suoraan `index.html`-tiedostoon,  mutta se on vähän ruma ratkaisu. Tyylikkäämpää on kirjoittaa koodi erilliseen tiedostoon.