//Saque de todos los datos guardados anteriromente -->
const nombreJugador = sessionStorage.getItem("nombreJugador")
const dificultad = sessionStorage.getItem("dificultad")
const nrDeColores = sessionStorage.getItem("colores")
const nrDeIntentos = sessionStorage.getItem("intentos")
const paletaDeColores = [];
const arrayNumerosAleatorios = [];
let numerosComparacion = [];

((colores) => {
    for (let i = 0; i < colores; i++) {
        paletaDeColores[i] = sessionStorage.getItem("color" + i)
    }
})(nrDeColores)

//Asignacion de datos en la web nombre del jugador y nivel de dificultad

document.querySelector('.nombreJugador').innerHTML = nombreJugador
document.querySelector('.nombreDificutad').innerHTML = `Level : ${dificultad}`

// aqui se crean los divs selectores con los colores seleccionados..

const creadorDeDivsInteractivos = (vueltas) => {
    for (let i = 0; i < vueltas; i++) {
        document.querySelector(".incorporacionDeDivsInteractivos").innerHTML += `
        <div class="col-12">
            <div class="row justify-content-center">
                <div id="divInteractivo${i}" class="col-11 divClickGetColorGame" onclick="selector(${i},contadorColumna,contadorFila)"></div>
            </div>
        </div>
        <div class="col-12 espaciadorPequenio"></div>`
    }
}

creadorDeDivsInteractivos(nrDeColores)

//con un bucle sacamos los colores guardados en sesion storage y los almacenamos en un array de colores

const asignarColoresDeLaPaleta = (color) => {
    for (let i = 0; i < color.length; i++) {
        document.getElementById(`divInteractivo${i}`).style.backgroundColor = color[i]
    }
}

asignarColoresDeLaPaleta(paletaDeColores)

/*creacion de los divs donde se completa el juego segun la dificultad (filas y columnas)
    el if de abajo representa el espaciado entre filas..
*/

const creadorDeDivsAsignados = (vueltas) => {
    for (let i = 0; i < vueltas; i++) {
        document.querySelector(".creadorDeDivsAsignados").innerHTML += `
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna${i}" class="col-11 divsColoresSelector">                                            
                                        </div>
                                    </div>
                                </div>`
        if ((i%4===3)) {
            document.querySelector(".creadorDeDivsAsignados").innerHTML += `
                                    <div class="col-12 espaciadorPequenio"></div>`
        }
    }
}

creadorDeDivsAsignados(nrDeIntentos * 4)

//formación aleatoria de Numeros

const numerosAleatorios = (num, colores) => {    
    for (let i = 0; i <= 3; i++) {
        arrayNumerosAleatorios[i] = colores[Math.floor(Math.random()*num)]
}
}

numerosAleatorios(nrDeColores, paletaDeColores)

                // PROGRAMACIÓN ORIENTADA A OBJTOS
//ContadorColumna es el numero que representa el div por el cual se va rellenando segun elije los colores.

class ContadorColumna {
    valor = 0;
    constructor() {
        this.valor = 0
    }
    suma() {
        this.valor++;
    }
    resta() {
        this.valor--;
    }
}

//ContadorFila es un contador de cada fila, se utiliza sobre todo  para saltos de una fila a otra

class ContadorFila {
    min = 0;
    max = 4;
    constructor() {
        this.min = 0;
        this.max = 4;
    }
    suma1() {
        this.min = this.min + 4
    }
    suma2() {
        this.max = this.max + 4
    }
}

//SelectorColumnaComprobacion son los numeros asignados a cada div, y en cada vuelta se van sumando +4
// se utilizan en la parte de comprobación en los bucles "for"

class SelectorDeColumnaComprobacion {
    colUno = 0;
    colDos = 1;
    colTres = 2;
    colCuatro = 3;
    constructor() {
        this.colUno = 0
        this.colDos = 1
        this.colTres = 2
        this.colCuatro = 3
    }
    suma1() {
        this.colUno = this.colUno + 4;
    }
    suma2() {
        this.colDos = this.colDos + 4;
    }
    suma3() {
        this.colTres = this.colTres + 4;
    }
    suma4() {
        this.colCuatro = this.colCuatro + 4;
    }
}

//PosicionArray se utiliza en asignar o borrar los colores de las filas

class PosicionArray {
    posicion = 0;
    constructor() {
        this.posicion = 0
    }
    suma() {
        this.posicion++
    }
    resta() {
        this.posicion--
    }
    reinicio() {
        this.posicion = 0
    }
}

//se asignan todas las clases a una variable.

const contadorColumna = new ContadorColumna()
const contadorFila = new ContadorFila()
const selectorDeColumna = new SelectorDeColumnaComprobacion()
const posicionArr = new PosicionArray()

//Aqui se asigna el color seleccionado en los divs selectores con el color corespondiente

const selector = (num, numContador, fila) => {
    if ((numContador.valor >= 0) && (numContador.valor < fila.max)) {
        ejecucion(num, numContador.valor, fila.max)
        contadorColumna.suma()
        posicionArr.suma()
    }
}

//Aqui se borra los colores asignados de uno en uno

const borrar = (numContador) => {
    if ((numContador.valor >= 1) && (numContador.valor > contadorFila.min)) {
        nr = 'numeroOculto'
        contadorColumna.resta()
        posicionArr.resta()
        ejecucion(nr, numContador.valor, contadorFila.max)
    }
}

//Aqui se ejecutan las 2 funciones de antes asignadas , segun se interactua con una o con otra

