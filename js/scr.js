var i = 0, ri = 0, m = "",
total=1;
subtotal;
 var sumatotal = 0;
final;
function agregar(){
 i++;
    var tb = document.getElementById("data");
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;
    var optt = document.getElementById("optt").value;
    var kopk=cantidad*precio;
    var fila="<tr><td>"+i+"</td><td id='optt'>"+optt+"</td><td>"+precio+"</td><td>"+cantidad+"</td><td>"+kopk+"</td><td><a href='#' onclick='editar(this)'><img src='iconos/e.png'></td><td><a href='#' onclick='eliminar(this)'><img src='iconos/d.png'></td></tr>";
    var fil = document.createElement("tr");
    fil.innerHTML=fila;
    tb.appendChild(fil);
    

    sumatotal = parseInt(kopk+sumatotal);
    var sub = document.getElementById("subtotal").value;
    document.getElementById("subtotal").value = sumatotal; 
    total=sumatotal*0.18;
    document.getElementById("igv").value=total;
    final=sumatotal+total;
    document.getElementById("total").value=final;

    




    mensaje("Registro guardado correctamente");
    limpiar();
    
}
function eliminar(p){
  
    var opcion = confirm("¿Desea Eliminar...?");
    if (opcion == true) {
        var i = p.parentNode.parentNode.rowIndex;
        document.getElementById("data").deleteRow(i);
        mensaje("Registro Eliminado correctamente...!");        
    } else {
        mensaje("Registro no se eliminó...!");     
    }
}
function editar(p){
ri = p.parentNode.parentNode.rowIndex;

document.getElementById("optt").value = document.getElementById("data").rows[ri].cells[1].innerText;
document.getElementById("precio").value = document.getElementById("data").rows[ri].cells[2].innerText;
document.getElementById("cantidad").value = document.getElementById("data").rows[ri].cells[3].innerText;

}
function modificar()
{   var opcion = confirm("¿Desea Modificar...?");
    if (opcion == true) {
        data.rows[ri].cells[1].innerHTML = document.getElementById("producto").value;
        data.rows[ri].cells[2].innerHTML = document.getElementById("precio").value;
        data.rows[ri].cells[3].innerHTML = document.getElementById("cantidad").value;
        data.rows[ri].cells[4].innerHTML = document.getElementById("optt").value;

        mensaje("Registro Modificado Correctamente...!");
    } else {
        mensaje("Registro no se Modificó...!");               
    }
      
    limpiar(); 
 }  

function limpiar(){
    document.getElementById("precio").value = " ";
    document.getElementById("cantidad").value = " ";
    document.getElementById("optt").value = " ";
}


