## Guess The Flag Game

### 1. Specifikáció

**Cél**: A játék célja, hogy a felhasználó kitalálja mind a 32 ország zászlóját

**Funkciók**:
- **Küldés submit gomb**: A felhasználó által beírt országot hasonlítja az objektumban lévő zászló kulcsával, 
ha a ország neve helyes, akkor a program tovább halad amíg el nem éri a 32. ország zászlaját.

---

### 2. Felhasználói útmutató

**Játék Indítása**:
1. Nézze meg a megjelent ország zászlaját.
2. Írja be az inbutba az ön szerint helyesnek tűnő választ.
3. A Submit gomb nyomásával továbbhalad a következő zászlóra.
4. Rossz válasz esetén a felugró alert ablakban nyomjon rá az "OK" gombra, vagy üssőn Entert.

**Tipp Leadása**:
1. Ha készen áll a tippel, kattintson az "Submit" gombra.
2. Ha jó a válasz a játék tovább halad.
2. Rossz válasz esetén a visszajelzés az "alert ablakban" jelenik meg.

**Játék Befejezése**:
- Ha mind a 32 zászló megjelent a játék véget ér.

---

### 3. Fejlesztői útmutató

#### Felépítés
- **index.html**: A weboldal alap struktúrája itt íródik meg html kódolással.
- **style.css**: Itt ruházzuk fel az index.html tag-eket a tulajdonságaival, ez a felület design része.
- **app.js**: A játék működésére alkalmas függvények, eseményfigyelők itt tevődnek rá a html elemekre, ez a játék motorja.

#### Főbb Funkciók az `app.js`-ben
- **`comparingGuess`**: Ősszehasonlítja az input elem értékét az objektumban való értékkel, és növeli a count értékét, ami megjelenik a Submit gomb alatt.
- **`render()`**: Az oldal betöltésekor megjeleníti az adott zászlót.
- **`resetGame()`**: Ha a program lefutott, a játék újraindul, reseteli az értékeket.
- **`getRandomFlag(countries, alreadyUsedCountries)`**: A még eddig nem használt zászlók listájából visszadob randomszerűen egy indexet, amely megjelenít egy, még eddig nem használt zászlót.

---

### 4. Tesztelési Dokumentáció

#### Javasolt Függvények Unit Tesztelésre
- **`getAvailableCountries(countries, alreadyUsedCountries)`**: 


#### Példa Jasmine Tesztesetek

- **`getAvailableCountries()` Függvény**:
  ```javascript
  describe('getAvailableCountries', function() {
    let countries;
    let alreadyUsedCountries;

    beforeEach(function() {
        // Az országok tömbjének beállítása és az alreadyUsedCountries tömb inicializálása.
        countries = [
            { flag: "magyarorszag.png", name: "Magyarország", id: 1 },
            { flag: "nemetorszag.png", name: "Németország", id: 2 },
            { flag: "olaszorszag.png", name: "Olaszország", id: 3 },
            { flag: "csehorszag.png", name: "Csehország", id: 4 }
        ];
    });

    it('minden országot vissza kell adni, ha egyik sem lett használva', function() {
        alreadyUsedCountries = [];

        // A getAvailableCountries meghívása, ha nincsenek használt országok
        const result = getAvailableCountries(countries, alreadyUsedCountries);

        // A függvénynek minden országot vissza kell adnia
        expect(result.length).toBe(4);
        expect(result).toEqual(countries);
    });

    it('csak a nem használt országokat kell visszaadni', function() {
        alreadyUsedCountries = ["magyarorszag.png", "olaszorszag.png"];

        // A getAvailableCountries meghívása néhány használt országgal
        const result = getAvailableCountries(countries, alreadyUsedCountries);

        // A függvénynek csak a nem használt országokat kell visszaadnia
        expect(result.length).toBe(2);  // Két ország maradt elérhető
        expect(result).toEqual([
            { flag: "nemetorszag.png", name: "Németország", id: 2 },
            { flag: "csehorszag.png", name: "Csehország", id: 4 }
        ]);
    });

    it('ha minden ország használt, üres tömböt kell visszaadni', function() {
        alreadyUsedCountries = [
            "magyarorszag.png",
            "nemetorszag.png",
            "olaszorszag.png",
            "csehorszag.png"
        ];

        // A getAvailableCountries meghívása, ha minden ország használt
        const result = getAvailableCountries(countries, alreadyUsedCountries);

        // A függvénynek üres tömböt kell visszaadnia
        expect(result.length).toBe(0);
        expect(result).toEqual([]);
    });
    });
  ```

#### Tesztelési Dokumentáció Formátuma

| Függvény                        | Bemenet                   | Várt Eredmény                                | Eredmény |
|---------------------------------|---------------------------|----------------------------------------------|----------|
| `getAvailableCountries()`       | `Németország`             | Bekerül az alreadyUsedCountries              |Bekerűlt  |
| `getAvailableCountries()`       | `Németország`             | Már bele került a tömbe                      |Hiba      |

> **Megjegyzés**: A `Várt Eredmény` és `Eredmény` oszlopok tesztfuttatás után frissítendők.

---


