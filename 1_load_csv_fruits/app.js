import fs from 'fs';
import csv from 'csv-parser';

console.log("Chargement d'un fichier CSV");
let fruits = [];
// Charger le fichier
fs.createReadStream('fruits.csv')
    .pipe(csv())

    // Lire chaque ligne du CSV
    .on('data', (row) => {
        const {ID, 'Nom du fruit': name, 'Prix au kilo': price} = row;
        fruits.push({
            id: parseInt(ID),
            name,
            price: parseFloat(price)
        });
    })
    .on('end', () => {
        console.log('Liste des fruits chargée')
        console.log(fruits)
    });

