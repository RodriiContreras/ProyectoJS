
// --------------------------------------------------------------------------------INICIO SECCION "SCROLLREVEAL"-----------------------------------------


window.sr = ScrollReveal();

   sr.reveal('.nav',{
       duration:800,
       origin:'bottom',
      distance:'-100px',
});

  
   ScrollReveal().reveal('.containerflex',{
    duration:2000,
   
   
  });
  
  ScrollReveal().reveal('#vermas', {
    duration:4000,
  });


  ScrollReveal().reveal('#bienvenidos',{
    duration:2000,
    origin:'right',
    distance: '-800px'
  });

// -----------------------------------------------------------------------------------FIN SECCION "SCROLLREVEAL"-----------------------------------------

// -----------------------------Login ----------------------------
var botonLoguer = document.getElementById("botonlogueo");//Manipulo el dom del Logueo
botonLoguer.addEventListener("click",Login)//genero un evento de tipo CLICK
var formulario = document.getElementById("formulariologueo");
var opacidad = document.getElementById("overlay");
function Login(){//boton para mostrar ventana de logueo y registro 
  document.getElementById("formulariologueo").style.visibility=("visible")
  document.getElementById("formulariologueo").style.zIndex=("+4000")
  document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.747)")
  document.getElementById("overlay").style.zIndex=("+1000")
}



var botonRegistro = document.getElementById("formulariologueo_registrarse");
botonRegistro.addEventListener("click", registro)
function registro(){//agrego ventana al hacer click en registro
  document.getElementById("registro").style.visibility=("visible");
  document.getElementById("formulariologueo").style.visibility=("hidden")
  document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.747)")
  document.getElementById("overlay").style.zIndex=("+1000")
}

var RegistrarseDespues = document.getElementById("registro_luego");
RegistrarseDespues.addEventListener("click",registrarseLuego);
function registrarseLuego(){//agrego opcion para registrarse luego, lo cual cerraria la ventana
  document.getElementById("registro").style.visibility=("hidden");
  document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.404)")
  document.getElementById("overlay").style.zIndex=("1")
  document.getElementById("vermas").style.zIndex=("2")
}



//-----------------------------------REGISTRARSE-------------------------- 
var registrarse  = document.getElementById("registro_register");
registrarse.addEventListener("click", registrar);

function registrar(){//agrego opcion para registrarse
let NombreUsuario =document.getElementById("registro_nombreusuario").value;
let Email =document.getElementById("registro_email").value;
let Contrasenia = document.getElementById("registro_contrasena").value;
//tomo los 3 valores con value y los Mando al almacenador
almacenador.push(NombreUsuario);
almacenador.push(Email);
almacenador.push(Contrasenia);
console.log(JSON.stringify(almacenador));

if(document.getElementById("registro_nombreusuario").value == length > 1 && document.getElementById("registro_email").value == length > 1 && document.getElementById("registro_contrasena").value == length > 1 ){
  document.getElementById("register_parrafo").innerText=("Por lo menos debe ingresar una letra en los campos")
  document.getElementById("register_parrafo").style.color=("red")
  console.log("mal")
  // hago un condicional en caso de que no se escriba nada en el logueo y que obligue al usuario a escribir algo en los input.
  // LOS "&&" significan que ademas de "x" condicion, tambien tienen que cumplir otra condiciones que yo ponga para que se ejecute la accion del formulario
}
else if(document.getElementById("registro_email").value == length > 1 ){
  document.getElementById("register_parrafo").innerText=("Por lo menos debe ingresar una letra en el campo de Email")
  document.getElementById("register_parrafo").style.color=("red")
}
else if (document.getElementById("registro_contrasena").value == length > 1 ){
  document.getElementById("register_parrafo").innerText=("Por lo menos debe ingresar una letra en el campo de Contraseña")
  document.getElementById("register_parrafo").style.color=("red")
}
else{
  
  document.getElementById("registro").style.visibility=("hidden");
  document.getElementById("formulariologueo").style.visibility=("visible")
  document.getElementById("formulariologueo").style.zIndex=("+4000")
  document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.747)")
  document.getElementById("overlay").style.zIndex=("+1000")
  
}




sessionStorage.setItem("registrousuario",NombreUsuario);
sessionStorage.setItem("registropassword",Contrasenia);
sessionStorage.setItem("registroemail",Email);
}

//-----------------------------------LOGUEARSE-------------------------- 



//-----------------------------------LOGUEARSE-------------------------- 
var loguear = document.getElementById("formulariologueo_aceptar");
loguear.addEventListener("click", Iniciarsesion);

