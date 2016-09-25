
var ruta="http://www.unimayor.edu.co/11cccadmin/php/";
//
function onDeviceReady()
{
 
  $('#contenidonovedad').hide();
  novedades();
   orden("Main.php",6,"#lista");
    ordensim("MainSimposio.php",5,"#pro_mar","Doctoral");
    ordensim("MainSimposio.php",5,"#listaSimpo","Doctoral");
    consultas("MainPlenaria.php",6,"#pro_mar","Martes");
    consultas("MainPlenaria.php",6,"#pro_miercoles","Miercoles");
    consultas("MainPlenaria.php",6,"#pro_jueves","Jueves");
    consultas("MainPlenaria.php",6,"#pro_viernes","Viernes");
    $('#sim-chair2').hide('slow/400/fast');
    $('#simpro-chair1').hide('slow/400/fast');
    $('#simpro-chair2').hide('slow/400/fast');
      $('#progra').hide();
      $('#prograjueves').hide();
      $('#prograviernes').hide();
       $('#rutafup').hide();
      $('#nav').hide();
       $('#piso2').hide();
       $('#cont1').hide();
}
$('.carga').on('tap',function(){
   novedades();
})


function ordensim(url,peti,lugar,tipo)
{
 
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,tipo:tipo},
            dataType: "html",
            success: function(data) {
                 $(lugar).html(data);           
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}
function orden(url,peti,lugar)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti},
            dataType: "html",
            success: function(data) {
                $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}

function consultas(url,peti,lugar,dato)
{
    $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato},
            dataType: "html",
            success: function(data) {
            $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");
            }
        });
}
function programacion(url,peti,lugar,dato,dia,btn_oculto)
{
  $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato,dia:dia},
            dataType: "html",
            success: function(data) {
            if (data) 
            {
              $(lugar).html(data);
            }else
            {
              $(btn_oculto).hide('slow/400/fast');
            }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("<div class='adver'> :( NO ESTAS CONECTADO CON EL SERVIDOR INTENTA CONECTANDOTE A INTERNET. :(</div>");

            }
        });
}
function novedades()
{
   $('#novedades').html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+"Mainnovedades.php",
            data: {peticion:6},
            dataType: "html",
            success: function(data) {
               if (data) 
               {
                $('#contenidonovedad').show();
                 $('#novedades').html(data);
               }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $('#novedades').html("lo sentimos no estas conectado con el servidor");

            }
        });

}
$('#mapa1').on('tap',function(){
  $('#piso2').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso1').show('slow/400/fast');
})
$('#mapa2').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').hide('slow/400/fast');
  $('#piso2').show('slow/400/fast');
})
$('#fup').on('tap',function(){
  $('#piso1').hide('slow/400/fast');
  $('#rutafup').show('slow/400/fast');
  $('#piso2').hide('slow/400/fast');
})
//plenarias
$('#btn_plenaria').on('tap',function(){
  consultas("MainPlenaria.php",6,"#listamartes","Martes");
    consultas("MainPlenaria.php",6,"#listamiercoles","Miercoles");
    consultas("MainPlenaria.php",6,"#listajueves","Jueves");
    consultas("MainPlenaria.php",6,"#listaviernes","Viernes");
})
//consultas
$('#actividades-btn').on('tap',function()
{
  orden("MainActividades.php",6,"#listaactiv");
})
  //tutoriales
$('#tutorial-btn').on('tap',function()
{
  orden("Main.php",6,"#lista");
})
//simposio
$('simposio-btn').on('tap',function()
{
   orden("MainSimposio.php",8,"#listaSimpo");
})
//programacion martes
$('#programrt').on('tap',function(){
  $('#nav').hide();
   consultas("MainActividades.php",7,"#pro_mar","Martes");
})
$('#activ_mar').on('tap',function()
{ 
 $('#simpro-chair1').hide('slow/400/fast');
    $('#simpro-chair2').hide('slow/400/fast');
  $('#nav').hide('slow/400/fast');

 consultas("MainActividades.php",7,"#pro_mar","Martes");
  $('#pro_mar').show('slow/400/fast'); 
})
$('#mar_sim').on('tap',function()
{ 
  $('#simpro-chair1').show('slow/400/fast');
ordensim("MainSimposio.php",5,"#pro_mar","Doctoral");
  $('#nav').show('slow/400/fast');
})

