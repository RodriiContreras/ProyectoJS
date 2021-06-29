
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
var botonLoguer = document.getElementById("botonlogueo");
botonLoguer.addEventListener("click",Login)
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
//document.getElementById("formulariologueo").style.visibility=("hidden")
//document.getElementById("formulariologueo").style.zIndex=("+4000")
//document.getElementById("overlay").style.backgroundColor=("rgba(0, 0, 0, 0.747)")
//document.getElementById("overlay").style.zIndex=("+1000")
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
function prueba(){
Swal.fire({
  title: "Bienvenidos a Gamersnet!",
  text:"Esperamos que disfrute de esta pagina web"
});
}

var logueo= document.getElementById("bienvenidos");
logueo.addEventListener("mouseover", prueba);

// -----------------------------Login ----------------------------
class Juegos {
    constructor (nombre, precio,imagen) {
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
        this.imagen = imagen    
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
let productosJuegos = []
var mostrarCartel = document.getElementById("cartelcarrito");
console.log(mostrarCartel);
var textoCartel = document.getElementById("parrafocarrito");
console.log(textoCartel.innerText);
function AgregarACarrito(){
productosJuegos.push(new Juegos(juego1.nombre , juego1.precio * 1.21));
console.log (JSON.stringify("Se ha agregado el juego= " + juego1.nombre + " al precio de " + juego1.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<img id="metroredux" src="../imagenes/metro.png"><h2 id="juego1">${juego1.nombre + juego1.precio * 1.21}</h2>`);

if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego1.nombre;
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
   mostrarCartel = document.getElementById("cartelcarrito").style.color=("white")
   mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
  mostrarCartel = document.getElementById("cartelcarrito").style.background=("black")
  }
   
    setTimeout(function borrarelemento(){
      mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
    },600);
    
}


function AgregarACarrito2(){
 productosJuegos.push(new Juegos(juego2.nombre, juego2.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego2.nombre + " al precio de " + juego2.precio * 1.21 + " (Incluyendo IVA)"));

 $("#productoscarrito").append(`<img id="residentevil" src="../imagenes/residentevil.jpg">
<h2 id="juego2">${juego2.nombre + blanco +  juego2.precio}</h2>
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
 $("#productoscarrito").append(`<img id="carrito_detroit" src="../imagenes/detroit.jpg"">
<h2 id="juego3">${juego3.nombre + blanco +juego3.precio * 1.21}</h2>
`);
if(productosJuegos.push){
  textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego3.nombre;
  textoCartel = document.getElementById("parrafocarrito").style.fontSize=("17px");
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible")
  mostrarCartel = document.getElementById("cartelcarrito").style.color=("black")
  mostrarCartel = document.getElementById("cartelcarrito").style.background=("green");
  mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white")
 
  setTimeout(function borrarelemento(){
    mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
  }, 600);
}

}
function AgregarACarrito4(){
productosJuegos.push(new Juegos(juego4.nombre, juego4.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego4.nombre + " al precio de " + juego4.precio * 1.21 + " (Incluyendo IVA)"));

 $("#productoscarrito").append(`<img id="carrito_uncharted" src="../imagenes/uncharted4.png">
<h2 id="juego4">${juego4.nombre +blanco + juego4.precio * 1.21}</h2>
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
 $("#productoscarrito").append(`<img id="carrito_cod" src="../imagenes/callofduty.jpg">
<h2 id="juego5">${juego5.nombre +blanco+ juego5.precio}</h2>
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
 $("#productoscarrito").append(`<img id="carrito_tlou" src="../imagenes/tlou.jpg">
<h2 id="juego6">${juego6.nombre +blanco+ juego6.precio * 1.21}</h2>
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
 $("#productoscarrito").append(`<img id="carrito_reddead" src="../imagenes/reddead.jpg">
<h2 id="juego7">${juego7.nombre +blanco + juego7.precio * 1.21}</h2>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego7.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible");
mostrarCartel = document.getElementById("cartelcarrito").style.color=("white");
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white");
mostrarCartel = document.getElementById("cartelcarrito").style.background=("blue");

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}

}
function AgregarACarrito8(){
productosJuegos.push(new Juegos(juego8.nombre, juego8.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego8.nombre + " al precio de " + juego8.precio * 1.21 + " (Incluyendo IVA)"));
 $("#productoscarrito").append(`<img id="carrito_sekiro" src="../imagenes/sekiro.jpg">
<h2 id="juego8">${juego8.nombre + blanco +juego8.precio * 1.21}</h2>
`);
if(productosJuegos.push){
textoCartel = document.getElementById("parrafocarrito").textContent= "Se Ha agregado a carrito " + juego8.nombre;
mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("visible");
mostrarCartel = document.getElementById("cartelcarrito").style.color=("black");
mostrarCartel = document.getElementById("cartelcarrito").style.border=(" 1px solid white");
mostrarCartel = document.getElementById("cartelcarrito").style.background=("green");

setTimeout(function borrarelemento(){
  mostrarCartel = document.getElementById("cartelcarrito").style.visibility=("hidden")
}, 600);
}

}
function AgregarACarrito9(){
productosJuegos.push(new Juegos(juego9.nombre, juego9.precio * 1.21));
console.log(JSON.stringify("Se ha agregado el juego= " + juego9.nombre + " al precio de " + juego9.precio * 1.21 + " (Incluyendo IVA)"));
  $("#productoscarrito").append(`<img id="carrito_starwars" src="../imagenes/starwars.jpg">
<h2 id="juego9">${juego9.nombre + blanco +juego9.precio * 1.21}</h2>
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
  $("#productoscarrito").append(`<img id="carrito_ghost" src="../imagenes/ghost.jpg">
<h2 id="juego9">${juego10.nombre + blanco +juego10.precio * 1.21}</h2>
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

addEventListener('resize', () => {
if(innerWidth < 1680){
   document.getElementById("cartelcarrito").style.width=("250px");
   document.getElementById("cartelcarrito").style.position=("absolute");
   document.getElementById("cartelcarrito").style.top=('106vh');
  }
else (innerWidth < 1300)
  document.getElementById("cartelcarrito").style.width=("250px");
  document.getElementById("cartelcarrito").style.position=("absolute");
  document.getElementById("cartelcarrito").style.top=('107vh');
}
)

$(document).ready(function carrito(){
  $("#jquerycarrito").append(`<div id="nombreproducto"><h1>Su Carrito<i id="jquerycarrito_carrito" class="fas fa-shopping-cart"></i>:</h1></div>
  <div id="productoscarrito"></div>
  <button type="Button" id="vaciarcarrito" class="btn btn-success" onclick="Vaciarcarrito()">Vaciar Carrito</button>
  <button type="Button" id="cerrarcarrito" class="btn btn-success" onclick="Cerrarcarrito()">Cerrar Carrito</button>`);
 
})
//const TodosLosJuegos = [{}]
//----------------------

function Listacarrito(){
  document.getElementById("jquerycarrito").style.visibility=("visible");
 console.log(productosJuegos);

}
//----------------------

$("#vaciarcarrito").click(function(){
  $("#productoscarrito").empty();
  console.log("este evento esta sucediendo")
});
function Vaciarcarrito(){
  $("#productoscarrito").empty();
  console.log("este evento sucede")
}

    function Listacarrito(){
     
      document.getElementById("jquerycarrito").style.visibility=("visible");
    }


    function Cerrarcarrito(){
      document.getElementById("jquerycarrito").style.visibility=("hidden");
    }
    //----------------------

