
window.onscroll=function () {

var menu=document.querySelector('.main_menu');
var cont = document.querySelector('.leftPart');
 var menuQuardinats = menu.getBoundingClientRect().bottom;
 var hdq = document.querySelector('.container').getBoundingClientRect().top;
 var btlc = document.querySelector('.bottom_leftCont');



 var nope= document.getElementsByClassName('nope');
 var phone = document.querySelector('.third_header_item');






   if (window.pageYOffset==0) {

    for (var i = 0; i < nope.length; i++) {
      nope[i].classList.remove('hide');
    }

    phone.classList.remove('fixed');

  }

  if (window.pageYOffset>menuQuardinats) {

    menu.classList.add('fixedMenu');
    cont.classList.add('flexend');

  for (var i = 0; i < nope.length; i++)
   {nope[i].classList.add('hide');}

         phone.classList.add('fixed');


  }
  if (window.pageYOffset<hdq
    // ||menu.getBoundingClientRect().bottom>btlc.getBoundingClientRect().bottom-50
  ) {

    menu.classList.remove('fixedMenu');
  cont.classList.remove('flexend');

  }



};
