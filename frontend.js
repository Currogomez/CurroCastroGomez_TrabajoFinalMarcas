const URL_API = "http://localhost:5564";

// Cargar estadísticas
async function actualizarStats() {
    const res = await fetch(`${URL_API}/stats/total-aforo`);
    const data = await res.json();
    document.querySelector('.dato-aforo').innerText = data.aforoTotalTarifa;
}

// Cargar todos los sitios
async function cargarTodos() {
    const res = await fetch(`${URL_API}/sitios`);

    const sitios = await res.json();
    renderizar(sitios);
    actualizarStats();
}

// Buscar por ID
async function buscarUno() {
    const idInput = document.querySelector('.input-busqueda').value;
    if(!idInput) return alert("Escribe un ID");

    const res = await fetch(`${URL_API}/sitio/${idInput}`);
    if(res.ok) {
        const sitio = await res.json();
        renderizar([sitio]);
    } else {
        alert("Sitio no encontrado");
    }
}

// Crear registro (POST)
document.querySelector('.formulario-nuevo').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevo = {
        nombre: document.querySelector('.f-nombre').value,
        tipo: document.querySelector('.f-tipo').value,
        DificultadAcceso: document.querySelector('.f-dificultad').value,
        puntuacion: parseFloat(document.querySelector('.f-puntuacion').value),
        aforo: parseInt(document.querySelector('.f-aforo').value) || 0,
        zona: "Tarifa", // Valores por defecto para que no falle
        esGratis: true,
        descripcion: "Añadido desde la web"
    };

    await fetch(`${URL_API}/sitio`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(nuevo)
    });

    e.target.reset();
    cargarTodos();
});

// Borrar registro
async function eliminar(id) {
    await fetch(`${URL_API}/sitio`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ id: id }) // espera el id en el body
    });
    cargarTodos();
}

// pintar la lista
function renderizar(lista) {
    const contenedor = document.querySelector('.lista-sitios');
    contenedor.innerHTML = "";
    lista.forEach(s => {
        contenedor.innerHTML += `
            <article class="sitio-card">
                <h4>${s.nombre} (ID: ${s.id})</h4>
                <p><strong>Tipo:</strong> ${s.tipo} | <strong>Aforo:</strong> ${s.aforo}</p>
                <button onclick="eliminar(${s.id})" class="boton-rojo">Eliminar 🗑️</button>
            </article>
        `;
    });
}

cargarTodos();