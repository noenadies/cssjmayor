



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

     