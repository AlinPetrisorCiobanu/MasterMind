    //Guardado de nombre del jugador y dificultad del juego.
const selectorDeDificultad = (colores,intentos,numeroColumna) =>{
    const nombreJgador = document.getElementById("inputName").value
        sessionStorage.setItem("nombreJugador",nombreJgador)
        sessionStorage.setItem("colores",colores)
        sessionStorage.setItem("intentos",intentos)
        sessionStorage.setItem("numColumna",numeroColumna)
}
/* para utilizar despues
     let coloresGuardados=sessionStorage.getItem("colores")
    let intentosGuardados=sessionStorage.getItem("intentos")
    let nombreGuardados=sessionStorage.getItem("nombreJugador")

*/