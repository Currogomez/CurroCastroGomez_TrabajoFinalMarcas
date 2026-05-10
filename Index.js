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

//-----------------------------------------

// --- ENDPOINTS ---

// Para coger/obtener los sitios turisticos. Da la lista o sea todoo el array de los sitios turisticos
app.get("/sitios", (req, res) => {
    res.status(200).json(sitios); // 200 (significa ok), o sea que es correcto.
});

//-------------------

// Obtener un registro, O sea, busca un elemento de la lista anterior a partir del ID
app.get("/sitio/:id", (req, res) => {
    const sitio = sitios.find(s => s.id === req.params.id);

    if (!sitio) return res.status(404).json({ error: "Sitio no encontrado ‼️" }); // (error tipico) 404
    res.status(200).json(sitio);
});

//-------------------

// Hacer un nuevo registro con validación, o sea añadir un nuevo sitio de Tarifa a la lista que creamos
app.post("/sitio", (req, res) => {
    const { nombre, tipo, DificultadAcceso, puntuacion, zona, aforo } = req.body;

    if (!nombre || !tipo || !DificultadAcceso || puntuacion === undefined) {
        return res.status(400).json({ error: "Faltan campos obligatorios ‼️" }); // 400 (Solicitud incorrecta)
    }

    const nuevoSitio = { id: sitios.length + 1, ...req.body };
    sitios.push(nuevoSitio);
    res.status(201).json(nuevoSitio); // 201 (creado)
});

//-------------------

// Eliminar un registro de la lista (como si fuera una papelera)
app.delete("/sitio", (req, res) => {
    const index = sitios.findIndex(s => s.id === req.body.id);
    if (index === -1) return res.status(404).json({ error: "ID inexistente ‼️" });

    const eliminado = sitios.splice(index, 1);
    res.status(200).send(`Sitio '${eliminado[0].nombre}' eliminado 🗑️`);
});

//-------------------

// Total de aforo de toda la lista de sitios
app.get("/stats/total-aforo", (req, res) => {

    const total = sitios.reduce((acc, s) => acc + s.aforo, 0);
    res.status(200).json({ aforoTotalTarifa: total });
});