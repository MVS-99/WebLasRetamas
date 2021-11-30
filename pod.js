var ctrlr=0;
var ctrl;
[].forEach.call(document.querySelectorAll('.podSlide'), function (el) {
    el.style.visibility = 'hidden';
});
document.getElementById('prim').style.visibility = 'visible'
var hover0 = document.querySelector('.hover0pod');
var hover1 = document.querySelector('.hover1pod');
var hover2 = document.querySelector('.hover2pod');
var hover3 = document.querySelector('.hover3pod');
var hover4 = document.querySelector('.hover4pod');
var linehove = document.querySelector('.barhoverpod');
var arrhover = [hover0,hover1,hover2,hover3,hover4];


window.addEventListener('load', function() {
    var arrowl11 = document.querySelector('#arrowl11');
    var arrowr11 = document.querySelector('#arrowr11');
    arrowr11.addEventListener('click', function() {
      console.log('Arrowr activado');
      
      [].forEach.call(document.querySelectorAll('.podSlide'), function (el) {
        el.style.visibility = 'visible';
        });
      //Update control
      if(ctrlr==4){
        ctrlr=0;
      }
      else{
        ctrlr++;
      }

      //Hover
    for(var i=0; i<=4;i++){
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
      var slider = document.querySelector('.sliderPod');
      for(var i=0; i<=4 ; i++){
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
    arrowl11.addEventListener('click', function() {
      if(ctrlr==0){
          [].forEach.call(document.querySelectorAll('.podSlide'), function (el) {
            el.style.visibility = 'visible';
          });
          ctrlr=4;
        }
      else{
        ctrlr--;
      }
      //Hover
      for(var i=0; i<=4;i++){
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
      var slider = document.querySelector('.sliderPod');
      for(var i=0; i<=4 ; i++){
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