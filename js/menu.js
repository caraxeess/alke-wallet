document.addEventListener('DOMContentLoaded', function () {


    const saldoElement = document.getElementById('saldo_actual');
    let saldoActual = localStorage.getItem('saldo_actual');

    // Inicializar saldo si es la primera vez
    if (saldoActual === null) {
        saldoActual = 0;
        localStorage.setItem('saldo_actual', saldoActual);
    }

    // Mostrar el saldo en pantalla
    if (saldoElement) {
        saldoElement.textContent = `$${parseInt(saldoActual).toLocaleString('es-CL')}`;
    }


    function configurarNavegacion(elementId, mensaje, urlDestino) {
        const element = document.getElementById(elementId);
        if (element) {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                alert(mensaje);
                window.location.href = urlDestino;
            });
        }
    }

    configurarNavegacion(
        'btnDepositar',
        'Redirigiendo a Deposit',
        'deposit.html'
    );

    configurarNavegacion(
        'btnEnviar',
        'Redirigiendo a Enviar Dinero',
        'sendmoney.html'
    );


    configurarNavegacion(
        'btnMovimientos',
        'Redirigiendo a Últimos Movimientos',
        'transactions.html'
    );

});

// Se gestiona la persistencia del saldo con localStorage para que no se pierda al recargar la página
// Se configura la navegación con los botones del menú con eventos para los botones

