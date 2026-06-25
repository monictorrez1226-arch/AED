function calcular(){

let cantidad = Number(document.getElementById("cantidad").value);

if(cantidad<=0){

document.getElementById("resultado").innerHTML="Ingresa una cantidad.";

return;

}

let total = cantidad*12*20;

document.getElementById("resultado").innerHTML=

"Si aportas aproximadamente $" +

total.toLocaleString() +

" durante 20 años (sin considerar rendimientos), habrás acumulado esa cantidad.";

}