// Array para almacenar los nombres de los amigos
let listaAmigos = [];


function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (!listaAmigos.includes(nombre)) {
        listaAmigos.push(nombre);
        actualizarLista();
        input.value = ""; 
    } else {
        alert("Ese nombre ya está en la lista.");
    }
}


function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // 

    listaAmigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}


function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Agregue al menos un amigo antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
