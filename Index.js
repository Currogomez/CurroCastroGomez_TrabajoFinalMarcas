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
        DificultadAcceso: "Alta",
        puntuacion: 9.8,
        esGratis: true,
        descripcion: "Famosa por su popular duna, agua cristalina y el ambiente de kite. pertenece al oceano atlantico.",
        zona: "Costa",
        aforo: 3000
    },

    {
        id: 2,
        nombre: "Castillo de Guzman el Bueno",
        tipo: "Punto de interes",
        DificultadAcceso: "Media",
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
        DificultadAcceso: "Media",
        puntuacion: 7.7,
        esGratis: false,
        descripcion: "Restaurante/Chiringuito exoticamente gastronomico",
        zona: "A las afueras",
        aforo: 145
    },

    {
        id: 4,
        nombre: "Playa Chica",
        tipo: "Playa",
        vientoIdeal: "Levante",
        DificultadAcceso: "Baja",
        puntuacion: 9,
        esGratis: true,
        descripcion: "Famosa por su agua muy fria y cristalina. Pertenece al mar mediterraneo",
        zona: "Costa",
        aforo: 145
    },

    {
        id: 5,
        nombre: "Puerta de Jerez",
        tipo: "Punto de interes",
        DificultadAcceso: "Baja",
        puntuacion: 8.5,
        esGratis: true,
        descripcion: "Monumento/pasadizo conocido historico por el cual se entra al centro de la ciudad",
        zona: "Centro",
        aforo: 25
    }
];