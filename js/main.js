const colorUno=document.querySelector("#colorUno")
const colorDos=document.querySelector("#colorDos")
const colorTres=document.querySelector("#colorTres")
const colorCuatro=document.querySelector("#colorCuatro")
const colorSeleccionadoUno=document.querySelector("#colorSeleccionadoUno")
const colorSeleccionadoDos=document.querySelector("#colorSeleccionadoDos")
const colorSeleccionadoTres=document.querySelector("#colorSeleccionadoTres")
const colorSeleccionadoCuatro=document.querySelector("#colorSeleccionadoCuatro")



coloresBloques=[localStorage.getItem(colorUno),localStorage.getItem(colorDos),localStorage.getItem(colorTres),localStorage.getItem(colorCuatro)]  
console.log(coloresBloques)


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
