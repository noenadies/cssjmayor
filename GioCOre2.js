



var arrayhojastotales=[];
var arrahojaActual=[];
function fGiogetElementosID(stID)
{

    return $("#"+String(stID));
}

function fGioarrayhojastotalesAdd(){


}

function nuevahojaarray(id,namex,ftbien,fmal){
try {
    arrahojaActual.push({idhoja:id,name:namex,elementonativo:fGiogetElementosID(id)})
    ftbien( arrahojaActual[ arrahojaActual.length-1]);
} catch (error) {
    fmal(arrahojaActual);
}
   
}

// todo de  arrastrar Drag todo
function  fGioArrastrar(selector,objar) {

    $(selector).draggable({ snap: true });
  }



  function  fGiocolocaC(selector,classNamecss) {

    $(selector).addClass(classNamecss);
}
function   fGioquitaC(selector,classNamecss) {

$(selector).removeClass(classNamecss);
}

function   fGiohabilitarArrastrar(selector) {
    $( selector).draggable( "disable" );
  }

  function   fGiodeshabilitarArrastrar(selector) {
    $( selector).draggable( "enable" );

  }


  function  fGiomouseUverOut(selector){
console.log(selector);
    $( selector)
  .mouseover(function() {

    //$( this ).find( "span" ).text( "mouse over x " + i );
    console.log(this);
  })
  .mouseout(function() {
   // $( this ).find( "span" ).text( "mouse out " );
    console.log(this);
  }); 
  }


  function fGiogetElemnt(st) {
    //  console.log(document.getElementById(st));
     return document.getElementById(st);  
    }
  // fin todo de  arrastrar Drag todo


  function fGioClickDivPadreahijoquienES(selector){
$(selector).click(function (e) { 
    e.preventDefault();

    console.log(e);
    
});
  }

var varGioelementoactualseleccionadoconelcclik=null;
var varGioelementoanteriorseleccionadoconelcclik=null; 
var intvarGioelementoactualseleccionadoconelcclikk=0;
var unicovarGioelementoanteriorseleccionadoconelcclik=null; 
  function fGioClickquienesEsteElemento(selector,fr){
    $(selector).click(function (e) { 
        e.preventDefault();
     var esteelementoactualunico=e.target;

        if(varGioelementoanteriorseleccionadoconelcclik!=null){
            
/* if(varGioelementoanteriorseleccionadoconelcclik.id==esteelementoactualunico.id){

   
}
else{
    
    varGioelementoanteriorseleccionadoconelcclik=varGioelementoactualseleccionadoconelcclik;
    varGioelementoactualseleccionadoconelcclik=e.target;
    fr(varGioelementoactualseleccionadoconelcclik,varGioelementoanteriorseleccionadoconelcclik);
}
    */     varGioelementoanteriorseleccionadoconelcclik=varGioelementoactualseleccionadoconelcclik;
    varGioelementoactualseleccionadoconelcclik=e.target;
    fr(varGioelementoactualseleccionadoconelcclik,varGioelementoanteriorseleccionadoconelcclik);
      
        }
        if(varGioelementoanteriorseleccionadoconelcclik==null){
            varGioelementoactualseleccionadoconelcclik=e.target;
            varGioelementoanteriorseleccionadoconelcclik=varGioelementoactualseleccionadoconelcclik;
            
            fr(varGioelementoactualseleccionadoconelcclik,varGioelementoactualseleccionadoconelcclik);
        }

   // console.log(this);
    // fGioseleccionconclick(varGioelementoactualseleccionadoconelcclik);
    });
      }


