const colorUno=document.getElementById("colorUno")
const colorDos=document.getElementById("colorDos")
const colorTres=document.getElementById("colorTres")
const colorCuatro=document.getElementById("colorCuatro")
const colorSeleccionadoUno=document.getElementById("colorSeleccionadoUno")
const colorSeleccionadoDos=document.getElementById("colorSeleccionadoDos")
const colorSeleccionadoTres=document.getElementById("colorSeleccionadoTres")
const colorSeleccionadoCuatro=document.getElementById("colorSeleccionadoCuatro")
colorSeleccionadoUno.style.background=colorUno.value
colorSeleccionadoDos.style.background=colorDos.value
colorSeleccionadoTres.style.background=colorTres.value
colorSeleccionadoCuatro.style.background=colorCuatro.value

    

colorUno.addEventListener('input',()=>{
    colorSeleccionadoUno.style.background=colorUno.value
})
colorDos.addEventListener('input',()=>{
    colorSeleccionadoDos.style.background=colorDos.value
})
colorTres.addEventListener('input',()=>{
    colorSeleccionadoTres.style.background=colorTres.value
})
colorCuatro.addEventListener('input',()=>{
    colorSeleccionadoCuatro.style.background=colorCuatro.value
})
