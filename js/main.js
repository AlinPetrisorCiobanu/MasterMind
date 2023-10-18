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
                                        <div id="columna${i}" class="col-11 divsColoresSelector">                                            
                                        </div>
                                    </div>
                                </div>` 
                                if((i==3)||(i==7)||(i==11)||(i==15)||(i==19)||(i==23)||(i==27)||(i==31)||(i==35)){
                                    document.querySelector(".creadorDeDivsAsignados").innerHTML +=`
                                    <div class="col-12 espaciadorPequenio"></div>`
                                }       
    } 
    
}
creadorDeDivsAsignados(nrDeIntentos*4)
        //formación aleatoria de Numeros
const arrayNumerosAleatorios=[];
const numerosAleatorios=(num)=>{
    for(let i=0;i<=3;i++){
        arrayNumerosAleatorios.push(Math.floor(Math.random()*num))
    }
    //console.log(arrayNumerosAleatorios)
}
numerosAleatorios(nrDeColores)



let c=0;
const numerosComparacion=[]
    const selector=(num)=>{
           const columna = document.getElementById(`columna${c}`)
           columna.style.background=paletaDeColores[num]
           numerosComparacion.push(num)
            c++;                       
                }  

                const verificacion=()=>{
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