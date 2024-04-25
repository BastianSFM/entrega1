//funcion para realizar una consulta del musico o comediante que quiere hacer el evento
function consultaMusico(){
    var nombreMusico = document.getElementById("txt_nombreMusico").value;
    var fechaEvento = document.getElementById("txt_fechaEvento").value;
    var ciudad = document.getElementById("txt_ciudad").value;

    var musico_comediante = document.getElementById("cnt_nombre_musico");
    musico_comediante.innerHTML = "se ha ingresado la solicitud del musico/comediante: "+nombreMusico+""

    var fecha_evento = document.getElementById("cnt_fecha_evento");
    fecha_evento.innerHTML = "fecha ingresada: "+fechaEvento+""

    var ciudad_evento = document.getElementById("cnt_ciudad");
    ciudad_evento.innerHTML = "ciudad donde se realizará el evento: "+ciudad+""

    var imagen = "exito.jpeg";

    document.getElementById("cnt_nombre_musico").className ="alert alert-success";
    document.getElementById("cnt_fecha_evento").className ="alert alert-info";
    document.getElementById("cnt_ciudad").className ="alert alert-warning";

    document.getElementById("cnt_imagen").innerHTML ="<img src=img2/"+imagen + ">";

    consultaMusico();
   
    
}
