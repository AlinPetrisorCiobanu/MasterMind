const ganador = sessionStorage.getItem("ganador")
const nombreJugador = sessionStorage.getItem("nombreJugador")

document.querySelector('#imprime').innerHTML =`${nombreJugador.toUpperCase()} ${ganador}`



document.querySelector('.textoInfo').innerHTML =`Felicidades Don/Doña ${nombreJugador}`

