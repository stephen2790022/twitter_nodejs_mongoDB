const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const index = require('./routes/index.js')

const port = process.env.PORT || 3000;

// Récupére les vues dans le dossier views
app.set('views', path.join(__dirname, 'views'));
// dis de lire tt les fichier ac l'extension pug 'view engine'
app.set('view engine', 'pug');

// utilise le logger morgan
app.use(morgan('short'))
// recupere les assets par exemples img ou police à partir de public
app.use(express.static(path.join(__dirname, 'public')))
// Utiliser pour passer de la data via la methode post
app.use(express.json());
// Utiliser pour passer de la data via method post
app.use(express.urlencoded({ extended: true }));

app.use(index)



app.listen(port)