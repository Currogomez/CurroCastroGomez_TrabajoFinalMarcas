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