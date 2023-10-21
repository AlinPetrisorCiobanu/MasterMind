//Saque de todos los datos guardados anteriromente -->
const nombreJugador = sessionStorage.getItem("nombreJugador")
const dificultad = sessionStorage.getItem("dificultad")
const nrDeColores = sessionStorage.getItem("colores")
const nrDeIntentos = sessionStorage.getItem("intentos")
const paletaDeColores = [];
const sacarColores = (colores) => {
    for (let i = 0; i < colores; i++) {
        paletaDeColores[i] = sessionStorage.getItem("color" + i)
    }
}
sacarColores(nrDeColores)
//Asignacion de datos en la web
document.querySelector('.nombreJugador').innerHTML = nombreJugador
document.querySelector('.nombreDificutad').innerHTML = `Level : ${dificultad}`
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
const asignarColoresDeLaPaleta = (color) => {
    for (let i = 0; i < color.length; i++) {
        document.getElementById(`divInteractivo${i}`).style.backgroundColor = color[i]
    }
}
asignarColoresDeLaPaleta(paletaDeColores)
const creadorDeDivsAsignados = (vueltas) => {
    for (let i = 0; i < vueltas; i++) {
        document.querySelector(".creadorDeDivsAsignados").innerHTML += `
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna${i}" class="col-11 divsColoresSelector">                                            
                                        </div>
                                    </div>
                                </div>`
        if ((i == 3) || (i == 7) || (i == 11) || (i == 15) || (i == 19) || (i == 23) || (i == 27) || (i == 31) || (i == 35)) {
            document.querySelector(".creadorDeDivsAsignados").innerHTML += `
                                    <div class="col-12 espaciadorPequenio"></div>`
        }
    }

}
const arrayNumerosAleatorios = [];
creadorDeDivsAsignados(nrDeIntentos * 4)
//formación aleatoria de Numeros

const numerosAleatorios = (num, colores) => {
  
    let numeros = [];
    for (let a = 0; a < num; a++) {
        numeros.push(a)
    }
    numeros = numeros.sort(function () { return Math.random() - 0.5 })
    for (let i = 0; i <= 3; i++) {
        arrayNumerosAleatorios[i] = colores[numeros[i]]
    }
}
numerosAleatorios(nrDeColores, paletaDeColores)

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

class ContadorFila { 
    min = 0;
    max =4;
    constructor(){
        this.min=0;
        this.max=4;
    }
    suma1(){
        this.min = this.min+4
    }
    suma2(){
        this.max = this.max+4
    }
}
class SelectorDeColumnaComprobacion {
    colUno = 0;
    colDos = 1;
    colTres = 2;
    colCuatro = 3;
    constructor(){
        this.colUno =0
        this.colDos =1
        this.colTres =2
        this.colCuatro =3
    }
    suma1(){
        this.colUno=this.colUno+4;       
    }
    suma2(){
        this.colDos=this.colDos+4;
    }
    suma3(){
        this.colTres=this.colTres+4;
    }
    suma4(){
        this.colCuatro=this.colCuatro+4;
    }
}

class PosicionArray {
    posicion = 0;
    constructor(){
        this.posicion=0
    }
    suma(){
        this.posicion++
    }
    resta(){
        this.posicion--
    }
    reinicio(){
        this.posicion=0
    }
}

let contadorColumna = new ContadorColumna()
let contadorFila = new ContadorFila()
let selectorDeColumna = new SelectorDeColumnaComprobacion()
let posicionArr = new PosicionArray()

console.log(selectorDeColumna)

let numerosComparacion = []

const selector = (num, numContador,fila) => {
    if ((numContador.valor >= 0) && (numContador.valor < fila.max)) {
        ejecucion(num, numContador.valor,fila.max)
        contadorColumna.suma()
        posicionArr.suma()
    }
}

const borrar = ( numContador) => {
    if ((numContador.valor >= 1)&&(numContador.valor>contadorFila.min)) {
        nr = 'numeroOculto'
        contadorColumna.resta()
        posicionArr.resta()
        ejecucion(nr, numContador.valor)
    }
}


const ejecucion = (num, valor,fila) => {
    if ((numerosComparacion.length < fila) || (num == 'numeroOculto')) {
        const columna = document.getElementById(`columna${valor}`)

        if (num >= 0) {
            columna.style.background = paletaDeColores[num]
            numerosComparacion[posicionArr.posicion]=paletaDeColores[num]
        }
        else if (num == 'numeroOculto') {
            columna.style.background = '#ffffff00'
            columna.style.borderWidth = `${1}px`
            columna.style.borderColor = `#ffffff`
            numerosComparacion[posicionArr.posicion]=''
        }
    }
}
const verificacion = (array1, array2,column) => {
    console.log(array1)
    console.log(array2)




    if (array1.length === 4) {

        for (let i = column.colUno; i <=column.colCuatro; i++) {
            if(((array1[0]!=array2[0])&&(array1[1]!=array2[1]))&&((array1[2]!=array2[2])&&(array1[3]!=array2[3]))){

                    if ((array1[1] === array2[0])||(array1[2] === array2[0])||(array1[3] === array2[0])) {
                        const columna = document.getElementById(`columna${i}`)
                        columna.style.borderWidth = `${4}px`
                        columna.style.borderColor = `#ffff00`
                    }

                    else if ((array1[0] === array2[1])||(array1[2] === array2[1])||(array1[3] === array2[1])) {
                        const columna = document.getElementById(`columna${i}`)
                        columna.style.borderWidth = `${4}px`
                        columna.style.borderColor = `#ffff00`
                    }

                    else if ((array1[0] === array2[2])||(array1[1] === array2[2])||(array1[3] === array2[2]))  {
                        const columna = document.getElementById(`columna${i}`)
                        columna.style.borderWidth = `${4}px`
                        columna.style.borderColor = `#ffff00`
                    }

                    else if ((array1[0] === array2[3])||(array1[1] === array2[3])||(array1[2] === array2[3]))  {
                        const columna = document.getElementById(`columna${i}`)
                        columna.style.borderWidth = `${4}px`
                        columna.style.borderColor = `#ffff00`
                    }else{
                        const columna = document.getElementById(`columna${i}`)
                        columna.style.borderWidth = `${5}px`
                        columna.style.borderColor = `#970f0f`
                    } 

                        
            }else{


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
                if (((array1[0] === array2[0]) && (array1[1] === array2[1])) && ((array1[2] === array2[2]) && (array1[3] === array2[3]))) {
                    console.log('perfecto')
                }


            }
           
            

            // else if(array1[i] != array2[i]){
                
            //     const columna = document.getElementById(`columna${i}`)
            //     columna.style.borderWidth = `${5}px`
            //     columna.style.borderColor = `#970f0f`
            // }
            
            // for( let i = 0 ; i<array1.length ; i++){
            //     numerosComparacion.pop()
            //     numerosComparacion.shift()
            // }
            }


    
    contadorFila.suma1()
    contadorFila.suma2()
    posicionArr.reinicio()
    selectorDeColumna.suma1()
    selectorDeColumna.suma2()
    selectorDeColumna.suma3()
    selectorDeColumna.suma4()

    }
    else {

        console.log('por favor rellene los colores')
    }
    
}