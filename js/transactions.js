document.addEventListener("DOMContentLoaded", () => {
    // Capturamos los elementos una sola vez
    const btnTodos = document.getElementById("btnTodos");
    const btnIngresos = document.getElementById("btnIngresos");
    const btnGastos = document.getElementById("btnGastos");
    const movimientos = document.querySelectorAll("#contenedorMovimientos > div");

    // Función maestra de filtrado 
    function filtrarmovimientos(claseAFiltrar) {
        //Recorremos cada tarjeta de movimiento
        movimientos.forEach(function (elemento) {

            // Si es "todos" O el elemento tiene la clase que buscamos
            if (claseAFiltrar === "todos" || elemento.querySelector('.' + claseAFiltrar)) {
                // ...lo mostramos
                elemento.classList.remove("d-none");
                elemento.classList.add("d-flex");
            } else {
                // ...si no, lo ocultamos
                elemento.classList.remove("d-flex");
                elemento.classList.add("d-none");
            }
        });
    }

    // Eventos 
    btnTodos.addEventListener("click", function () {
        filtrarmovimientos("todos");
    });

    btnIngresos.addEventListener("click", function () {
        filtrarmovimientos("text-success");
    });

    btnGastos.addEventListener("click", function () {
        filtrarmovimientos("text-danger");
    });
});

// gestiona la visualización dinámica del historial mediante una función maestra de filtrado.
// Utiliza el método forEach para recorrer la colección de movimientos y aplica lógica condicional para comparar las clases de éxito (text-success) o gasto (text-danger) con la selección del usuario.
// Alterna entre las clases de Bootstrap d-none y d-flex para manipular la visibilidad de los elementos 
