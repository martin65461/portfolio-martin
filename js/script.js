const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const boton = document.querySelector(".btn-enviar");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");

const mensajeError = document.querySelector("#mensaje-error");

boton.addEventListener("click", () => {

    if (
        nombre.value.trim() === "" ||
        email.value.trim() === "" ||
        asunto.value.trim() === "" ||
        mensaje.value.trim() === ""
    ) {

        mensajeError.style.color = "#ff1a1a";
        mensajeError.textContent = "❌ Completá todos los campos.";

        return;
    }

    const templateParams = {

        name: nombre.value,
        email: email.value,
        title: asunto.value,
        message: mensaje.value

    };

    emailjs.send(
        "service_twxqkc6",
        "template_tduu14h",
        templateParams
    )

    .then(() => {

        mensajeError.style.color = "#00ff66";
        mensajeError.textContent = "✅ ¡Mensaje enviado correctamente!";

        nombre.value = "";
        email.value = "";
        asunto.value = "";
        mensaje.value = "";

        setTimeout(() => {

            mensajeError.textContent = "";

        }, 3000);

    })

    .catch((error) => {

        console.error(error);

        mensajeError.style.color = "#ff1a1a";
        mensajeError.textContent = "❌ Error al enviar el mensaje.";

    });

});


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (window.scrollY + 300 >= sectionTop) {

            current = section.id;

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});