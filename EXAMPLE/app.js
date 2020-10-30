var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb
//uri di connessione

/* GET users listing. */
router.get('/', function (req, res, next) {
    const MongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://gioele-bra:hGSdfpfQKAke3STS@cluster0.dbkxm.mongodb.net/sample_mflix?retryWrites=true&w=majority"
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            console.log(result);
        }); //Eseguo la query e passo una funzione di callback

        client.close();
    });
    res.send('respond with a resource');
});

module.exports = router;