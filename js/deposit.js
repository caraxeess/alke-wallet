let saldoActual = parseFloat(localStorage.getItem('saldo_actual')) || 0; // Obtiene el saldo actual del localStorage o 0 si no existe

const formulario = document.getElementById('form_deposito');
const campoMonto = document.getElementById('monto');
const notificacion = document.getElementById('mensaje_feedback');

function actualizarSaldo(monto) { // Actualiza el saldo actual
    saldoActual += monto;
    localStorage.setItem('saldo_actual', saldoActual);
}

function mostrarError(mensaje) { // Muestra un mensaje de error
    notificacion.style.color = "red";
    notificacion.textContent = mensaje;
}

function mostrarExito(monto) {
    notificacion.style.color = "green";
    notificacion.textContent = `¡Depósito exitoso de $${monto.toLocaleString('es-CL')}!`;

    campoMonto.value = "";
    setTimeout(() => {
        window.location.href = "menu.html";
    }, 1500);
}

formulario.addEventListener('submit', function (event) { // Evento submit del formulario
    event.preventDefault();

    const monto = parseFloat(campoMonto.value);

    if (isNaN(monto) || monto <= 0) {
        mostrarError("Error: El monto debe ser mayor a 0.");
        return;
    }

    actualizarSaldo(monto);
    mostrarExito(monto);
});

// Gestiona el estado financiero recuperando y actualizando el valor en localStorage.
// Implementa una validación para asegurar que el monto sea numérico y positivo