    /*  
        Guardado de nombre del jugador , cantidad de colores,  dificultad del juego y
        el numero de columnas que es diferente dependiendo de cantidad de colores y el
        nombre de la dificultad
    */
    
const selectorDeDificultad = (colores,intentos,numeroColumna,dificultad) =>{
    const nombreJgador = document.getElementById("inputName").value
    
        sessionStorage.setItem("nombreJugador",nombreJgador)
        sessionStorage.setItem("colores",colores)
        sessionStorage.setItem("intentos",intentos)
        sessionStorage.setItem("numColumna",numeroColumna)
        sessionStorage.setItem("dificultad",dificultad)
        if(nombreJgador.length>1){
            window.location.href = "selectorDeColores.html"
        }else{
            alert('introduce un nombre')
        }
}