function Iniciarsesion(){//Tomo los dos valores principales y los mand a un almacenaodor aparte tambien, y genero un if para que se asegure que sean iguales los datos del registro y del logueo
let nombreDeUsuario = document.getElementById("formulariologueo_nombreusuario").value;
let contra = document.getElementById("formulariologueo_contrasena").value;
almacenadorlog.push(nombreDeUsuario);
almacenadorlog.push(contra);
console.log(JSON.stringify(almacenadorlog));

if( document.getElementById("formulariologueo_nombreusuario").value !== document.getElementById("registro_nombreusuario").value){//Esta linea de codigo toma los valores de "Nombre de usuario" que se ponen en el registro y los compara con el que se puso en logueo.  
  document.getElementById("parrafologueo").style.color=("red");
  document.getElementById("parrafologueo").innerText=("Nombre de usuario y/o contraseña incorrecta")
  console.log("mal")



}
else if (document.getElementById("registro_contrasena").value !== document.getElementById("formulariologueo_contrasena").value){//Esta linea de codigo toma los valores de "clave" que se ponen en el registro y los compara con el que se puso en logueo.  
  document.getElementById("parrafologueo").style.color=("red");
  document.getElementById("parrafologueo").innerText=("Nombre de usuario y/o contraseña incorrecta")
  console.log("mal")

}
else if (document.getElementById("formulariologueo_nombreusuario").value == length > 1){
  document.getElementById("parrafologueo").style.color=("red");
  document.getElementById("parrafologueo").innerText=("Por lo menos debe ingresar una letra en los campos")
  console.log("mal")
}
else{
  document.getElementById("parrafologueo").style.color=("green");
  document.getElementById("parrafologueo").innerText=("Te has logueado de manera correcta")
  console.log("bien")

  setTimeout(function Cerrarcartel(){
    document.getElementById("registro").style.visibility=("hidden");
    document.getElementById("formulariologueo").style.visibility=("hidden");
    document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.404)")
    document.getElementById("overlay").style.zIndex=("1")
    document.getElementById("vermas").style.zIndex=("2")
    document.getElementById("botonlogueo").innerText=("Bienvenido " + document.getElementById("formulariologueo_nombreusuario").value)
    document.getElementById("botonlogueo").style.color=("white")
  },2000);
}
sessionStorage.setItem("usuariologueo",nombreDeUsuario);
sessionStorage.setItem("contraseñalogueo",contra);
}
const almacenador = []
const almacenadorlog = []


//-----------------------------------LOGUEARSE-------------------------- 
//-----------------------------------VALIDACION-------------------------- 
//-----------------------------------VALIDACION-------------------------- 

//rgba(0, 0, 0, 0.404)rgba(0, 0, 0, 0.747)

// -----------------------------Login ----------------------------
class Juegos {//hago un constructor para generar mis objetos
    constructor (nombre, precio) {
        this.nombre  = nombre;//genero una propiedad del objeto, en este caso nombre 
        this.precio  = parseFloat(precio);//segunda propiedad de mis objetos, en este caso PRECIO
      }
}
const juego1 = new Juegos("Metro Redux ", "2000")
console.log(juego1);
const juego2 = new Juegos("Resident Evil 3", "2500");
console.log( juego2);
const juego3 = new Juegos("Detroit", "2700");
console.log(juego3);  
const juego4 = new Juegos("Uncharted 4", "2500");
console.log(juego4);
const juego5 = new Juegos("Call of duty Modern Warfare", "2000");
console.log(juego5);
const juego6 = new Juegos("The Last of Us II", "2500");
console.log(juego6);
const juego7 = new Juegos("Red Dead Redemption", "2500");
console.log(juego7);
const juego8 = new Juegos("Sekiro Shadows Die Twice", "2500");
console.log(juego8);
const juego9 = new Juegos("Star Wars Fallen Order", "3000");
console.log(juego9);
const juego10 = new Juegos("Ghost Of Tsushima", "3500");
console.log(juego10);
const blanco = " "
let productosJuegos = [] // almacenador de juegos
var mostrarCartel = document.getElementById("cartelcarrito");//Tomo con el DOM el cartelcarrito para hacer el evento
console.log(mostrarCartel);
var textoCartel = document.getElementById("parrafocarrito");
console.log(textoCartel.innerText);

//Seccion de agregar al carrito 

