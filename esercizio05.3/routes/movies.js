var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const uri = 'mongodb+srv://gioele-bra:hGSdfpfQKAke3STS@cluster0.dbkxm.mongodb.net/sample_mflix?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // eseguo una find sulla collection
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else res.send(result);
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
});

router.get('/list/:num', function (req, res, next) {
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://gioele-bra:hGSdfpfQKAke3STS@cluster0.dbkxm.mongodb.net/sample_mflix?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(num).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else { 
                res.send(result);
            }
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
    
});

router.get('/year/:num', function (req, res, next) {
    let num = parseInt(req.params.num);
    const uri = 'mongodb+srv://gioele-bra:hGSdfpfQKAke3STS@cluster0.dbkxm.mongodb.net/sample_mflix?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find('{year:{'+num+'}}').toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else { 
                res.send(result);
            }
            client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback

    });
    
});

module.exports = router;