const numeroDeColores=sessionStorage.getItem("colores")
const numeroDeColumnas=sessionStorage.getItem("numColumna")
const arrayDeColor=['#f30505','#0000ff','#008000','#ffff00','#00FFFF','#FF10E6'];
const creacionDeInputs = (nrColores,nrColumnas,color) =>{
    for( let i = 0 ; i < nrColores ; i++){
        document.querySelector("#incorporacionDeInputs").innerHTML += `<div class="col-6 col-lg-${nrColumnas}">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 espaciadorPequenio"></div>
            <div class="col-8">
                <input id="colorUno" type="color" class="anchoCompleto" value="${color[i]}">
            </div>
        </div>`
    }   
    
}
creacionDeInputs(numeroDeColores,numeroDeColumnas,arrayDeColor)