const ejecucion = (num, valor, fila) => {
    if ((numerosComparacion.length <= fila) || (num == 'numeroOculto')) {
        const columna = document.getElementById(`columna${valor}`)
        if (num >= 0) {
            columna.style.background = paletaDeColores[num]
            numerosComparacion[posicionArr.posicion] = paletaDeColores[num]
        }
        else if (num == 'numeroOculto') {
            columna.style.background = '#ffffff00'
            columna.style.borderWidth = `${1}px`
            columna.style.borderColor = `#ffffff`
            numerosComparacion[posicionArr.posicion]=''
        }
    }
}

/* La parte mas Dificil la comprobación de los 2 arrays segun filas 
    esta echo unpoco mas complicado de lo que podria estar
    tiene la comparación de 2 arrays ( array1 "seleccion del jugador" y array2 "colores generados automaticamente")
*/

const verificacion = (array1, array2, column) => {
    if ((array1.length === 4) && (array1[0] != '')) {
        for (let i = 0; i <= array2.length; i++) {

            //primero se comprueba si no son iguales, si son iguales se pasa al else que es ganado
            //seguramente haya una forma mas facil de hacerlo

            if (array1[i] != array2[i]) {

                //aqui compruebo cada "i" para asignar el color si se encuentra en la array
                // ya que anteriormente se ha comprobado que las posiciones no coinciden

                if ((i == 0)) {
                    const columna = document.getElementById(`columna${column.colUno}`)
                    columna.style.borderWidth = `${4}px`
                    columna.style.borderColor = `#ffff00`
                }
                else if (i == 1) {
                    const columna = document.getElementById(`columna${column.colDos}`)
                    columna.style.borderWidth = `${4}px`
                    columna.style.borderColor = `#ffff00`
                }
                else if (i == 2) {
                    const columna = document.getElementById(`columna${column.colTres}`)
                    columna.style.borderWidth = `${4}px`
                    columna.style.borderColor = `#ffff00`
                }
                else if (i == 3) {
                    const columna = document.getElementById(`columna${column.colCuatro}`)
                    columna.style.borderWidth = `${4}px`
                    columna.style.borderColor = `#ffff00`
                }

                //Si no se encuentra en la array se marcan en rojo

                if (((array1[i] != array2[0]) && (array1[i] != array2[1])) && ((array1[i] != array2[2]) && (array1[i] != array2[3]))) {
                    if (i == 0) {
                        const columna = document.getElementById(`columna${column.colUno}`)
                        columna.style.borderWidth = `${5}px`
                        columna.style.borderColor = `#970f0f`
                    }
                    if (i == 1) {
                        const columna = document.getElementById(`columna${column.colDos}`)
                        columna.style.borderWidth = `${5}px`
                        columna.style.borderColor = `#970f0f`
                    }
                    if (i == 2) {
                        const columna = document.getElementById(`columna${column.colTres}`)
                        columna.style.borderWidth = `${5}px`
                        columna.style.borderColor = `#970f0f`
                    }
                    if (i == 3) {
                        const columna = document.getElementById(`columna${column.colCuatro}`)
                        columna.style.borderWidth = `${5}px`
                        columna.style.borderColor = `#970f0f`
                    }
                }
            } else {

                //primero se comprueba si las 2 arrays coinciden las posiciones

                if (array1[0] === array2[0]) {
                    const columna = document.getElementById(`columna${column.colUno}`)
                    columna.style.borderWidth = `${6}px`
                    columna.style.borderColor = `#44ff00`
                }
                if (array1[1] === array2[1]) {
                    const columna = document.getElementById(`columna${column.colDos}`)
                    columna.style.borderWidth = `${6}px`
                    columna.style.borderColor = `#44ff00`
                }
                if (array1[2] === array2[2]) {
                    const columna = document.getElementById(`columna${column.colTres}`)
                    columna.style.borderWidth = `${6}px`
                    columna.style.borderColor = `#44ff00`
                }
                if (array1[3] === array2[3]) {
                    const columna = document.getElementById(`columna${column.colCuatro}`)
                    columna.style.borderWidth = `${6}px`
                    columna.style.borderColor = `#44ff00`
                }

                // si todo coincide has ganado

                if (((array1[0] === array2[0]) && (array1[1] === array2[1])) && ((array1[2] === array2[2]) && (array1[3] === array2[3]))) {
                    window.location.href = "ganador.html"
                    sessionStorage.setItem("ganador","HAS GANADO")
                }else{
                    perdido(array1,array2)
                }
            }
        }

        //Como es la parte de comprobacion tiene que pasar a la siguente fila, sumando filas, reiniciando la posicion de la array
        // , sumando las columnas y reseteando la array de seleccion.
        contadorFila.suma1()
        contadorFila.suma2()
        posicionArr.reinicio()
        selectorDeColumna.suma1()
        selectorDeColumna.suma2()
        selectorDeColumna.suma3()
        selectorDeColumna.suma4()
        numerosComparacion[posicionArr.posicion]=''
    }

    //en caso de que no se elija un color se mande un console.log (para no poner un alert!!!!)
    else {
        console.log('por favor rellene los colores')
    }
}

    // en caso de no haber adivinado todos los colores pierdes, lo tuve que hacer de tal manera que si en la ultima casilla adivinas que te pase ganador

const perdido = (array1,array2) =>{
if((contadorColumna.valor===nrDeIntentos*4)&&((array1[0]!=array2[0])||(array1[1]!=array2[1])||(array1[2]!=array2[2])||(array1[3]!=array2[3]))){
        sessionStorage.setItem("ganador","Has Perdido")
        window.location.href = "ganador.html"
    }
}