const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alert("hola");
  let clave = prompt("Contraseña: ");
  if (clave === "JLgg1103") {
    return 0;
  } else {
    btn.removeAttribute("href")
    alert("Lo siento, de momento no puedes ver esto");
  }
});