//programación miercoles
$('#programrc').on('tap',function(){
  $('#progra').hide();

consultas("MainPlenaria.php",6,"#pro_miercoles","Miercoles");
})
$('#mier_ple').on('tap',function()
{ $('#progra').hide();

consultas("MainPlenaria.php",6,"#pro_miercoles","Miercoles");
  $('#pro_miercoles').show('slow/400/fast');
})
$('#mier_activ').on('tap',function()
{ 
   $('#progra').hide();
 consultas("MainActividades.php",7,"#pro_miercoles","Miercoles");
  $('#pro_miercoles').show('slow/400/fast');
})
$('#mier_line').on('tap',function()
{
  
  $('#pro_miercoles').hide();
  programacion("MainPaper.php",7,'#compumier',1,"Miercoles","#colap_me1");
  programacion("MainPaper.php",7,'#arquimier',2,"Miercoles","#colap_si1");
  programacion("MainPaper.php",7,'#ingemier',3,"Miercoles","#colap_in1");
  programacion("MainPaper.php",7,'#intermier',4,"Miercoles","#colap_ih1");
  programacion("MainPaper.php",7,'#procesmier',5,"Miercoles","#colap_pi1");
  programacion("MainPaper.php",7,'#sistemmier',6,"Miercoles","#colap_sig1");
  programacion("MainPaper.php",7,'#informier',7,"Miercoles","#colap_ie1");
  programacion("MainPaper.php",7,'#rendimier',8,"Miercoles","#colap_sd1");
  programacion("MainPaper.php",7,'#datosmier',9,"Miercoles","#colap_di1");
  programacion("MainPaper.php",7,'#colamier',10,"Miercoles","#colap_sc1");
  $('#progra').show('slow/400/fast');
})
$('#mier_tuto').on('tap',function()
{
  $('#progra').hide();
  consultas("Main.php",7,'#pro_miercoles',"Miercoles");
    $('#pro_miercoles').show('slow/400/fast');
})

//programación jueves
$('#prograjve').on('tap',function(){
  $('#prograjueves').hide();
consultas("MainPlenaria.php",6,"#pro_jueves","Jueves");
})

$('#jue_ple').on('tap',function()
{ $('#prograjueves').hide();
consultas("MainPlenaria.php",6,"#pro_jueves","Jueves");
  $('#pro_jueves').show('slow/400/fast');
})
//actividades sociales del dia 
$('#jue_activ').on('tap',function()
{ 
   $('#prograjueves').hide();
 consultas("MainActividades.php",7,"#pro_jueves","Jueves");
  $('#pro_jueves').show('slow/400/fast');
})
//lineas temeaticas del dia
$('#jue_line').on('tap',function()
{
  $('#pro_jueves').hide();
  programacion("MainPaper.php",7,'#compujue',1,"Jueves","#colap_me2");
  programacion("MainPaper.php",7,'#arquijue',2,"Jueves","#colap_si2");
  programacion("MainPaper.php",7,'#ingejue',3,"Jueves","#colap_in2");
  programacion("MainPaper.php",7,'#interjue',4,"Jueves","#colap_ih2");
  programacion("MainPaper.php",7,'#procesjue',5,"Jueves","#colap_pi2");
  programacion("MainPaper.php",7,'#sistemjue',6,"Jueves","#colap_sig2");
  programacion("MainPaper.php",7,'#inforjue',7,"Jueves","#colap_ie2");
  programacion("MainPaper.php",7,'#rendijue',8,"Jueves","#colap_sd2");
  programacion("MainPaper.php",7,'#datosjue',9,"Jueves","#colap_di2");
  programacion("MainPaper.php",7,'#colajue',10,"Jueves","#colap_sc2");
   $('#prograjueves').show('slow/400/fast');
})
$('#jue_tuto').on('tap',function()
{
  $('#prograjueves').hide();
  consultas("Main.php",7,'#pro_jueves',"Jueves");
    $('#pro_jueves').show('slow/400/fast');
})