// ACLARACIÓN =LO EXPLICADO EN "AgregarACarrito" ocurre en todas las otros botones, por eso no gasto lineas de comentario en cada una.
function AgregarACarrito(){
productosJuegos.push(new Juegos(juego1.nombre , juego1.precio * 1.21));//Al hacer click en agregar al carrito del html correspondiente, pushea todo los valores que tenga el juego hacia el almacenador
console.log (JSON.stringify("Se ha agregado el juego= " + juego1.nombre + " al precio de " + juego1.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item2">
 <img id="metroredux" src="../imagenes/metro.png"><h2 id="juego1">${juego1.nombre + "$"+ juego1.precio * 1.21}</h2></div>`);//aca mando la Card del juego  al carrito con su respectivo nombre y precio (SUMADO CON IVA)

if(productosJuegos.push){//hago un condicional,que hace que muestre al hacer click un cartel de "se ha agregado a carrito "x" juego."    
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego1.nombre;
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
   mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
   mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
  mostrarCartel = document.getElementById("cartelcarrito").style.background=("black")
  }
   
    setTimeout(function borrarelemento(){//la funcion de SetTimeout hace que el cartel desaparezca tras Unos segundos
      mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
    },600);//el Numero "600" es el tiempo que va a estar el cartel
    
}


function AgregarACarrito2(){
 productosJuegos.push(new Juegos(juego2.nombre, juego2.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego2.nombre + " al precio de " + juego2.precio * 1.21 + " (Incluyendo IVA)"));

 $("#productoscarrito").append(`<div id="productoscarrito_item"><img id="residentevil" src="../imagenes/residentevil.jpg">
<h2 id="juego2">${juego2.nombre + blanco + "$"+ juego2.precio * 1.21}</h2></div>
`);

if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego2.nombre;
    mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
    mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
    mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
    mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue")}
  
    setTimeout(function borrarelemento(){
      mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
    }, 600);
  }
function AgregarACarrito3(){
productosJuegos.push(new Juegos(juego3.nombre, juego3.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego3.nombre + " al precio de " + juego3.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item3"><img id="carrito_detroit" src="../imagenes/detroit.jpg"">
<h2 id="juego3">${juego3.nombre + blanco +"$" +juego3.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego3.nombre;
  textoCartel = document.getElementById("parrafocarrito").style.fontSize=("17px");
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
  mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
  mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue");
  mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
 
  setTimeout(function borrarelemento(){
    mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
  }, 600);
}

}
function AgregarACarrito4(){
productosJuegos.push(new Juegos(juego4.nombre, juego4.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego4.nombre + " al precio de " + juego4.precio * 1.21 + " (Incluyendo IVA)"));

 $("#productoscarrito").append(`<div id="productoscarrito_item4"><img id="carrito_uncharted" src="../imagenes/uncharted4.png">
<h2 id="juego4">${juego4.nombre +blanco + "$"+juego4.precio * 1.21}</h2></div>
`);

if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego4.nombre;
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
  mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
  mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
  mostrarCartel = document.getElementById("cartelcarrito").style.background=("black")}
  
  setTimeout(function borrarelemento(){
    mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
  }, 600);
}


function AgregarACarrito5(){
productosJuegos.push(new Juegos(juego5.nombre, juego5.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego5.nombre + " al precio de " + juego5.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item5"><img id="carrito_cod" src="../imagenes/callofduty.jpg">
<h2 id="juego5">${juego5.nombre +blanco+"$"+ juego5.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego5.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue")}

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}

function AgregarACarrito6(){
productosJuegos.push(new Juegos(juego6.nombre, juego6.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego6.nombre + " al precio de " + juego6.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item6"><img id="carrito_tlou" src="../imagenes/tlou.jpg">
<h2 id="juego6">${juego6.nombre +blanco+"$"+ juego6.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego6.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
mostrarCartel = document.getElementById("cartelcarrito").style.background=("black")

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}
}
function AgregarACarrito7(){
productosJuegos.push(new Juegos(juego7.nombre, juego7.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego7.nombre + " al precio de " + juego7.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item7"><img id="carrito_reddead" src="../imagenes/reddead.jpg">
<h2 id="juego7">${juego7.nombre +blanco +"$" +juego7.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego7.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible");
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white");
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white");
mostrarCartel = document.getElementById("cartelcarrito").style.background=("black");

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}

}
function AgregarACarrito8(){
productosJuegos.push(new Juegos(juego8.nombre, juego8.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego8.nombre + " al precio de " + juego8.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<div id="productoscarrito_item8"><img id="carrito_sekiro" src="../imagenes/sekiro.jpg">
<h2 id="juego8">${juego8.nombre + blanco +"$"+juego8.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego8.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible");
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white");
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white");
mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue");

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}

}
function AgregarACarrito9(){
productosJuegos.push(new Juegos(juego9.nombre, juego9.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego9.nombre + " al precio de " + juego9.precio * 1.21 + " (Incluyendo IVA)"));
  $("#productoscarrito").append(`<div id="productoscarrito_item9"><img id="carrito_starwars" src="../imagenes/starwars.jpg">
<h2 id="juego9">${juego9.nombre + blanco +"$"+juego9.precio * 1.21}</h2></div>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego9.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
mostrarCartel = document.getElementById("cartelcarrito").style.background=("black")

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);

 }
}
 function AgregarACarrito10(){
  productosJuegos.push(new Juegos(juego10.nombre, juego10.precio * 1.21));
  console.log(JSON.stringify("Se ha agregado el juego= " + juego10.nombre + " al precio de " + juego10.precio * 1.21 + " (Incluyendo IVA)"));
  $("#productoscarrito").append(`<div id="productoscarrito_item10"><img id="carrito_ghost" src="../imagenes/ghost.jpg">
<h2 id="juego9">${juego10.nombre + blanco +"$"+juego10.precio * 1.21}</h2></div>
`);
  if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego10.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue")

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);

  }
}
$("#boton_listacarrito").click(function(){//cambio las propiedades de visibilidad de cada objeto
  document.getElementById("jquerycarrito").style.visibility=("visible");
  document.getElementById("opacidadcarrito").style.visibility=("visible");
  document.getElementById("opacidadcarrito").style.zIndex=("+1000");
  document.getElementById("opacidadcarrito").style.top=("100vh");
  document.getElementById("opacidadcarrito").style.width=("100%");
  document.getElementById("opacidadcarrito").style.height=("100%");
});


    function Listacarrito(){//cambio las propiedades de visibilidad de cada objeto
     
     document.getElementById("jquerycarrito").style.visibility=("visible");
    }


    function Cerrarcarrito(){//cambio las propiedades de visibilidad de cada objeto
      document.getElementById("jquerycarrito").style.visibility=("hidden");
      document.getElementById("opacidadcarrito").style.visibility=("hidden");
      document.getElementById("opacidadcarrito").style.zIndex=("-1000");
      document.getElementById("jquerycompra").style.visibility=("hidden");
    }


