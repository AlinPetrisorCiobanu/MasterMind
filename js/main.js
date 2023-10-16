const colorUno = document.querySelector("#colorUno")
const colorDos = document.querySelector("#colorDos")
const colorTres = document.querySelector("#colorTres")
const colorCuatro = document.querySelector("#colorCuatro")
const botonStart = document.querySelector("#botonStartSelectorDeColores")
const colorSeleccionadoUno = document.querySelector("#colorSeleccionadoUno")
const colorSeleccionadoDos = document.querySelector("#colorSeleccionadoDos")
const colorSeleccionadoTres = document.querySelector("#colorSeleccionadoTres")
const colorSeleccionadoCuatro = document.querySelector("#colorSeleccionadoCuatro")
const divInteractivoUno = document.querySelector("#divInteractivoUno")
const divInteractivoDos = document.querySelector("#divInteractivoDos")
const divInteractivoTres = document.querySelector("#divInteractivoTres")
const divInteractivoCuatro = document.querySelector("#divInteractivoCuatro")

const play = () => {
    //const coloresBloques = [colorUno.value, colorDos.value, colorTres.value, colorCuatro.value]

    // let coloresNoRepetidos = true;
    // if ((coloresNoRepetidos == true) && (coloresBloques[0] != coloresBloques[1]) && (coloresBloques[1] != coloresBloques[2]) && (coloresBloques[2] != coloresBloques[3])) {
    //     botonStart.style.opacity=100
    // } else {
    //     coloresNoRepetidos = false;
    //     botonStart.style.opacity=0
    // }


    colorSeleccionadoUno.style.background = colorUno.value
    colorSeleccionadoDos.style.background = colorDos.value
    colorSeleccionadoTres.style.background = colorTres.value
    colorSeleccionadoCuatro.style.background = colorCuatro.value

    colorUno.addEventListener('input', () => {
        colorSeleccionadoUno.style.background = colorUno.value
    })
    colorDos.addEventListener('input', () => {
        colorSeleccionadoDos.style.background = colorDos.value
    })
    colorTres.addEventListener('input', () => {
        colorSeleccionadoTres.style.background = colorTres.value
    })
    colorCuatro.addEventListener('input', () => {
        colorSeleccionadoCuatro.style.background = colorCuatro.value
    })
    
}
const goToGame=()=>{
    sessionStorage.setItem("colorJuegoUno",colorUno.value)
    sessionStorage.setItem("colorJuegoDos",colorDos.value)
    sessionStorage.setItem("colorJuegoTres",colorTres.value)
    sessionStorage.setItem("colorJuegoCuatro",colorCuatro.value)

}

// GAME


const playGame=()=>{
    document.getElementById("startDivGame").style.display="none"

    let juegoUno=sessionStorage.getItem("colorJuegoUno")
    let juegoDos=sessionStorage.getItem("colorJuegoDos")
    let juegoTres=sessionStorage.getItem("colorJuegoTres")
    let juegoCuatro=sessionStorage.getItem("colorJuegoCuatro")

    divInteractivoUno.style.background=juegoUno
    divInteractivoDos.style.background=juegoDos
    divInteractivoTres.style.background=juegoTres
    divInteractivoCuatro.style.background=juegoCuatro
}

