const total1 = document.getElementById("total");
const porcentaje = document.getElementById("por");
const totalCuenta= document.getElementById("totalC");
const propina= document.getElementById("prop");
const totalPagar= document.getElementById("pagar");
const boton = document.getElementById("calcular");
let contador =0

total1.addEventListener("click",()=>{
    total1.value= "";
    porcentaje.value="";
})


boton.addEventListener("click", ()=>{
    totalCuenta.innerHTML=("$ " + total1.value)
    propina.innerHTML= ("$ " + porcentajeCalculador (total1.value,porcentaje.value)[0])
    totalPagar.innerHTML= ("$ " + porcentajeCalculador (total1.value,porcentaje.value)[1])
})


function porcentajeCalculador(num1,num2){    
    let porcentaje = (num1*num2)/100        
    let total = parseFloat(num1)+(porcentaje)
    return [porcentaje,total]
}


