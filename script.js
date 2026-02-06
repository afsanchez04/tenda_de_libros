// Función que simula un proceso de registro
function registrarUsuario(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombre) {
        resolve(`Usuario ${nombre} registrado correctamente.`);
      } else {
        reject("El nombre de usuario es obligatorio.");
      }
    }, 1000);
  });
}

// Función que simula enviar un correo de bienvenida
function enviarCorreoBienvenida(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Correo de bienvenida enviado a ${nombre}.`);
    }, 1500);
  });
}

// Manejo del formulario
const form = document.getElementById("registroForm");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value;
  const password = document.getElementById("password").value;

  // Validación simple
  if (!usuario || !password) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    mensaje.style.color = "red";
    return;
  }

  // Encadenamiento de promesas
  registrarUsuario(usuario)
    .then(result => {
      mensaje.textContent = result;
      mensaje.style.color = "green";
      return enviarCorreoBienvenida(usuario);
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      mensaje.textContent = error;
      mensaje.style.color = "red";
    });
});
