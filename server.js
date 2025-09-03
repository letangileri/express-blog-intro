const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log("guarda http://localhost:3000");
    
})

app.get("/", (req, res) =>{
    res.send("Server del mio blog");
})

app.get("/bacheca", (req,res)=>{
    const post = [
        {
            titolo:"Ciambellone",
            contenuto:"ciambella",
            immagine:"images/ciambellone.jpeg",
            tag:"sono un tag ciambellone"
        },
        {
            titolo:"Cracker_barbabietola",
            contenuto:"Cracker",
            immagine:"images/cracker_barbabietola.jpeg",
            tag:"sono un tag cracker_barbabietola"
        },
        {
            titolo:"Pane fritto dolce",
            contenuto:"Pane fritto",
            immagine:"images/pane_fritto_dolce.jpeg",
            tag:"sono un tag pane fritto"
        },
        {
            titolo:"Pasta barbabietola",
            contenuto:"pasta",
            immagine:"images/pasta_barbarbietola.jpeg",
            tag:"sono un tag barbabietola"
        },
        {
            titolo:"Torta paesana",
            contenuto:"torta",
            immagine:"images/torta_paesana.jpeg",
            tag:"sono un tag torta paesana"
        },
    ]
    
    res.json(post);
})