function  fGioElementohoverpermanececonClick(selector) { 
    fGiocolocaC(selector);
 }

 function  fGioElementohoverpermanececonClick(selector,diangeneralclickhover) { 
    varGioelementoactualseleccionadoconelcclik
    fGiocolocaC(selector,diangeneralclickhover);
 }
 function fGioseleccionconclick(elAct){
    varGioelementoactualseleccionadoconelcclik=elAct;
    if(intvarGioelementoactualseleccionadoconelcclikk==0){
    varGioelementoactualseleccionadoconelcclik
       varGioelementoanteriorseleccionadoconelcclik=varGioelementoactualseleccionadoconelcclik
       alert("una");
    }
    else{

    }
    console.log("actual");
console.log(varGioelementoactualseleccionadoconelcclik);
console.log("no actual");
console.log(varGioelementoanteriorseleccionadoconelcclik);
    intvarGioelementoactualseleccionadoconelcclikk=intvarGioelementoactualseleccionadoconelcclikk+1;
 }


 function crearcontrolesbasicos(selectorpadre, fr21){


    var stecrituramenu='<div id="iddivmenuprincipalr">menu </div>';
 $(selectorpadre).append(stecrituramenu);
  

    $( fGiodameelultimohijoadd(selectorpadre)).draggable({ snap: false });
    fGiocolocaC($( fGiodameelultimohijoadd(selectorpadre)),"dianpunteromove");
    var stecrituramenu1=' <div  id="idmenupropiedades" class="menucircular"></div>';
 $("#iddivmenuprincipalr").append(stecrituramenu1);
    fGioclickElementos(fGiodameelultimohijoadd( $("#iddivmenuprincipalr")),fr21)
    var stdivlateralpropiedades=' <div  id="iddivlateralpropiedades" class="rectagular"></div>';
 $("#idmenupropiedades").append(stdivlateralpropiedades);
    fGioclickElementos(fGiodameelultimohijoadd( $("#idmenupropiedades")),fr21)

 }


 function fGiodameelultimohijoadd(selectorpadre){
   
    return $(selectorpadre).children()[$(selectorpadre).children().length-1]  ;
 }

 var varfGiodameehijoporID=null;
 function fGiodameehijoporID(selectorpadre,stID){
     var boolgethijoid=false;
   var arrahijos=$(selectorpadre).children();
    for(var i in arrahijos){
if(arrahijos[i].id==stID){
    boolgethijoid=true;
    varfGiodameehijoporID=arrahijos[i];
  break;
}
    }
    if(boolgethijoid){
        boolgethijoid=false;
        return varfGiodameehijoporID;
    }
    else{
        return null;
    }

 }

 function fGioclickElementos(selector,funcionclickz1){
   
    $(selector).click(function (e) { 
        e.preventDefault();

        funcionclickz1(this,varGioelementoactualseleccionadoconelcclik);
        
    });
      }















      // tamanos position  escalar
function fGiorcambiarforma(selector){
  console.log(selector);
    $( "#idscal" ).resizable();

}

     







// controles basicos


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
/*   var dots = document.getElementsByClassName("dot"); */
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
 /*  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  } */
  slides[slideIndex-1].style.display = "block";  
  dicealgo(slideIndex) ;
/*   dots[slideIndex-1].className += " active"; */
}


function dicealgo(textst) { 

  var text ="hoja numero "+textst; //$('#message').val();
  var msg = new SpeechSynthesisUtterance();
  try {
    var voices = window.speechSynthesis.getVoices();
  } catch (error) {
    console.log("no habla");
    console.log(error);
  }

 if(voices.length>0){
  msg.voice =voices[0] // voices[$('#voices').val()];
  
  msg.rate =1;// $('#rate').val() / 10;
  msg.pitch =1; //$('#pitch').val();
  msg.text = text;

  msg.onend = function(e) {
   // console.log('Finished in ' + event.elapsedTime + ' seconds.');
  };

  speechSynthesis.speak(msg);
 }
  
 }



 function crearhojas(){


 }


 function menuderecho(){

  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 }



 function menulateralizquierda(){

  
 }

 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function openNav2() {
  document.getElementById("mySidenav2").style.width = "250px";
}

function closeNav2() {
  document.getElementById("mySidenav2").style.width = "0";
}