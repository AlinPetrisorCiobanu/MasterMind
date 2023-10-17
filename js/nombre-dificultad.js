    //Guardado de nombre del jugador , cantidad de colores,  dificultad del juego y
    // el numero de columnas que es diferente dependiendo de cantidad de colores.
    
const selectorDeDificultad = (colores,intentos,numeroColumna) =>{
    const nombreJgador = document.getElementById("inputName").value
        sessionStorage.setItem("nombreJugador",nombreJgador)
        sessionStorage.setItem("colores",colores)
        sessionStorage.setItem("intentos",intentos)
        sessionStorage.setItem("numColumna",numeroColumna)
}
