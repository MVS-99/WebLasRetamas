var counter=1;
var ctrlr=0;
var btnfrmo = document.querySelector('#ocheck');
var btnfrmp = document.querySelector('#pcheck');

window.addEventListener('load', function() {
  btnfrmo.checked = false;
  btnfrmp.checked = false;
});

btnfrmo.addEventListener('click',function(){
  btnfrmp.checked = false;
});

btnfrmp.addEventListener('click',function(){
  btnfrmo.checked = false;
});

//Wait time for the first slider (automatic)
setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter>3){
        counter=1
      }
},5000);

//Second slider
window.addEventListener('load', function() {
  var arrowl1 = document.querySelector('#arrowl1');
  var arrowr1 = document.querySelector('#arrowr1')
  arrowr1.addEventListener('click', function() {
    console.log('Arrowr activado')
    if(ctrlr==3){
      ctrlr=0;
    }
    else{
      ctrlr++;
    }
    var slider = document.querySelector('.slides2');
    for(var i=0; i<=3 ; i++){
      ctrl = slider.classList.contains('shownext' + i);
      if(i==ctrlr){
        slider.classList.toggle('shownext'+ i);
      }
      else{
        if(ctrl){
          slider.classList.toggle('shownext'+ i);
        }
      }
    }
  });
  arrowl1.addEventListener('click', function() {
    if(ctrlr==0){
      ctrlr=3;
    }
    else{
      ctrlr--;
    }
    var slider = document.querySelector('.slides2');
    for(var i=0; i<=3 ; i++){
      ctrl = slider.classList.contains('shownext' + i);
      if(i==ctrlr){
        slider.classList.toggle('shownext'+ i);
      }
      else{
        if(ctrl){
          slider.classList.toggle('shownext'+ i);
        }
      }
    }
  });
});
 // Definimos la función que filtrará los caractéres
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

//Usamos la función para restringir números 

setInputFilter(document.getElementById("cap"), function(value) {
  return /^-?\d*$/.test(value); 
});

var TextMessage = 'Describa su consulta aquí';
function SetMsg (txt, active) {
    if (txt == null) return;
    
    if (active) {
        if (txt.value == TextMessage) txt.value = '';
    } else {
        if (txt.value == '') txt.value = TextMessage;
    }
}

window.onload=function() { SetMsg(document.getElementById('TxtareaInput', false));}

/* function detectFailure(event){
  var ctrlform = true;
  $("inputbox").removeclass("input-error");

  var client = $(".nombrein").val();
  var clientemail = $(".correoin").val();
  var clientodont = $("#locheck").val();
  var clientpod = $("#lpcheck").val();
  var msg = $(".mensajein").val();
  var priv = $(".btnpriv").val();

  if(client == ""){
    $("nombrein").addClass("input-error");
    ctrlform = false;
  }

  if(clientemail = ""){
    $("correoin").addclass("input-error");
    ctrlform = false;
  }

  if(clientodont == null && clientpod == null){
    window.alert("Debe seleccionar la modalidad de su consulta (Podología u Odontología)");
    ctrlform = false;
  }

  if(msg=""){
    $("mensajein").addclass("input-error");
    ctrlform = false;
  }

  if(priv=""){
    windows.alert("Para poder enviarnos su consulta, debe aceptar los terminos de nuestra política de privacidad");
    ctrlform = false;
  }

  return ctrlform;

}*/

$("body").on("click","label",function(e){
  var getValue = $(this).attr("for");
  var goToParent = $(this).parents(".buttonsform");
  var getInputRadio = goToParent.find("input[id = " + getValue + "]");
  console.log(getInputRadio.attr("id"));
});