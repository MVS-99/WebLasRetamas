//slider
var ctrlr=0;
[].forEach.call(document.querySelectorAll('.odontSlide'), function (el) {
  el.style.visibility = 'hidden';
});
document.getElementById('prim').style.visibility = 'visible'
var hover0 = document.querySelector('.hover0');
var hover1 = document.querySelector('.hover1');
var hover2 = document.querySelector('.hover2');
var hover3 = document.querySelector('.hover3');
var hover4 = document.querySelector('.hover4');
var hover5 = document.querySelector('.hover5');
var linehove = document.querySelector('.barhover');
var arrhover = [hover0,hover1,hover2,hover3,hover4,hover5];


window.addEventListener('load', function() {
  var arrowl11 = document.querySelector('#arrowl11');
  var arrowr11 = document.querySelector('#arrowr11');
  arrowr11.addEventListener('click', function() {
    [].forEach.call(document.querySelectorAll('.odontSlide'), function (el) {
      el.style.visibility = 'visible';
    });
    //Update control
    if(ctrlr==5){
      ctrlr=0;
    }
    else{
      ctrlr++;
    }
    //Hover
    for(var i=0; i<=5;i++){
      var ctrl = linehove.classList.contains('nexthov'+ i);
      ctrl_hove = arrhover[i].classList.contains('bluetint');
      if(i == ctrlr){
        arrhover[i].classList.toggle('bluetint');
        linehove.classList.toggle('nexthov' + i);
      }
      else{
        if(ctrl && ctrl_hove){
          arrhover[i].classList.toggle('bluetint');
          linehove.classList.toggle('nexthov' + i);
        }
      }
    }
    //Slider
    var slider = document.querySelector('.sliderOdont');
    for(var i=0; i<=5 ; i++){
      ctrl = slider.classList.contains('shownext' + i);
      if(i==ctrlr){
        console.log('Arrowr activado');
        slider.classList.toggle('shownext'+ i);
      }
      else{
        if(ctrl){
          slider.classList.toggle('shownext'+ i);
        }
      }
    }
  });
  arrowl11.addEventListener('click', function() {
    [].forEach.call(document.querySelectorAll('.odontSlide'), function (el) {
      el.style.visibility = 'visible';
    });
    //Update control
    if(ctrlr==0){
      ctrlr=5;
    }
    else{
      ctrlr--;
    }
    //Hover
    for(var i=0; i<=5;i++){
      var ctrl = linehove.classList.contains('nexthov'+ i);
      if(i == ctrlr){
        
        linehove.classList.toggle('nexthov' + i);
      }
      else{
        if(ctrl){
          linehove.classList.toggle('nexthov' + i);
        }
      }
    }
    //Slider
    var slider = document.querySelector('.sliderOdont');
    for(var i=0; i<=5 ; i++){
      var ctrl = slider.classList.contains('shownext' + i);
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

