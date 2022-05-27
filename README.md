# QR CAFFE - FRONTEND

Ovo je front-end porcija projekta, samim tim ovdje se nalaze svi potrebni fajlovi za pokretanje front-enda.

## Tehnologija koristena

Programski jezik koji je koristen za pravljenje ovog projekta jeste primarno JavaScript, tacnije njegov framework po imenu React.js.

  - [JSX](https://reactjs.org/docs/introducing-jsx.html)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [React.js](https://reactjs.org/)
  - [Socket.io](https://socket.io/)
  - [React Redux](https://react-redux.js.org/)
  - [React Redux toolkit](https://redux-toolkit.js.org/)

## Pokretanje projekta

Projekt se pokrece veoma jednostavno, sve sto trebate uraditi jeste klonirati repository i upisati sljedece komande u terminal: 
  
Prva komanda je: 


  ```npm install```
  
Ona ce da se preuzme sve dependency-e koji su potrebni za pokretanje i razvijanje ovog projekta.

Druga komanda je (uz predpostavku da ste pokrenuli back-end):

```npm start```

Ova komanda ce da pokrene React aplikaciju i da je servira na vas lokalni host, ukoliko se automatski ne otvori aplikacija u vasem browseru mozete pronaci istu na linku: 

```http://localhost:3000```

## Rute

Svaka web aplikacija ima svoje rute radi lakseg funkcionisanja i izbjegavanja natrpavanja jedne stranice pa tako i ova. Ideja je imati 4 glavne stranice, a one su: 

  - Landing page (localhost:3000/)
  - Admin panel (localhost:3000/ucp)
  - Caffe panel (localhost:3000/caffe/:caffeId)
  - Client panel (localhost:3000/order/:caffeId/:tableId)


## Napomena:
  Front-end ne moze funkcionisati ukoliko back-end nije upaljen.
