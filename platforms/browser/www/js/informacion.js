
var ruta="http://localhost/Componente_Web_Nucleo/php/";
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady()
{

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
      $('#nav').hide();
       $('#cont1').hide();
}


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
                $(lugar).html("lo sentimos no estas conectado con el servidor");

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
                $(lugar).html("lo sentimos no estas conectado con el servidor");

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
                $(lugar).html("lo sentimos no estas conectado con el servidor");
            }
        });
}
function programacion(url,peti,lugar,dato,dia)
{
  $(lugar).html("<img src='img/carga.gif'>");
    $.ajax({
            type: 'post',
            url: ruta+""+url,
            data: {peticion:peti,dato:dato,dia:dia},
            dataType: "html",
            success: function(data) {
            $(lugar).html(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $(lugar).html("lo sentimos no estas conectado con el servidor");

            }
        });
}
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
 consultas("MainActividades.php",7,"#pro_mar","Martes");
  $('#pro_mar').show('slow/400/fast');
})
$('#mar_sim').on('tap',function()
{ 
  $('#simpro-chair1').show('slow/400/fast');
 orden("MainSimposio.php",8,"#pro_mar");
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
  programacion("MainPaper.php",7,'#compumier',1,"Miercoles");
  programacion("MainPaper.php",7,'#arquimier',2,"Miercoles");
  programacion("MainPaper.php",7,'#ingemier',3,"Miercoles");
  programacion("MainPaper.php",7,'#intermier',4,"Miercoles");
  programacion("MainPaper.php",7,'#procesmier',5,"Miercoles");
  programacion("MainPaper.php",7,'#sistemmier',6,"Miercoles");
  programacion("MainPaper.php",7,'#informier',7,"Miercoles");
  programacion("MainPaper.php",7,'#rendimier',8,"Miercoles");
  programacion("MainPaper.php",7,'#datosmier',9,"Miercoles");
  programacion("MainPaper.php",7,'#colamier',10,"Miercoles");
  $('#progra').show('slow/400/fast');
})
$('#mier_tuto').on('tap',function()
{
  $('#progra').hide();
  consultas("Main.php",7,'#pro_miercoles',"Jueves");
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
  programacion("MainPaper.php",7,'#compujue',1,"Jueves");
  programacion("MainPaper.php",7,'#arquijue',2,"Jueves");
  programacion("MainPaper.php",7,'#ingejue',3,"Jueves");
  programacion("MainPaper.php",7,'#interjue',4,"Jueves");
  programacion("MainPaper.php",7,'#procesjue',5,"Jueves");
  programacion("MainPaper.php",7,'#sistemjue',6,"Jueves");
  programacion("MainPaper.php",7,'#inforjue',7,"Jueves");
  programacion("MainPaper.php",7,'#rendijue',8,"Jueves");
  programacion("MainPaper.php",7,'#datosjue',9,"Jueves");
  programacion("MainPaper.php",7,'#colajue',10,"Jueves");
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
  programacion("MainPaper.php",7,'#compuvier',1,"Viernes");
  programacion("MainPaper.php",7,'#arquivier',2,"Viernes");
  programacion("MainPaper.php",7,'#ingevier',3,"Viernes");
  programacion("MainPaper.php",7,'#intervier',4,"Viernes");
  programacion("MainPaper.php",7,'#procesvier',5,"Viernes");
  programacion("MainPaper.php",7,'#sistemvier',6,"Viernes");
  programacion("MainPaper.php",7,'#inforvier',7,"Viernes");
  programacion("MainPaper.php",7,'#rendivier',8,"Viernes");
  programacion("MainPaper.php",7,'#datosvier',9,"Viernes");
  programacion("MainPaper.php",7,'#colavier',10,"Viernes");
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
