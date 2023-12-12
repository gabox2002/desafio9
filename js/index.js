/* 1.
    var personaje = window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

    var titulo = document.querySelector('h1 span');
    titulo.textContent = personaje;

    console.log("Personaje seleccionado:", personaje);*/
    
// 6. Definir comportamiento del punto 1 con una funcion que usa prompt
function presentarPersonaje() {
    var personaje = window.prompt(
        "¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)"
    );
    
    var titulo = document.querySelector("h1 span");
    titulo.textContent = personaje;

    console.log("Personaje seleccionado:", personaje);

    // Bonus1. Obtener el último elemento presentado y ocultarlo
    var ultimoPresentado = document.querySelector("#cajas > div[title='Presentado']");
    if (ultimoPresentado) {
        ultimoPresentado.removeAttribute("title");
        ultimoPresentado.style.display = "none";
    }

    // 2.Identificar el nuevo personaje y mostrarlo
    var nombreCompleto = "";
    var elementoId = "";

    switch (personaje.toLowerCase()) {
        case "mario":
            nombreCompleto = "Mario";
            elementoId = "mario";
            break;
        case "luigi":
            nombreCompleto = "Luigi";
            elementoId = "luigi";
            break;
        case "bowser":
            nombreCompleto = "Bowser Morton Koopa";
            elementoId = "bowser";
            break;
        case "peach":
            nombreCompleto = "Princesa Peach Toadstool";
            elementoId = "peach";
            break;
        case "yoshi":
            nombreCompleto = "T. Yoshisaur Munchakoopas";
            elementoId = "yoshi";
            break;
        case "toad":
            nombreCompleto = "Toad";
            elementoId = "toad";
            break;
        case "toadette":
            nombreCompleto = "Toadette";
            elementoId = "toadette";
            break;
        case "daisy":
            nombreCompleto = "Princesa Daisy";
            elementoId = "daisy";
            break;
        default:
            nombreCompleto = "(desconocido)";
            break;
    }
    // 3. Establecer el atributo title con el valor "Presentado"
    if (elementoId !== "") {
        var personajeElemento = document.getElementById(elementoId);
        if (personajeElemento) {
            personajeElemento.title = "Presentado";
            console.log("El personaje se ha presentado:", nombreCompleto);
        } else {
            console.log("Error: No se encontró el elemento con ID", elementoId);
        }
    } else {
        console.log("Personaje desconocido. No se ha presentado nadie.");
    }

    titulo.textContent = nombreCompleto;

    /* 6. Ocultar boton
    document.getElementById("botonPresentar").style.display = "none";*/

    // Bonus1. Mantener mostrado el personaje anterior si el nombre no es válido
    if (nombreCompleto === "(desconocido)") {
        if (ultimoPresentado) {
            ultimoPresentado.title = "Presentado";
            ultimoPresentado.style.display = "block";
        }
    }
}
