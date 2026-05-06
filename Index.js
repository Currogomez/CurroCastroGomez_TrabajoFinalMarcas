const express = require("express");
const app = express();
const port = 5564; // He puesto el mismo puerto que en los apuntes

app.use(express.json());

// --- DATOS: Sitios Turisticos (5) (Recurso Principal) ---
let sitios = [

    //primero: playa
    {
        id: 1,
        nombre: "Playa de Valdevaqueros/Bolonia",
        tipo: "Playa",
        vientoIdeal: "Poniente",
        puntuacion: 9.8,
        esGratis: true,
        descripcion: "Famosa por su popular duna, agua cristalina y el ambiente de kite.",
        zona: "Costa",
        aforo: 3000
    }
];