//Enum para el atributo "tipo"
enum CategoriaSitio {
    Playa = "Playa",
    PuntoInteres = "Punto de interes",
    Restaurante = "Restaurante"
}

enum DificultadAcceso {
    Baja = "Baja",
    Media = "Media",
    Alta = "Alta"
}

//-----------------------------------------

// --- INTERFAZ DEL RECURSO PRINCIPAL ---
interface SitioTuristico {
    id: number;
    nombre: string;
    tipo: CategoriaSitio;
    vientoIdeal?: string; // (?)Opcional (solo playas)
    DificultadAcceso: DificultadAcceso;
    puntuacion: number;
    esGratis: boolean;
    descripcion: string;
    zona: string;
    aforo: number;
}

//-----------------------------------------

// ARRAY DATOS TIPADO (sirve basicamente para asegurar sigue con las "reglas" de estructura)

const sitiosTarifa: SitioTuristico[] = [
    {
        id: 1,
        nombre: "Playa de Valdevaqueros/Bolonia",
        tipo: CategoriaSitio.Playa,
        vientoIdeal: "Poniente",
        DificultadAcceso: DificultadAcceso.Alta,
        puntuacion: 9.8,
        esGratis: true,
        descripcion: "Famosa por su popular duna y ambiente de kite.",
        zona: "Costa",
        aforo: 3000
    },
    {
        id: 2,
        nombre: "Castillo de Guzman el Bueno",
        tipo: CategoriaSitio.PuntoInteres,
        DificultadAcceso: DificultadAcceso.Media,
        puntuacion: 8,
        esGratis: false,
        descripcion: "Fortaleza histórica frente al puerto.",
        zona: "Centro",
        aforo: 170
    },
    {
        id: 3,
        nombre: "Hurricane",
        tipo: CategoriaSitio.Restaurante,
        DificultadAcceso: DificultadAcceso.Media,
        puntuacion: 7.7,
        esGratis: false,
        descripcion: "Restaurante exóticamente gastronómico.",
        zona: "A las afueras",
        aforo: 145
    },
    {
        id: 4,
        nombre: "Playa Chica",
        tipo: CategoriaSitio.Playa,
        vientoIdeal: "Levante",
        DificultadAcceso: DificultadAcceso.Baja,
        puntuacion: 9,
        esGratis: true,
        descripcion: "Agua cristalina del Mediterráneo.",
        zona: "Costa",
        aforo: 145
    },
    {
        id: 5,
        nombre: "Puerta de Jerez",
        tipo: CategoriaSitio.PuntoInteres,
        DificultadAcceso: DificultadAcceso.Baja,
        puntuacion: 8.5,
        esGratis: true,
        descripcion: "Entrada histórica al centro de la ciudad.",
        zona: "Centro",
        aforo: 25
    }
];

//-----------------------------------------

// Mensaje
console.log(`Se han cargado ${sitiosTarifa.length} sitios Turisticos de Tarifa 🏰🏖️📌☑️.`);