///------BOTON API----



$("#boton_api").click( () =>{//evento de click 
  $.get("https://api.rawg.io/api/games?key=a5c1bd60a8b349218f8f35b843dcaaa7").done(function(resultado,estado){//Toma la url de la Api que estoy dando,hago una funcion con dos  parametros para ver si los esta tomando correctamente
if (estado == "success"){//Si es estado es "Success" (Osea que pudo ingresar a los datos de mi Api,que ejecute "x" accion)
  document.getElementById("tablaa_api").style.visibility=("visible");
  document.getElementById("tablaa_api").style.display=("table")


let datos = resultado.results;//hago un Let de datos para poder usarlo con el forEach, y el "results" es porque estoy accediendo a la parte del array que a mi me interesa(los juegos).
  datos.forEach(Juegosapi => {//Hago un foreach para que vaya recorriendo cada juego de mi api, y que la coloque en una celda 
    $("#tbody_api").append(`<tr>
    <th scope="row">${Juegosapi.id}</th>
    <td>${Juegosapi.name} <i class="fab fa-playstation"></i></td>
    <td> <i id="estrellitas_api"class="fas fa-star"> </i>${Juegosapi.rating}</td>
  </tr>`)//Toma diferentes propiedades del array que me transporta, en este caso yo elegi "ID", "NAME", "RATING"
   });
   }
  })
})


$("#compracarrito").click(function(){
  document.getElementById("jquerycompra").style.visibility=("visible");
  let total = 0;//asigno un valor inicial de total
  let parrafototal = document.getElementById("carrito_totalpago")
  productosJuegos.forEach(juegosprecio =>{//Hago un for Each que recorre cada juego que haya clickeado el usuario y sea enviado a Productos juegos, tomo el valor de los precios, y los sumo entre si.
    total += Number(juegosprecio.precio)
    })
    if (productosJuegos !== length > 0 ){
      parrafototal.textContent= "Total = $" + total;
    }
    else if (productosJuegos == length < 0 ){
      parrafototal.textContent= "Total = $0"
    }
  })    


function Vaciarcarrito(){
  let parrafototalvacio = document.getElementById("carrito_totalpago").textContent
  console.log(parrafototalvacio)
  productosJuegos = [] //poniendo el "[]" hace que quede vacio mi almacenador de juegos
  console.log(productosJuegos)
  $("#productoscarrito").empty();//borra todos los apend que haya en el carrito
  console.log("este evento sucede") 
}