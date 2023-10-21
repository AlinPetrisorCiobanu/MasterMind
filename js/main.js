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
        document.querySelector(".incorporacionDeDivsInteractivos").innerHTML += `<div class="col-12">
                                                                            <div class="row justify-content-center">
                                                                                <div id="divInteractivo${i}" class="col-11 divClickGetColorGame" onclick="selector(${i},contador)"></div>
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

const numerosAleatorios = (num,colores) => {
    /*
    var lista = [1,2,3,4,5,6,7,8,9];
lista = lista.sort(function() {return Math.random() - 0.5});
document.write(lista)
    */ 
   let numeros = [];
   for( let a = 0; a<num ; a++){
        numeros.push(a)
   }
    numeros = numeros.sort(function() {return Math.random() - 0.5})
    for (let i = 0; i <= 3; i++) {
        arrayNumerosAleatorios[i]=colores[numeros[i]]
    }
}
numerosAleatorios(nrDeColores,paletaDeColores)

class Contador {
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
let contador = new Contador()

const numerosComparacion = []

const selector = (num, numContador) => {
    if ((numContador.valor >= 0) && (numContador.valor <= 3)) {
        ejecucion(num, numContador.valor)
        contador.suma()
    }
}

const borrar = (nr, numContador) => {
    if ((numContador.valor >= 1)) {
        nr = 'numeroOculto'
        contador.resta()
        ejecucion(nr, numContador.valor)

    }
}


const ejecucion = (num, valor) => {
    if ((numerosComparacion.length < 4) || (num == 'numeroOculto')) {
        const columna = document.getElementById(`columna${valor}`)

        if (num >= 0) {
            columna.style.background = paletaDeColores[num]
            numerosComparacion.push(paletaDeColores[num])
        }
        else if (num == 'numeroOculto') {
            columna.style.background = '#ffffff00'
            numerosComparacion.pop()
        }
    }
}
const verificacion = (array1, array2) => {
    console.log(array1)
    console.log(array2)

    if(array1.length===4){
            if (array1[0]===array2[0]){
                console.log('la primera esta bien')
            }
            if (array1[1]===array2[1]){
                console.log('la segunda esta bien')
            }
            if (array1[2]===array2[2]){
                console.log('la tercera esta bien')
            }
            if (array1[3]===array2[3]){
                console.log('la cuarta esta bien')
            }
            if(((array1[0]===array2[0])&&(array1[1]===array2[1]))&&((array1[2]===array2[2])&&(array1[3]===array2[3]))){
                console.log('perfecto')
            }
        }

    else{
        console.log('por favor rellene los colores')
    }
                   

}