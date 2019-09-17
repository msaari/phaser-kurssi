# Perustukset

Phaser on JavaScript- tai TypeScript-kirjasto, jolla tehdään HTML5-teknologiaan perustuvia pelejä.
Pelit toimivat niin pöytäkoneilla kuin mobiililaitteilla, kunhan käytössä on joku
moderni selain.

## Webbipalvelin

Jotta kehitystyössä päästään käyntiin, ensin tarvitaan webbipalvelin. Selainten turvallisuusominaisuudet pakottavat käyttämään webbipalvelinta pelien ajamiseen: nykyään ei voi enää avata pelin sisältävää HTML-sivua selaimessa ja pelata siinä. Pelin kehityksessä tarvitaan ulkoisia tiedostoja ja niihin selaimessa avattu HTML-sivu ei voi päästä käsiksi – ja hyvä niin!


### PHP

Webbipalvelimen käyttöönotto on kuitenkin enimmäkseen varsin vaivaton operaatio. Kaikista helpoimmin se käy, jos koneessasi on asennettuna PHP, sillä PHP sisältää yksinkertaisen, mutta tällaiseen käyttöön erittäin hyvin riittävän webbipalvelimen.

Tarkista siis ensimmäiseksi, mitä tapahtuu, jos annat komentorivillä komennon

	php -S localhost:8000

Jos koneellasi on asennettuna PHP, komentoriville tulostuu jotain tämännäköistä:

```
PHP 7.3.3 Development Server started at Tue Sep 17 10:28:34 2019
Listening on http://localhost:8000
Document root is /Users/msaari/
Press Ctrl-C to quit.
```

Voit painaa Ctrl-C ja sulkea webbipalvelimen. Asia kunnossa! Tämän pitäisi toimia suoraan Maceissa ja Linux-koneissa.

### Python

Myös Python-ohjelmointikieli tarjoaa vastaavan palvelimen:

	python -m SimpleHTTPServer

Jos koneellasi on Pythonin versio 3, oikea komento on:

	python -m http.server

Tämäkin palvelin suljetaan painamalla Ctrl-C.

### XAMPP

Jos nämä vaihtoehdot eivät toimi, [XAMPP](https://www.apachefriends.org/index.html) on erikseen asennettava ohjelmistopaketti, jolla saa käyttöönsä webbipalvelimen, tietokannan ja koko paketin, mutta siinä on aika paljon enemmän tavaraa kuin tähän käyttöön oikeastaan edes tarvitaan.

## Editori

Ohjelmakoodia ei kannata kirjoittaa millä tahansa tekstieditorilla, vaan käyttöön kannattaa ottaa joku monipuolinen ohjelmointikäyttöön luotu editori. Oma suosikkini on ilmainen [Visual Studio Code](https://code.visualstudio.com/), jolla koodin editointi sujuu vaivatta ja jolla projektin hallitseminen on helppoa.

[Sublime](http://www.sublimetext.com/) on toinen kelpo vaihtoehto, mutta mielestäni se ei ole yhtä hyvä kuin Visual Studio Code, ja lisäksi se on maksullinen.

## Selain

Tuotoksesi suorittamiseen tarvitset tietysti webbiselaimen. Periaatteessa mikä tahansa moderni selain toimii, mutta Chrome ja Firefox ovat luotettavimmat vaihtoehdot. Kannattaa varmistaa, että käytössä on tuore versio selaimesta, ettei tule sen suhteen yllätyksiä.

Nyt kun perustukset ovat kunnossa, päästään rakentamaan!