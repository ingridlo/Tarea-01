const total1 = document.getElementById("total");
const porcentaje = document.getElementById("por");
const totalCuenta= document.getElementById("totalC");
const propina= document.getElementById("prop");
const totalPagar= document.getElementById("pagar");
const boton = document.getElementById("calcular");
const form = document.getElementById("form")
let contador =0


form.addEventListener("submit",(e)=>{
    e.preventDefault()    
    totalCuenta.innerHTML=("$ " + total1.value)
    propina.innerHTML= ("$ " + porcentajeCalculador (total1.value,porcentaje.value)[0])
    totalPagar.innerHTML= ("$ " + porcentajeCalculador (total1.value,porcentaje.value)[1])
    borrar()   
})


function borrar() {
    form.reset()
}

total1.addEventListener("click",()=>{    
    totalCuenta.innerHTML='';
    propina.innerHTML='';
    totalPagar.innerHTML='';
})

function porcentajeCalculador(num1,num2){    
    let porcentaje = (num1*num2)/100        
    let total = parseFloat(num1)+(porcentaje)
    return [porcentaje,total]
}


