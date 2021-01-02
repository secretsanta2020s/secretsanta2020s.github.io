//  PLANTILLA CLASE 13 - jQuery ANIMACIONES
//POR CADA ELEMENTO EN "DATOSROBOTS" VAMOS A CREAR UNA ESTRUCTURA EN EL HTML SELECCIONADO.

//$("h2").hide();
//animar y volver al estado original

$("#notificacion").hide();

for(let robot of DATOSROBOTS){
  $("#contenidoGenerado").append(crearComponente(robot));
}
//ESCUCHAMOS EL EVENTO CLICK DE TODOS LOS BOTES CUYOS ID CONTIENE LA SUBCADENA "amigo"
$('button').click((e) =>{
  //  OBTENEMOS EL NOMBRE DE AMIGO SEPARANDO LA CADENA DEL ID
  console.log(e.target.id);
  let nombreAmigo = e.target.id.substr(5).toUpperCase();
  $("#notificacion").html(`<article class="product">
                <div class="img-container">
                    <img src="./images/drakememe.jpg" alt="product" class="product-img"/>
                </div>
            </article>
            
            `);
  //Cuando termina se introduce la funcion flecha
  $("#notificacion").fadeIn(2000);
  /*$("#notificacion").fadeIn(2000, ()=>{
    $("#notificacion").fadeOut(2000);
  });*/
  //versión sin callback, directo
  /*$("#notificacion").fadeIn(2000).fadeOut(1000,()=>{
    $(`#${nombreAmigo}`).slideUp("slow");
  });*/
})

//FUNCION QUE DEFINE LA ESTRUCTURA DEL HTML A AGREGAR EN EL DOCUMENTO
function crearComponente(robot){
  return `<div id="${robot.nombre}.toUpperCase()" class="column">
          <img src="${robot.avatar}">
          <div class="container">
            <h3>${robot.nombre}</h3>
            <button id="amigo${robot.nombre}">AGREGA</button>
          </div>
          </div>`;
}
