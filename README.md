MILESTONE 1

Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout.
Non esagerate con i componenti: less is more. 

L’esercizio già lo conoscete (html-css-boolando), ma la sfida è suddividerlo in componenti e provare a sfruttare SASS  per rendere il nostro stile più leggibile e flessibile (di quali variabili potreste avere bisogno?).

BONUS
Popoliamo le voci dell’header (sia le tre voci testuali che le tre icone) dinamicamente

MILESTONE 2
Aggiungete un array di prodotti e stampateli in pagina usando un componente productCard e le props necessarie per visualizzarlo correttamente.

Ciascun oggetto dell'array avrá le proprietá necessarie per stampare la card di prodotto.
Createla in autonomia prendendo come riferimento il layout che avete costruito.

MILESTONE 3
Continuate a lavorare nella stessa repo di ieri. Installiamo la libreria json-server e aggiungiamo al package.json lo script “serve” necessario per avviarlo: “json-server --watch db.json”. Impostiamo uno stato globale: quali dati globali gestisce la nostra app? Infine, facciamo in modo che la nostra App, all’avvio, non legga più i dati dall’array statico presente nel componente, ma dall’API che ci rende disponibile json-server.

MILESTONE 4
Continuate a lavorare nella stessa repo di ieri. Facciamo in modo che al click sul nome del prodotto nella card venga emesso un evento “showProduct” verso il componente App. In App, quando riceviamo l’evento, apriamo una modale che mostra tutte le informazioni testuali del prodotto. Nella modale è presente una X (o un pulsante) per chiuderla.

Bonus
Proviamo a creare una modale più completa: mostriamo le immagini del prodotto sulla sinistra e le informazioni di testo sulla destra.