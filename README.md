# WebbUs julkalender bidrag 2018

Fetaste julkalenderbidraget

## Kom igång
[Installera Node](https://nodejs.org/en/).
Installera/Uppdatera node modulerna och starta den lokala servern. Hitta vad du ska göra via trello.
````
npm install
npm run server
xdg-open https://trello.com/b/9q2d1WeL/webbu-julkalenderbidrag      # Linux
open https://trello.com/b/9q2d1WeL/webbu-julkalenderbidrag          # Mac
start https://trello.com/b/9q2d1WeL/webbu-julkalenderbidrag         # Windows (verify?)
````

På vissa versioner av OSX får man följande error:
````
Module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
````
Installera då libpng:
````
brew install libpng
````

För att lägga upp på GitHub pages:
```
npm run deploy
```
