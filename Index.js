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
    },

    {
        id: 2,
        nombre: "Castillo de Guzman el Bueno",
        tipo: "Sitio de interes",
        puntuacion: 8,
        esGratis: false,
        descripcion: "Fortaleza/castillo histórico, frente al puerto",
        zona: "Centro",
        aforo: 170
    },

    {
        id: 3,
        nombre: "Hurricane",
        tipo: "Restaurante",
        puntuacion: 9.5,
        esGratis: false,
        descripcion: "Restaurante/Chiringuito exoticamente gastronomico",
        zona: "A las afueras",
        aforo: 145
    },
];