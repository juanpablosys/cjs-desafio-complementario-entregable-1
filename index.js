let cantidadDeRepeticiones = prompt("Por favor ingrese la cantidad de veces que desea concatenar la palabra ISLA");
if (cantidadDeRepeticiones == 0)
    {
        alert("Resultado vacio , ya que ingreso el numero cero");
}
else {
    let resultado = "";// Aesta variable tuve que asignarle un valor ya que en el inspector del browser me daba error unavailable
    for (let i = 0; i < cantidadDeRepeticiones; i++) {
       resultado = resultado + "ISLA";
    }   
    alert(resultado)
    }