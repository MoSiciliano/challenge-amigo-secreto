let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombreAmigo = input.value;
  if (nombreAmigo) {
    amigos.push(nombreAmigo);
    input.value = "";
    mostrarAmigos();
  } else {
    console.log("Error. Ingrese un nombre.");
  }
}

function mostrarAmigos(params) {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let amigo of amigos) {
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  }
}
function sortearAmigo() {
  let resultadoSorteado = document.getElementById("resultado");
  resultadoSorteado.innerHTML = "";

  if (amigos === 0) {
    let li = document.createElement("li");
    li.textContent = "No hay amigos para sortear.";
    resultadoSorteado.appendChild(li);
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  let li = document.createElement("li");
  li.textContent = `El amigo sorteado es: ${amigoSorteado}🎊`;
  resultadoSorteado.appendChild(li);
}
