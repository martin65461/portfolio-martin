const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const tema = document.querySelector(".tema");
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        // Botón C (Borrar todo)
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Botón Borrar (Flecha o borrar un solo carácter)
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Botón Igual (Calcular resultado)
        if (boton.id === "igual") {
            try {
                // eval() procesa el string como una operación matemática
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Lógica para escribir números y operadores
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});

document.addEventListener("keydown", (e) => {

    const tecla = e.key;

    // Números y operadores
    if (
        (tecla >= "0" && tecla <= "9") ||
        tecla === "+" ||
        tecla === "-" ||
        tecla === "*" ||
        tecla === "/" ||
        tecla === "."
    ) {
     if (pantalla.textContent === "0") {
    pantalla.textContent = tecla;
} else {
    pantalla.textContent += tecla;
}
    }

    // Enter = resultado
    if (tecla === "Enter") {
        try {
            pantalla.textContent = eval(pantalla.textContent);
        } catch {
            pantalla.textContent = "Error";
        }
    }

    // Backspace = borrar último carácter
    if (tecla === "Backspace") {
        pantalla.textContent = pantalla.textContent.slice(0, -1);

        if (pantalla.textContent === "") {
            pantalla.textContent = "0";
        }
    }

    // Delete = borrar todo
    if (tecla === "Delete") {
        pantalla.textContent = "0";
    }
});
tema.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
});