
let saldoActual = parseFloat(localStorage.getItem('saldo_actual')) || 0;
const listaContactos = document.getElementById('listaContactos');

function renderizarContacto(nombre, cuenta, banco) { // Renderiza un contacto en la lista de contactos 
    const nuevoItem = document.createElement('div'); // Crea un nuevo elemento div
    nuevoItem.className = "list-group-item py-3"; // Asigna una clase a la lista de contactos
    nuevoItem.innerHTML = ` 
        <div class="d-flex w-100 justify-content-between align-items-center">
            <div>
                <p class="mb-0 fw-bold">${nombre}</p>
                <small class="text-muted">Cuenta: ${cuenta}, Banco: ${banco}</small>
            </div>
            <input class="form-check-input" type="radio" name="contacto" value="${nombre}">
        </div>
    `;
    listaContactos.appendChild(nuevoItem); // Agrega el nuevo contacto a la lista de contactos. En resumen crea un div con el nombre, cuenta y banco del contacto y lo agrega a la lista de contactos en el html
}

document.getElementById('btnGuardarContacto').addEventListener('click', () => {
    const nombre = document.getElementById('nombreContacto').value;
    const cuenta = document.getElementById('numeroCuenta').value;
    const banco = document.getElementById('bancoContacto').value;

    if (nombre && cuenta) {
        renderizarContacto(nombre, cuenta, banco);
        const modal = bootstrap.Modal.getInstance(document.getElementById('agregarContactoModal'));
        modal.hide();
        document.getElementById('formNuevoContacto').reset();
    } else {
        alert("Por favor completa los campos obligatorios.");
    }
});

function mostrarError(mensaje) {
    const notificacion = document.getElementById('mensaje_feedback');
    notificacion.style.color = "red";
    notificacion.textContent = mensaje;
}

function mostrarExito(monto, nombreContacto) {
    const notificacion = document.getElementById('mensaje_feedback');
    notificacion.style.color = "green";
    notificacion.textContent = `¡Envío exitoso de $${monto.toLocaleString('es-CL')} a ${nombreContacto}!`;

    document.getElementById('montoTransferencia').value = "";
    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1500);
}

function actualizarSaldo(monto) {
    saldoActual -= monto;
    localStorage.setItem('saldo_actual', saldoActual);
}

document.getElementById('btnRealizarTransferencia').addEventListener('click', () => {
    const monto = parseFloat(document.getElementById('montoTransferencia').value);
    const contactoSeleccionado = document.querySelector('input[name="contacto"]:checked');

    if (!contactoSeleccionado) {
        mostrarError("Error: Debes seleccionar un contacto.");
        return;
    }

    if (isNaN(monto) || monto <= 0) {
        mostrarError("Error: Ingresa un monto válido mayor a 0.");
        return;
    }

    if (monto > saldoActual) {
        mostrarError(`Error: Saldo insuficiente. Tienes $${saldoActual.toLocaleString('es-CL')}`);
        return;
    }
    actualizarSaldo(monto);
    mostrarExito(monto, contactoSeleccionado.value);
});

// Implementa funciones para la creación de elementos en el DOM en tiempo real y la persistencia de datos mediante localStorage.
// Implementa validaciones para asegurar que el monto sea numérico y positivo.
// Implementa una funcionalidad para actualizar el saldo actual y mostrar un mensaje de éxito o error.