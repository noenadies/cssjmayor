

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
    var color=colo;
    var unidadpx=unidadp;
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
  "width":String(widthx*conversionunidad)+unidadpx,
  "height":String(heightx*conversionunidad)+unidadpx,
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
  
    deshabilitarEresizable(actualelementoactivo.id,true);
  }
  
  console.log(vaconlineapunteada);
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
    $(selector).click(function (e) { 
      $("*").removeClass(varclassgiovanniselecion);
  
      
        actualelementoactivo=e.target;
     
        
  
        $(actualelementoactivo).addClass(varclassgiovanniselecion);
  });
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
    
          
       var objcss1={
      "position": "absolute",
    "top":"0px",
    
    "left": "0px",
    //"width": "80px",
    //"height": "22px",
    //"background-color": "rgb(56, 49, 121)",
    //"z-index":String(hijosconclelemento.length)
    }
          $("#"+ui.helper[0].id).css(objcss1);
        },
        drag: function( event, ui ) {
    
        }
      });
      $( "#idhoja1" ).droppable({
        accept: ".clbocx",
          drop: function( event, ui ) {
    alert("no funciona gio");
            console.log(ui);
      
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
    
  
  
    function deshabilitarEresizable(id, hablitar){
      $( "#"+id).resizable({
        disabled: hablitar
      });
    }
    function habilitarEresizable(id, hablitar){
      $( "#"+id).resizable({
        disabled: hablitar,
        handles: "all",
        grid: [ 0, 0 ]
      });
    }
  
    function fgiovannisoltarElementodeMenuaHoja(draggablex,droppable,clid=cllasscssindicadorasoltarsoloestoselementosenhoja){
  
      
    
      $( "#"+draggablex ).draggable({
        stop: function( event, ui ) {
    
          
       var objcss1={
      "position": "absolute",
    "top":"0px",
    
    "left": "0px",
    //"width": "80px",
    //"height": "22px",
    //"background-color": "rgb(56, 49, 121)",
    //"z-index":String(hijosconclelemento.length)
    }
          $("#"+ui.helper[0].id).css(objcss1);
        },
        drag: function( event, ui ) {
    
        }
      });
      $( "#"+droppable ).droppable({
        accept: "."+clid,
          drop: function( event, ui ) {
    
            console.log(ui.draggable[0]);
         
            
   
        
            
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
    var objmenucrearelementos={chequeoexcluyente:"chequeoexcluyente"}
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
  
    
    $(hoja).append(creaesto);
    var positionpadre= $("#"+"idtodo").position();
    var toppadre = positionpadre.top;
    var leftpadre = positionpadre.left;
  
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
  console.log(elementodelmenucrearNativo.id);
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
    if(iniciaconresize){
      fGiovanniresizableE(idagenerar);
    }
    else{
      deshabilitarEresizable(idagenerar,true);
    }
  
  
  $(".classoverelementos").mouseover(function () { 
    
  
   /* background-color: rgb(81, 221, 135); */
    
  
  $("#"+this.id).css("background-color","rgb(81, 221, 135)");
  
  });
  
  $(".classoverelementos").mouseout(function () { 
    $("#"+this.id).css("background-color","rgb(81, 221, 135,0)");
  });
  
  
     }
    
     
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
          document.getElementById("idp").innerHTML="ratondivx "+apos.left+" "+apos.top;
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
  var cllasscssindicadorasoltarsoloestoselementosenhoja="clbocx";
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
         '<input type="checkbox" name="" id="idic5" class="classchangecheck">'+
         '<input type="checkbox" name="" id="idic6" class="classchangecheck">'+
         
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
  
  this.objmenucrearelementos=objmenucrearelementos;
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
      console.log("idpadrecuerpoHojasidpadrecuerpoHojasidpadrecuerpoHojas");
      console.log(idpadrecuerpoHojas);
      setTimeout(function () {
   //_this. menuElementoArrastrarSoltarenHoja ("idcrea1","idhoja1");
          _this.Coordenadasratoneneldiv("idcuerpoH");  
          fGiovanniCheckmenuboder();
          encrearhoja("idhoja1");
  console.log("idpadrecuerpoHojasidpadrecuerpoHojasidpadrecuerpoHojas 22222222222");
  console.log(idpadrecuerpoHojas);
  
  
         _this.cambiarPadreALCueropodeHojas(idpadrecuerpoHojas);
      },1000);
  }
  
  this.ajustaridcuerpoHconwith();
  }
  
  
  