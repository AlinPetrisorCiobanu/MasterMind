    //Saque de todos los datos guardados anteriromente -->
const nombreJugador=sessionStorage.getItem("nombreJugador")
const dificultad=sessionStorage.getItem("dificultad")
const nrDeColores=sessionStorage.getItem("colores")
const nrDeIntentos=sessionStorage.getItem("intentos")
const paletaDeColores = [];
const sacarColores = (colores) => {
    for ( let i = 0 ; i<colores ; i++){
        paletaDeColores[i]=sessionStorage.getItem("color"+i)
    }
}
sacarColores(nrDeColores)
    //Asignacion de datos en la web
document.querySelector('.nombreJugador').innerHTML=nombreJugador
document.querySelector('.nombreDificutad').innerHTML=`Level : ${dificultad}`
const creadorDeDivsInteractivos = (vueltas) => {
    for( let i = 0 ; i < vueltas ; i++){
        document.querySelector(".incorporacionDeDivsInteractivos").innerHTML += `<div class="col-12">
                                                                            <div class="row justify-content-center">
                                                                                <div id="divInteractivo${i}" class="col-11 divClickGetColorGame" onclick="selector(${i})"></div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-12 espaciadorPequenio"></div>`        
    } 
}
creadorDeDivsInteractivos(nrDeColores)
const asignarColoresDeLaPaleta = (color) => {
    for ( let i = 0 ; i<color.length ; i++){
        document.getElementById(`divInteractivo${i}`).style.backgroundColor=color[i]   
    }
    
}
asignarColoresDeLaPaleta(paletaDeColores)
const creadorDeDivsAsignados = (vueltas) => {
    for( let i = 0 ; i < vueltas ; i++){
        document.querySelector(".creadorDeDivsAsignados").innerHTML += `
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna0" class="col-11 divsColoresSelector">                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna1" class="col-11 divsColoresSelector">                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna2" class="col-11 divsColoresSelector">                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6 col-lg-3 justify-content-center align-items-center">
                                    <div class="row justify-content-center">
                                        <div id="columna3" class="col-11 divsColoresSelector">                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 espaciadorMedio"></div>`        
    } 
    
}
creadorDeDivsAsignados(nrDeIntentos)



const selector=()=>{

}









/*
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

const selectorDeColores = () => {
    const coloresBloques = [colorUno.value, colorDos.value, colorTres.value, colorCuatro.value]

    let coloresNoRepetidos = true;
    if ((coloresNoRepetidos == true) && (coloresBloques[0] != coloresBloques[1]) && (coloresBloques[1] != coloresBloques[2]) && (coloresBloques[2] != coloresBloques[3])) {
        botonStart.style.opacity=100
    } else {
        coloresNoRepetidos = false;
        botonStart.style.opacity=0
    }


    colorSeleccionadoUno.style.background = colorUno.value
    colorSeleccionadoDos.style.background = colorDos.value
    colorSeleccionadoTres.style.background = colorTres.value
    colorSeleccionadoCuatro.style.background = colorCuatro.value

    
}
const goToGame=()=>{
    sessionStorage.setItem("colorJuegoUno",colorUno.value)
    sessionStorage.setItem("colorJuegoDos",colorDos.value)
    sessionStorage.setItem("colorJuegoTres",colorTres.value)
    sessionStorage.setItem("colorJuegoCuatro",colorCuatro.value)

}



// GAME

let arrayDeColores;
const playGame=()=>{
    document.getElementById("startDivGame").style.display="none"
}
    let juegoUno=sessionStorage.getItem("colorJuegoUno")
    let juegoDos=sessionStorage.getItem("colorJuegoDos")
    let juegoTres=sessionStorage.getItem("colorJuegoTres")
    let juegoCuatro=sessionStorage.getItem("colorJuegoCuatro")

    arrayDeColores=[juegoUno,juegoDos,juegoTres,juegoCuatro]

    // divInteractivoUno.style.background=juegoUno
    // divInteractivoDos.style.background=juegoDos
    // divInteractivoTres.style.background=juegoTres
    // divInteractivoCuatro.style.background=juegoCuatro

    


    //LOGICA JAVASCRIPT

    //formación aleatoria:

const arrayNumerosAleatorios=[];
    const numerosAleatorios=()=>{
        for(let i=0;i<4;i++){
            arrayNumerosAleatorios.push(Math.floor(Math.random()*3))
        }
        console.log(arrayNumerosAleatorios)
    }


let c=0;
const numerosComparacion=[]
    const selector=(num)=>{
       
               
                    const columna = document.getElementById("columna"+c)            
                        if(columna.id=='columna0'){
                             numerosAleatorios()
                            columna.style.background=arrayDeColores[num]
                            numerosComparacion.push(num)
                            c++
                        }else if(columna.id=='columna1'){
                            columna.style.background=arrayDeColores[num]
                            numerosComparacion.push(num)
                            c++
                        }
                        else if(columna.id=='columna2'){
                            columna.style.background=arrayDeColores[num]
                            numerosComparacion.push(num)
                            c++
                        }else if(columna.id=='columna3'){
                            columna.style.background=arrayDeColores[num]
                            numerosComparacion.push(num)
                            comparacion()
                            c++;
                        }
                        
                }    
        
    const comparacion=()=>{
       // for (let i=0;i<numerosComparacion.length;i++){
            if(numerosComparacion[0]==arrayNumerosAleatorios[0]){
                if(numerosComparacion[1]==arrayNumerosAleatorios[1]){
                    if(numerosComparacion[2]==arrayNumerosAleatorios[2]){
                        if(numerosComparacion[3]==arrayNumerosAleatorios[3]){
                            alert('PEroooo que suerte')
                        }else{
                            alert('JODEEEEER')
                        }
                    }else{
                        alert('Faltaba muy poco')
                    }
                }else{
                    alert('casi')
                }
            }else{
                alert('muy lejos')
            }
      //  }
    }
    
    */