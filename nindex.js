





function colocarpdfscript(param) {


    var rai="https://noenadies.github.io/cssjmayor/";
      var rulmicoremio=rai+"imprimirsi.js";
      llamadacolocarpdfscript(rulmicoremio);
      
      
    
    
      }
    
      function llamadacolocarpdfscript(url){
        fetch(url).then(function(response) {
            if(response.ok) {
              response.blob().then(function(miBlob) {
              
                var script = document.createElement('script'); 
                var objectURL = URL.createObjectURL(miBlob);
        
                script.src = objectURL;
                document.getElementsByTagName("head")[0].appendChild(script);
                script.onload=function(){
                    try {
                    
                      anadirpdfyxml();
                    } catch (error) {
                        
                    }
               
                }
              });
            } else {
                alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
            }
          })
          .catch(function(error) {
           alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
          });
    }
  
  function colocarxmlscript(param) {
  
  
  var rai="https://noenadies.github.io/cssjmayor/";
    var rulmicoremio=rai+"correml.js";
    llamadacolocarxmlscript(rulmicoremio);
    
    
  
  
    }
  
    function llamadacolocarxmlscript(url){
      fetch(url).then(function(response) {
          if(response.ok) {
            response.blob().then(function(miBlob) {
            
              var script = document.createElement('script'); 
              var objectURL = URL.createObjectURL(miBlob);
      
              script.src = objectURL;
              document.getElementsByTagName("head")[0].appendChild(script);
              script.onload=function(){
                  try {
                
                    colocarpdfscript();
                 
                  } catch (error) {
                      
                  }
             
              }
            });
          } else {
              alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
          }
        })
        .catch(function(error) {
         alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
        });
  }
  function colocarnuevocss(param) {
  console.log("colocarnuevocsscolocarnuevocsscolocarnuevocss");
  
    var rai="https://noenadies.github.io/cssjmayor/";
      var rulmicoremio=rai+"nuevo.css";
      llamadacolocarnuevocss(rulmicoremio);
      
      
    
    
      }
  function llamadacolocarnuevocss(url){
    var prelink=' <link id="idlink" rel="stylesheet" href="./style.css">'
    $("head").prepend(prelink);
    fetch(url).then(function(response) {
        if(response.ok) {
          response.blob().then(function(miBlob) {
            var script = document.createElement('link'); 
            
            var objectURL = URL.createObjectURL(miBlob);
  
            script.href = objectURL;
            document.getElementById("idlink").href= objectURL;
            document.getElementsByTagName("head")[0].appendChild(script);
       /*      script.onload=function(){
                try {
                  console.log( script.href);
                  colocarxmlscript();
                } catch (error) {
                  console.log( error); 
                }
           
            } */
  setTimeout(function(){
    try {
   
      colocarxmlscript();
    } catch (error) {
   
    }
  },1000);
          
          });
        } else {
            alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
        }
      })
      .catch(function(error) {
       alert("comunicate con el ing.giovanni.rodriguez@gmail.com");
      });
  }
  function fgiovannidarpadrealidtodoHoja(idpadre){
    var eltodo=document.getElementById("idtodo");
  $("#"+idpadre).prepend(eltodo);
  }
  
  
  
  
  
  function fgiovannimenulateralinicia(){
  
      $("#idmenulateral1").hover(function(){
    $(this).width(130);
        }, function(){
          $(this).width(20);
      });
    }
  
  var objgGeneralcs=null;
  var valoresparacssborder={
    vi:2,
    vd:2,
    vu:2,
    vdw:2,
  
  
   }
  
   function creavaloresparacssborder (p1,p2,p3,p4) {  
    var valoresparacssbord={
    vi:2*p1,
    vd:2*p2,
    vu:2*p3,
    vdw:2*p4,
  
  
   }
  
     return valoresparacssbord;
   }
  function fGiovannicreaobjgGeneralcs(id,tipodelinea,colo="#2eb9ce",unidadp="px"){
    var selector="#"+id;
    var color="#2eb9ce";
    var unidadpx="px";//unidadp;
    var conversionunidad=1;
    var valorunidad=2*conversionunidad;
   var position = $(selector).position();
   var topx = position.top;
   var leftx = position.left;
   var widthx=$(selector).width();
   var heightx=$(selector).height();
   var addborde=" "+ tipodelinea+" "+ color;
   var ov={
    vi:2,
    vd:2,
    vu:2,
    vdw:2,
  
  
   }
   ov=valoresparacssborder;
  
   
    var objgGeneral={
      "position": "absolute",
  "top": String(topx*conversionunidad)+unidadpx,
  "left": String(leftx*conversionunidad)+unidadpx,
  //"width":String(widthx)+unidadpx,
  //"height":String(heightx)+unidadpx,
      "border-top":String(ov.vu*conversionunidad)+unidadpx+addborde,
  "border-right":  String(ov.vd*conversionunidad)+unidadpx+addborde,
  "border-bottom":String(ov.vdw*conversionunidad)+unidadpx+addborde,
  "border-left":String(ov.vi*conversionunidad)+unidadpx+addborde, 
    }
    
  
    $("#"+id).css(objgGeneral);
    return objgGeneral;
  }
  var varv1=0;
  var varv2=0;
  var varv3=0;
  var varv4=0;
  function fGiovanniCheckmenuboder(){
  
    $(".classchangecheck").change(function (e) { 
   
      console.log("fGiovanniCheckmenuboder");
     varv1=0;
  varv2=0;
  varv3=0;
   varv4=0;
  
   var vaconlineapunteada="solid";
   
  if(sich("idic1")){
    varv1=1;
    
  }
  else{
    varv1=0;
  }
  if(sich("idic2")){
    varv2=1;
  
    
  }
  else{
    varv2=0;
  }
  if(sich("idic3")){
    varv3=1;
  }
  else{
    varv3=0;
  }
  if(sich("idic4")){
    varv4=1;
  }
  else{
    varv4=0;
  }
  if(sich("idic5")){
    var tamapix=1;
    vaconlineapunteada="dotted";
    varv1=tamapix;
    varv2=tamapix;
    varv3=tamapix;
    varv4=tamapix;
  }
  else{
    vaconlineapunteada="solid";
  }
  
  if(sich("idic6")){
    habilitarEresizable(actualelementoactivo.id,false);
  
  }
  else{
    try {
      deshabilitarEresizable(actualelementoactivo.id,true);
    } catch (error) {
      
    }
    
  
  }
  
  if(sich(objetocheckboxbordesyfijarresise.fijar)){
  
  
  
  
    deshabilitarEdraggable(actualelementoactivo.id,true);
    actualelementoactivo.setAttribute(propiedaeselementos.fijar, true);
  }
  else{
    habilitarEdraggable(actualelementoactivo.id,false);
    actualelementoactivo.setAttribute(propiedaeselementos.fijar, false);//gfijar
  }
  
  valoresparacssborder=creavaloresparacssborder(varv1,varv2,varv3,varv4);
   //border: 5px dotted #1C6EA4;
  /* if(varv1==0&&varv2==0&&varv3==0&&varv4==0){
    vaconlineapunteada="dotted";
  } */
      fGiovannicreaobjgGeneralcs(actualelementoactivo.id,vaconlineapunteada);
      
    });
  }
  
  function sich(id) {
    return document.getElementById(id).checked;
    }
  
  var actualelementoactivo=null;
  var solounavesgetelementoconClick=true;
  var clickaenhojas=[];
  
  function getelementoconClick(idhoja){
    var tengounahojaigual=false;
    if(clickaenhojas.length>0){
  for(var i in clickaenhojas){
  if(clickaenhojas[i].id==idhoja){
    tengounahojaigual=true;
    break;
  }
  }
    }
    else{
      clickaenhojas.push({id:idhoja});
      activavlivkenhoja(idhoja);
    }
  
    if(tengounahojaigual){
  
    }
    else{
      clickaenhojas.push({id:idhoja});
      activavlivkenhoja(idhoja);
    }
    if(solounavesgetelementoconClick){
      solounavesgetelementoconClick=false;
     
    }
  }
  
  var varclassgiovanniselecion="classgiovanniselecion";
  function activavlivkenhoja(selector){
    var selector="#"+selector
  /*   $(selector).click(function (e) { 
      $("*").removeClass(varclassgiovanniselecion);
  
      
        actualelementoactivo=e.target;
     
        console.log();
  
        $(actualelementoactivo).addClass(varclassgiovanniselecion);
  }); */
  }
  
  
  var arraydecambiosmultiplescontrlz=[];
  var arrayelementoscreados=[];
  var proiedadesdelelemento={
    alto:222,
    ancho:111,
    line:"doto",
    dragablebool:false
  }
  function escuchouncambio(element){
  
  }
  var multifuncional=function(){
  
  };
  function segundaseleecionelementosenhoja(_thisscomppnenteAngular,fcallback) {
  
    
    $("#idcuerpoH").click(function (e) { 
    
     
      
      if($(e.target).hasClass("clelemento")){
  
  
        
  $("*").removeClass(varclassgiovanniselecion);
  
  console.log($(e.target)[0].draggable);
  console.log(e.target.style.cssText);
  console.log($(e.target));
  //jQuery351081055757601035362 jQuery351070136356109760262
  actualelementoactivo=e.target;
  
  actualelementoactivo.setAttribute("gancho", 43434);
  $(actualelementoactivo).addClass(varclassgiovanniselecion);
  console.log($(actualelementoactivo));
  fcallback(_thisscomppnenteAngular,actualelementoactivo);
  
  
      }
      
    });
  
    teclado("");
  
    }
  
  
  function teclado (callback) {
  $(document).keydown(function (e) { 
  if(e.key=="Delete"){
    console.log(e.key);
  
    $(actualelementoactivo).remove();
  }
  
  
  //  callback();
  });
  
  
    }
  
  function damepropiedaeselmentos(elem,propiedd) {
  
    return $(elem).attr(propiedd)
  
    }
  var propiedaeselementos={
    fijar:"fijar"
  };
    function  crearpropiedadesenelementos(id,p1,p2,p3,p4,p5,p6,p7,p8){
      document.getElementById(id).setAttribute("gancho", p1);
      document.getElementById(id).setAttribute("galto", p2);
      document.getElementById(id).setAttribute(propiedaeselementos.fijar, p3);
      document.getElementById(id).setAttribute("gsize", p4);
      document.getElementById(id).setAttribute("gquieto", p5);
      document.getElementById(id).setAttribute("gancho1", p6);
      document.getElementById(id).setAttribute("gancho2", p7);
      document.getElementById(id).setAttribute("gancho3", p8);
  
    }
  function esunelementodehoja(elemt){
    return $(elemt).hasClass("clelemento");
  }
  function encrearhoja(idhoja) { getelementoconClick(idhoja); }
  
  
  
  
  
  
  
  
  
  function fGiovanniGetElementosporClass(cl) {
      return document.getElementsByClassName(cl);
  }
  function fGiovanniajustaridcuerpoHconinnerWidth () {
       
      
      $($("#"+containeridcuerpoH)).css("left", (window.innerWidth-570)/2);
  
  
  
    }
  
  function fGiovanniGetPos(id){
      var position = $("#"+id).position();
      var top = position.top;
      var left = position.left;
      return position;
    }
    var ratondivx=0;
    var ratondivy=0;
    function fGiovanniCoordenadasratoneneldiv(id) {
    
      $("#"+id).mousemove(function(event){
        ratondivx = event.pageX - this.offsetLeft;
        ratondivy= event.pageY - this.offsetTop;
            //	$("#texto3").text("Coordenadas del ratón dentro del elemento: " + x + ", " + y);
        
         
            
          });
          
         
      }
    var identracrear=0;
    function menubassico(draggablex,droppable){
  
      
    
      $( "#"+draggablex ).draggable({
        stop: function( event, ui ) {
    
          
  /*      var objcss1={
      "position": "absolute",
    "top":"0px",
    
    "left": "0px"
    
    }
          $("#"+ui.helper[0].id).css(objcss1); */
  
      
        },
        drag: function( event, ui ) {
    
        }
      });
      $( "#idhoja1" ).droppable({
        accept: ".clbocx",
          drop: function( event, ui ) {
    alert("no funciona gio");
        
      
      if(identracrear==0){
        fgiovannicrearelementos(this);
      }
      identracrear=identracrear=+1;
      if(identracrear!=0){
              identracrear=0;
            }
        }
      });
    }
    
  var esteeleemntxxx=null;
  
    function deshabilitarEresizable(id, hablitar){
    /*   $( "#"+id).resizable({
        disabled: hablitar
      }); */
      $( "#"+id).resizable( "disable" );
    }
    function habilitarEresizable(id, hablitar){
  
      
      $( "#"+id).resizable( "enable" );
  
    }
    function habilitarEdraggable(id, hablitar){
  
       
      $( "#"+id).draggable( "enable" );
     
       }
       function deshabilitarEdraggable(id, hablitar){
  
        $( "#"+id).draggable( "disable" );
        }
    function fgiovannisoltarElementodeMenuaHoja(draggablex,droppable,clid=cllasscssindicadorasoltarsoloestoselementosenhoja){
  
      
  
      $( "#"+draggablex ).draggable({
        stop: function( event, ui ) {
    
       var position = $(this).position();
       var top = position.top;
       var left = position.left;
  
  
  /*         
  
          var objcss1={
            "position": "absolute",
            "top":"50%",
            
            "left": "50%",
       "transform": "translate(0%, 0%)",
       "width": "100%",
  "height": "100%"
          
            }
                  $("#"+ui.helper[0].id).css(objcss1);  */
  
                  entraremoveryaddelementoalmenucrear (ui.helper[0]);
              
  /* 
                  esteeleemntxxx=ui.helper[0];
    var padredelnodo=ui.helper[0].parentElement;
          console.log(ui.helper);
          console.log(ui.helper[0].offsetLeft);
      var desfas=ui.helper[0].offsetLef;
  
  setTimeout(function(){
  
            console.log("un segundo");
  },1000);  
          console.log("2222aaaaaaaaaaaaaaaaaaaaaaa"); */
        },
        drag: function( event, ui ) {
    
        }
      });
      $( "#"+droppable ).droppable({
        accept: "."+clid,
          drop: function( event, ui ) {
    
        
         
            
   
        
            
      if(identracrear==0){
        fgiovannicrearelementos(this,ui.draggable[0]);
      }
      identracrear=identracrear+1;
      if(identracrear!=0){
              identracrear=0;
            }
        }
      });
    }
    var containeridcuerpoH="idcuerpoH";
    var objetoidentificadoresparaelementosmenuarrastrarenhoja=[];
    var objmenucrearelementos={chequeoexcluyente:"chequeoexcluyente",
    chequeonoexcluyente:"chequeonoexcluyente",
    recuadro:"recuadro",
    etiqueta:"etiqueta",
    cajaalfanumerica:"cajaalfanumerica",
    cajadedigitoscaracteres:"cajadedigitoscaracteres",
    imagen:"imagen",
    fecha:"fecha"
  }
    //addobjetoidentificadoresparaelementosmenuarrastrarenhoja();
  function addobjetoidentificadoresparaelementosmenuarrastrarenhoja (idx,creareleemnto) { 
    var tengoidx=false;
    if(objetoidentificadoresparaelementosmenuarrastrarenhoja.length>0){
  for(var i in objetoidentificadoresparaelementosmenuarrastrarenhoja){
    if(objetoidentificadoresparaelementosmenuarrastrarenhoja[i].id==idx){
      tengoidx=true;
  break;
    }
    
  }
  
  if(!tengoidx){
    objetoidentificadoresparaelementosmenuarrastrarenhoja.push({id:idx,creareleemnto:creareleemnto });
   
  }
    }
    else{
      objetoidentificadoresparaelementosmenuarrastrarenhoja.push({id:idx,creareleemnto:creareleemnto });
   
    }
   }
    function fgiovannicrearelementos(hoja, elementodelmenucrearNativo) {
      var hijosconclelemento= document.getElementsByClassName("clelemento"); 
      if(hijosconclelemento.length>0){
    
    var idagenerar="el"+String(hijosconclelemento.length);
    idagenerar.replace(" ","");
    var creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
    
  
  /*   var estecss={
      "position": positionabs,
      "top": String(top)+unidadmedida,
      "left": String(left)+unidadmedida,
      "width": String(wi)+unidadmedida,
      "height": String(he)+unidadmedida,
      
      "border-top":String(b1)+unidadmedida+" "+ linetipo+" "+ colorline,
      "border-right":String(b1)+unidadmedida+" "+ linetipo+" "+ colorline,
      "border-bottom":String(b1)+unidadmedida+" "+ linetipo+" "+ colorline,
      "border-left":String(b1)+unidadmedida+" "+ linetipo+" "+ colorline,
        
      } */
    var anchodefinitivo=80;
    var alturarenglon=13;
    var anchochebox1=18;
    var anchoborder=2;
    var colorline="#2eb9ce";
    var linetipo="solid";
    var unidadmedida="px";
  
    var iniciaconresize=true;
  
  var str="";
  str.sustra
  var idtemporales=elementodelmenucrearNativo.id;
  var tengoelemid=false;
  var esteidconobjmenucrearelementos=null;
  var borderestipo="dotted";
  //border: 5px dotted #1C6EA4;
  for(var i in objetoidentificadoresparaelementosmenuarrastrarenhoja){
  
    if(objetoidentificadoresparaelementosmenuarrastrarenhoja[i].id==elementodelmenucrearNativo.id){
      tengoelemid=true;
      esteidconobjmenucrearelementos=objetoidentificadoresparaelementosmenuarrastrarenhoja[i].creareleemnto;
      objmenucrearelementos
      break;
    }
    
  }
  if(objmenucrearelementos.chequeoexcluyente==esteidconobjmenucrearelementos){
    anchodefinitivo=18;
    alturarenglon=alturarenglon-3.1;
    iniciaconresize=false;
    linetipo="dotted";
  }
  if(objmenucrearelementos.chequeonoexcluyente==esteidconobjmenucrearelementos){
    anchodefinitivo=18;
    alturarenglon=alturarenglon-3.1;
    iniciaconresize=false;
    linetipo="dotted";
  }
  if(objmenucrearelementos.recuadro==esteidconobjmenucrearelementos){
    anchodefinitivo=109;
    alturarenglon=alturarenglon*3-3.1;
    iniciaconresize=true;
    linetipo="dotted";
  }
  if(objmenucrearelementos.etiqueta==esteidconobjmenucrearelementos){ //label es etiqueta
    anchodefinitivo=109;
    alturarenglon=alturarenglon*1-3.1;
    iniciaconresize=true;
    linetipo="dotted";
    //creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
    creaesto='<label id="'+idagenerar+'" class="clelemento classoverelementos" for="">'+'label:'+idagenerar+'</label>';
  }
  if(objmenucrearelementos.cajaalfanumerica==esteidconobjmenucrearelementos){ //cajaalfanumerica
    anchodefinitivo=100;
    alturarenglon=alturarenglon*1-3.1;
    iniciaconresize=true;
    linetipo="dotted";
    //creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
   // creaesto='<label id="'+idagenerar+'" class="clelemento classoverelementos" for="">'+'label:'+idagenerar+'</label>';
  }
  if(objmenucrearelementos.cajadedigitoscaracteres==esteidconobjmenucrearelementos){ //cajaalfanumerica
    anchodefinitivo=35;
    alturarenglon=alturarenglon*1-3.1;
    iniciaconresize=true;
    linetipo="dotted";
    //creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
   // creaesto='<label id="'+idagenerar+'" class="clelemento classoverelementos" for="">'+'label:'+idagenerar+'</label>';
  }
  
  if(objmenucrearelementos.imagen==esteidconobjmenucrearelementos){ //cajaalfanumerica
    anchodefinitivo=108;
    alturarenglon=alturarenglon*3.1;
    iniciaconresize=true;
    linetipo="dotted";
    //creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
   // creaesto='<label id="'+idagenerar+'" class="clelemento classoverelementos" for="">'+'label:'+idagenerar+'</label>';
  }
  
  if(objmenucrearelementos.fecha==esteidconobjmenucrearelementos){ //cajaalfanumerica
    anchodefinitivo=79;
    alturarenglon=alturarenglon*1.1;
    iniciaconresize=true;
    linetipo="dotted";
    //creaesto=' <div id="'+idagenerar+'" class="clelemento classoverelementos">'+idagenerar+'</div>';
  
   // creaesto='<label id="'+idagenerar+'" class="clelemento classoverelementos" for="">'+'label:'+idagenerar+'</label>';
  }
  
  
  $(hoja).append(creaesto);
  var positionpadre= $("#"+"idtodo").position();
  var toppadre = positionpadre.top;
  var leftpadre = positionpadre.left;
  
  
  
  
  
  
  
    var objcss1={
      "position": "absolute",
    "top":String(ratondivy-toppadre)+"px",
    
    "left": String(ratondivx) +"px",
    "width": String(anchodefinitivo)+"px",
    "height":String(alturarenglon)+"px",
    //"background-color": "rgb(256,256,256,0)",
        
    "border-top":String(anchoborder)+unidadmedida+" "+ linetipo+" "+ colorline,
    "border-right":String(anchoborder)+unidadmedida+" "+ linetipo+" "+ colorline,
    "border-bottom":String(anchoborder)+unidadmedida+" "+ linetipo+" "+ colorline,
    "border-left":String(anchoborder)+unidadmedida+" "+ linetipo+" "+ colorline,
    "z-index":String(hijosconclelemento.length)
    }
    $("#"+idagenerar).css(objcss1);
    FGioarrastrarE(idagenerar,containeridcuerpoH);
    fGiovanniresizableE(idagenerar);
    if(iniciaconresize){
     // fGiovanniresizableE(idagenerar);
    }
    else{
      deshabilitarEresizable(idagenerar,true);
    }
  
    crearpropiedadesenelementos(idagenerar,1,2,3,4,5,6,7,8);
  /* $(".classoverelementos").mouseover(function () { 
    
  
  $("#"+this.id).css("background-color","rgb(81, 221, 135)");
  
  });
  
  $(".classoverelementos").mouseout(function () { 
    $("#"+this.id).css("background-color","rgb(81, 221, 135,0)");
  }); */
  
  
     }
    
     
    }
    
    
  
  
  
  
    function  entraremoveryaddelementoalmenucrear (elm) {
  
    
  
  
  /*     var selector="#"+elm.id;
      var esteestrin=String($(selector)[0].outerHTML);
    
    
     $(selector).remove();
  
     $("#divpadrelocal1").removeClass("pdivpadrelocal1"); */
     setTimeout(function (param) {  
    
     /*  $("#divpadrelocal1").append(esteestrin);
      $("#divpadrelocal1").addClass("pdivpadrelocal1");
      fgiovannisoltarElementodeMenuaHoja (elm.id,"idhoja1");
    
      
    addobjetoidentificadoresparaelementosmenuarrastrarenhoja (elm.id,   objmenucrearelementos.chequeonoexcluyente);
     */
  
  
     },200);
    
    /* 
  rrastra1" style="position: relative; left: -1px; top: -1px;">chequeo No Excluyente</span>
    */
   document.getElementById(elm.id).style.position="relative";
  
   document.getElementById(elm.id).style.left="-1px";
  
   document.getElementById(elm.id).style.top="-1px"; 
  
    }
  
  
  
  
  
  var intconshalturenglon=13;
  var topx=0;
    function Fgiovannicrearrenglones(selector){
      var informacion=61;
      var idrenglon="";
      selector="#"+selector;
      var elemnetpadre=document.getElementById(selector.replace("#",""));
      for(var i=0; i<=60;i=i+1){
        idrenglon="idrenglon"+String(i);
        idrenglon=idrenglon.replace(" ","");
        var esteren='<divid="'+idrenglon+'" class="clgrilladivrenglon">'+i+'</div>';
        var ctop=0;
      
        
        $(selector).append(esteren);
        $(elemnetpadre.lastChild).css(
          {
            "position": "absolute",
      "top": String(topx)+"px",
      "left": "0%",
      "width": "100%",
      "height": "13px",
          }
        );
        topx=topx+13;
      }
  
  
    }
  
  
  var ObjGiohojaactual=null;
  
  var objetopropiedadesFGioarrastrar={
      g:1
  }
  function fGiovanniElemento(id) {
      return $("#"+id);
    }
  function fGiovanniElementoN(id) {
      return document.getElementById(id);
    }
    function fGiovanniElementosClass(id) {
      return $("."+id);
    }
  
   
  function fgetEN (id) {
      return document.getElementById(id);
  }
  function fgetEClass (id) {
      return $("."+id);
  }
  function fgetEG (id) {
      return $("#"+id);
  }
  
  
  function FGioarrastrarC(selector,idct,objk=objetopropiedadesFGioarrastrar){
  
      $( "."+selector ).draggable({
              snap: false,
              disabled: false,
              containment: "#"+idct,
             // grid: [ 1, 1 ]
          });
        
  }
  
  function FGioarrastrarE(selector,idct,objk=objetopropiedadesFGioarrastrar){
  
      $( "#"+selector ).draggable({
          snap: false,
          disabled: false,
          containment: "#"+idct,
         // grid: [ 1, 1 ]
         drag:function name(a,b) {
          var apos= fGiovanniGetPos(b.helper[0].id)
       //   document.getElementById("idp").innerHTML="ratondivx "+apos.left+" "+apos.top;
         }
      });
    
  }
  function FGioarrastrarsimple(id){
  
    $( "#"+id ).draggable({
       
      
   
       drag:function name(a,b) {
  
        
       }
    });
  
  }
  function fGiovanniresizableC (selector){
  /*    $( selector ).resizable({
         // helper: "miclasscambiaformahelper",
          disabled: false,
          handles: "all",
     
          $( "#resizable" ).resizable();
          ghost: true,
          grid: [ 0, 0 ]
  
      });  */
  
      $( "."+selector ).resizable({
          handles: "all",
          disabled: false,
          grid: [ 0, 0 ]
      });
      
   /*    $(selector).resizable({
          helper: "ayuda"
      });
   */
     
  }
  
  function fGiovanniresizableE (selector){
      /*    $( selector ).resizable({
             // helper: "miclasscambiaformahelper",
              disabled: false,
              handles: "all",
         
              $( "#resizable" ).resizable();
              ghost: true,
              grid: [ 0, 0 ]
      
          });  */
      
          $( "#"+selector ).resizable({
              handles: "all",
              disabled: false,
              grid: [ 0, 0 ]
          });
          
       /*    $(selector).resizable({
              helper: "ayuda"
          });
       */
         
      }
  function fGiovanniidgrillahoja1(selector){
      var css1={
          "position": "absolute",
          "left": "0"+"%",
          "top": "0"+"%",
          "width": "100"+"%",
          "height": "100"+"%"
        //  "background-color": "dodgerblue",
      }
  
      $(selector).css({
          css1
      });
  }
  
  function ajustaridtodoycuerpo(absolute="absolute",p1=0,p2=0,backgroundcolor="rgba(0, 0, 0, 0)") {
  
  var wx=String(window.innerWidth)+"px";
  var hx=String(window.innerHeight)+"px";
  var eltop=String(p1)+"px";
  var elleft=String(p2)+"px";
    var css1={
      "position": absolute,
      "left": elleft,
      "top": eltop,
      "width": wx,
      "height": hx,
  "background-color": backgroundcolor,
  }
  
  $("#idtodo").css({
      css1
  });
  
    }
    function ajustaridtodoyhoja(absolute="absolute",p1=0,p2=0,backgroundcolor="rgba(0, 0, 0, 0)") {
  
      var wx=String(window.innerWidth)+"px";
      var hx=String(window.innerHeight)+"px";
      var eltop=String(p1)+"px";
      var elleft=String(290)+"px";
        var css1={
          "position": absolute,
          "left": elleft,
          "top": eltop,
          "width": wx,
          "height": hx,
      "background-color": backgroundcolor,
      }
      
      $("#idtodo").css({
          css1
      });
    
        }
  var cllasscssindicadorasoltarsoloestoselementosenhoja="clbocxpp";
  var objetocheckboxbordesyfijarresise={
    fijar:"idic7"
  };
  function fGiovanniCreaUdTodo(idpadre){
      var stidtodo='  <div id="idtodo">'+
      
      '<div id="idcuerpoH">'+
        '<div id="idhoja1" class="clhoja">'+
    
        '  <div id="idgrilla1" class="clgrilla"></div>'+
         ' <div id="idmargenesdiv1" class="clmargenesdiv">'+
           
         ' </div>'+
        '  <div id="el1" class="clelemento classoverelementos"></div>'+
      '  </div>'+
    
    
     ' </div>'+
      
      
    
  
  
    ' <div id="idmenubasico">'+
     '<p id="idp"></p>'+
         '<div id="idmtx1" class="clboxmin">'+
    ' <div class="clmc1">'+
    ' <div class="clmirow"><div id="idcrea1" gio="acagio" class="'+cllasscssindicadorasoltarsoloestoselementosenhoja+'">e</div></div>'+
     
  '   </div>'+
    ' <div class="clmc2"></div>'+
    '     </div>'+
     
    '   </div>'+
     
     
     '  <div id="idmenubordes">'+
      '   <input type="checkbox" name="" id="idic1" class="classchangecheck">'+
        ' <input type="checkbox" name="" id="idic2" class="classchangecheck">'+
       '  <input type="checkbox" name="" id="idic3" class="classchangecheck">'+
         '<input type="checkbox" name="" id="idic4" class="classchangecheck">'+
         '<input type="checkbox" name="" id="idic5" class="classchangecheck"> linea puntos'+
         '<input type="checkbox" name="" id="idic6" class="classchangecheck">'+
         '<input type="checkbox" name="" id="idic7" class="classchangecheck">fijar'+
         
       '</div>+'
     
    
    '</div>'; // fin de  todo idtodo
    
      $("body").prepend(stidtodo);
    }
    
    function fGiovanniesteElementoesarrastrarySoltarenHoja() {
  
      }
    function  fgiovanniaddClassaElemento(id,className) { 
  
      if(!$("#"+id).hasClass(className)){
        $("#"+id).addClass(className);
      
        
      }
    
      
      
     }
    function  fgiovanniremoveClassaElemento(id,className) {
  
      
      if($("#"+id).hasClass(className)){
        $("#"+id).removeClass(className);
      }
   
      
  
      }
  
  
  //////////// fin demis funciones
  
  
  var _this;
  
  function  DiagramadorCOREgio(){
  this.hojaActualE=ObjGiohojaactual;
  this.IndicadorSoltarSoloEnHojasCL=cllasscssindicadorasoltarsoloestoselementosenhoja;
  _this=this;
  this.propiedadesVisuales=propiedaeselementos;
  this.IDpropiedades= objetocheckboxbordesyfijarresise;
  this.objmenucrearelementos=objmenucrearelementos;
  this.menuArrastrarCrerESoltarHoja=(idElemendemenu,objmenucrearelementosx)=>{
    addobjetoidentificadoresparaelementosmenuarrastrarenhoja (idElemendemenu,objmenucrearelementosx);
   
  } 
  this.getPropiedad=(a,b)=>{
    return damepropiedaeselmentos(a,b)
  }
  this.fDianConcatenar=()=>{
    console.log("gio concatenar");
    objetocheckboxbordesyfijarresise=this.IDpropiedades;
  }
  
  this. activarDianConcatenar=()=>{
    fGiovanniCheckmenuboder();
  }
  
  this.activosElemntos=function(_thisscomppnenteAngular,callback){
  
  segundaseleecionelementosenhoja(_thisscomppnenteAngular,callback);
  
    //actualelementoactivo;
  }
  this.setobjmenucrearelementos=()=>{
    objmenucrearelementos=  this.objmenucrearelementos;
    
    }  
    this.getobjmenucrearelementos=()=>{
      this.objmenucrearelementos= objmenucrearelementos;
    return  this.objmenucrearelementos;
      
      }  
  this.pasarclass=function(idEl,classid){
  
    fgiovanniaddClassaElemento(idEl,classid);
  
  }
  this.ajustarEspacioCuerpoHoja=(p1,p2,p3,p4)=>{
    ajustaridtodoycuerpo(p1,p2,p3,p4);
  }
  this.quitarclass=function(idEl,classid){
    fgiovanniremoveClassaElemento(idEl,classid);
    
    }
  this.setIndicadorSoltarSoloEnHojasCL=function(classcc){
    cllasscssindicadorasoltarsoloestoselementosenhoja=classcc;
     _this.IndicadorSoltarSoloEnHojasCL=cllasscssindicadorasoltarsoloestoselementosenhoja;
  }
  this.getIndicadorSoltarSoloEnHojasCL=function(classcc){
    _this.IndicadorSoltarSoloEnHojasCL=cllasscssindicadorasoltarsoloestoselementosenhoja;
    return cllasscssindicadorasoltarsoloestoselementosenhoja;
  }
  this.Coordenadasratoneneldiv=function name(id) {
      fGiovanniCoordenadasratoneneldiv(id);
  }
  this.ajustaridcuerpoHconwith=function () {
      fGiovanniajustaridcuerpoHconinnerWidth();
    }
  this.crearrenglones=function(id){
      Fgiovannicrearrenglones(id);
  }
  
  this.cambiarPadreALCueropodeHojas=function(idpadre){
    fgiovannidarpadrealidtodoHoja(idpadre)
  }
  
  this.getElementoGio=function (id) { 
     return fGiovanniElemento(id);
   }
   this.getElementosClass=function (id) { 
      return fGiovanniElementosClass(id);
    }
   
   this.getElementoN=function (id) { 
      return fGiovanniElementoN(id);
    }
      this.arrastrarC=function(s,idct,obj){
          FGioarrastrarC(s,idct,obj);
      }
  
      this.arrastrarE=function(s){
          FGioarrastrarE(s);
      } 
      this.cambiarAnchoyAltoEconRaton=function(s){
          fGiovanniresizableC(s);
      }
  this.menubasico=function (idcrea1,idhoja1) {
      menubassico(idcrea1,idhoja1);
  }
  
  this.getECL=function (cl) {
     return fGiovanniGetElementosporClass(cl); 
  }
  
  this.arrastrarSimple=function(id){
    FGioarrastrarsimple(id);
  }
  this.menuElementoArrastrarSoltarenHoja=function (idelemento,idhoja,clidparasoltar){
  
  
  fgiovannisoltarElementodeMenuaHoja (idelemento,idhoja,clidparasoltar);
  }
  this.inicia=function(idpadrecuerpoHojas){
     
      fGiovanniCreaUdTodo();
      this.crearrenglones("idgrilla1");
      this.hojaActualE=ObjGiohojaactual;
  
      setTimeout(function () {
   //_this. menuElementoArrastrarSoltarenHoja ("idcrea1","idhoja1");
          _this.Coordenadasratoneneldiv("idcuerpoH");  
      
          encrearhoja("idhoja1");
  
  
  
  
         _this.cambiarPadreALCueropodeHojas(idpadrecuerpoHojas);
  
   document.getElementById("idmenubasico").style.display="none";
      },1000);
  }
  
  this.ajustaridcuerpoHconwith();
  }
  
  
  $(document).ready(function () {
    colocarnuevocss();
  
   
  /*   document.onkeydown=(e)=>{
    
      if(e.key==""){
  
        document.getElementById("idpantallaxml").style. display=="flex";
      }
    } */
  
  
  
  
  
  
  });
  
  
  function anadirpdfyxml(){
  
  
    var content='<div id="idpantallaxml"> <div id="idmenusimplexml"> <input placeholder="urlXML" id="idurlxml" type="text"> <button id="idbotonokxml">OK</button> </div> <div id="idmostrarxml"></div> <div id="idbtcerrar">X</div> </div>'
    $("body").append(content);
    
    $("#idbtcerrar").click(function (e) { 
      menucerrarxml();
    
    });
    
    $("#idbotonokxml").click(function (e) { 
    okbtxmlsi();
      
    });
    document.getElementById("idpantallaxml").style. display="none";
    var conten2=' <div id="idbtmostrarmenuxmlsi">xml</div>';
    $("body").append(conten2);
    
    var conten2=' <div id="idimprimir">pdf</div>';
    $("body").append(conten2);
    
    
    $("#idbtmostrarmenuxmlsi").click(function (e) { 
    
      document.getElementById("idpantallaxml").style. display="flex";
      document.getElementById("idbtmostrarmenuxmlsi").style.display="none";
    });
    
    $("#idimprimir").click(function (e) { 
    
      $('#idhoja1').printElement({
      });
    });
  }
  var boolmuestrmenuxml=true;
  function menucerrarxml(){
  /* if(boolmuestrmenuxml){
    boolmuestrmenuxml=!boolmuestrmenuxml;
    document.getElementById("idpantallaxml").style. display="flex";
  
  }
  else{
    boolmuestrmenuxml=!boolmuestrmenuxml;
    document.getElementById("idpantallaxml").style. display="none";
  } */
  document.getElementById("idpantallaxml").style.display="none";
  document.getElementById("idbtmostrarmenuxmlsi").style.display="block";
  
  }
  
  function okbtxmlsi() {  
  var sturl=document.getElementById("idurlxml").value;
  urlxmlensayo="./assets/este.xml";
  if(sturl!=""){
    urlxmlensayo=sturl;
    llamadajaxxml();
  
  }
  else{
  
    llamadajaxxml();
  
  }
  }
  var urlxmlensayo="";
  var aaraydefformulario=[];
  function llamadajaxxml () {
  try {
    
  
  
    $.ajax({
    url:urlxmlensayo, //'./este.xml',
    dataType: 'xml',
    error: function (xhr) {
     // urlxmlensayo= "https://localdxmlguard.github.io/xmleste/este.xml";
    //  alert("no se  encontro xml en " +urlxmlensayo);
     // llamadajaxxml();
  },
    success: function(response) {
     var   json =$.xml2json(response);//JSON.parse( $.xml2json(response));
     var id1="";
  var fFORMULARIO=null;
  aaraydefformulario=[];
     for(var i in json){
      console.log(i);
      id1=i;
  
  fFORMULARIO=json[i].FORMULARIO;
  
  for(var i in fFORMULARIO){
  
    aaraydefformulario.push(fFORMULARIO[i]);
  }
     
  
     }
     console.log(fFORMULARIO);
    console.log(aaraydefformulario);
      //  document.getElementById("idurlxml").innerHTML=json;
        ecrea(json );
    }
  });
  } catch (error) {
    alert(error);
  }
  
  }
  function ecrea(cleanScript ) {
    document.getElementById("idmostrarxml").innerHTML="";
    var jsonse = JSON.stringify(cleanScript);
    //document.getElementById("idt").value=jsonse;
    var myJSON = JSON.stringify(aaraydefformulario);
    document.getElementById("idmostrarxml").innerHTML=jsonse;
  /* var blob = new Blob([jsonse], {type: "application/json"});
  var url  = URL.createObjectURL(blob);
  
  var a = document.createElement('a');
  var idxx="tempa";
  a.id=idxx;
  a.href        = url;
  a.download    = "fxml.json";
  a.textContent = "Download fxml.json";
  
  document.getElementById('idpantallaxml').appendChild(a);
  //a.click();
  $(a).remove(); */
  }