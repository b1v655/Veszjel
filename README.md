# Veszély jelző alkalmazás
Katasztrófa és veszélyjelző alkalmazás
## Leírás

Katasztrófa helyzetek helyszíni megjelölésére, illetve figyelmeztetések kiadására alkalmas program.

### Támogatott funkciók
- Közelben történő veszélyhelyzet esetén automatikus figyelmeztetés mobil eszközön
- Eset bejelentése
- Legfontosabb hatósági intézkedések megjelenítése
- Veszélyhelyzettel kapcsolatos hírek megjelenítése

### Felületi terv

![Figyelmeztetés környéken](./design/Figyelmeztetes.png) 

![Hírek veszélyhelyzetekről](./design/hirek.png) 


## Környezeti függőségek

### operációs rendszer

szerver: Ubuntu 21.04 LTS
kliens: Android 4.0.3+

### Szerver függőségei

A szerver reactJS nyelven íródott futtatásához az alábbi függőségek telepítése elengedhetetlen.

[nodejs 12+](https://nodejs.org/en/download/)
[npm 5.5+](https://docs.npmjs.com/cli/v8/commands/npm-install)
[expo-cli](https://docs.expo.dev/get-started/installation/)

### kliens függőségei

Az alkalmazás android operációs rendszerre lett optimalizálva expo go környezetre.

[Expo Go 2.19.6](https://expo.dev/client) 