//programacion viernes
$('#progravnr').on('tap',function(){
  $('#prograviernes').hide();
consultas("MainPlenaria.php",6,"#pro_viernes","Viernes");
})
$('#vier_ple').on('tap',function()
{ $('#prograviernes').hide();
consultas("MainPlenaria.php",6,"#pro_viernes","Viernes");
  $('#pro_viernes').show('slow/400/fast');
})
//actividades sociales del dia
$('#vier_activ').on('tap',function()
{ 
   $('#prograviernes').hide();
 consultas("MainActividades.php",7,"#pro_viernes","Viernes");
  $('#pro_viernes').show('slow/400/fast');
})
//lineas tematicas del dia
$('#vier_line').on('tap',function()
{
  $('#pro_viernes').hide();
  programacion("MainPaper.php",7,'#compuvier',1,"Viernes","#colap_me3");
  programacion("MainPaper.php",7,'#arquivier',2,"Viernes","#colap_si3");
  programacion("MainPaper.php",7,'#ingevier',3,"Viernes","#colap_in3");
  programacion("MainPaper.php",7,'#intervier',4,"Viernes","#colap_ih3");
  programacion("MainPaper.php",7,'#procesvier',5,"Viernes","#colap_pi3");
  programacion("MainPaper.php",7,'#sistemvier',6,"Viernes","#colap_sig3");
  programacion("MainPaper.php",7,'#inforvier',7,"Viernes","#colap_ie3");
  programacion("MainPaper.php",7,'#rendivier',8,"Viernes","#colap_sd3");
  programacion("MainPaper.php",7,'#datosvier',9,"Viernes","#colap_di3");
  programacion("MainPaper.php",7,'#colavier',10,"Viernes","#colap_sc3");
   $('#prograviernes').show('slow/400/fast');
})

$('#vier_tuto').on('tap',function()
{
  $('#prograviernes').hide();
  consultas("Main.php",7,'#pro_viernes',"Viernes");
    $('#pro_viernes').show('slow/400/fast');
})
//speakers
$('#sp1').on('tap',function(){
   $('p .desactivado').toggleClass('activado');
})

//simposio
$('#docto_pro').on('tap',function(){
  $('#simpro-chair2').hide('slow/400/fast');
  $('#simpro-chair1').show('slow/400/fast');
   ordensim("MainSimposio.php",5,"#pro_mar","Doctoral");
})
$('#maes_pro').on('tap',function(){
  $('#simpro-chair1').hide('slow/400/fast');
  $('#simpro-chair2').show('slow/400/fast');
  ordensim("MainSimposio.php",5,"#pro_mar","Maestria");
})

$('#docto').on('tap',function(){
  $('#sim-chair2').hide('slow/400/fast');
  $('#sim-chair1').show('slow/400/fast');
   ordensim("MainSimposio.php",5,"#listaSimpo","Doctoral");
})
$('#maes').on('tap',function(){
   $('#sim-chair1').hide('slow/400/fast');
  $('#sim-chair2').show('slow/400/fast');
   ordensim("MainSimposio.php",5,"#listaSimpo","Maestria");
})

//lineas tematicas
$('#btn_linea1').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea1",1);
})
$('#btn_linea2').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea2",2);
})
$('#btn_linea3').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea3",3);
})
$('#btn_linea4').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea4",4);
})
$('#btn_linea5').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea5",5);
})
$('#btn_linea6').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea6",6);
})
$('#btn_linea7').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea7",7);
})
$('#btn_linea8').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea8",8);
})
$('#btn_linea9').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea9",9);
})
$('#btn_linea10').on('tap',function(){
  consultas("MainPaper.php",6,"#listalinea10",10);
})
