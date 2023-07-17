
import sal from 'sal.js';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

import './style.scss';
import 'Bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';
import 'sal.js/dist/sal.css';
import 'sal.js/dist/sal.js';

sal();

//let position = document.querySelector('.pxt');
let changeColor = document.querySelectorAll('.change-color');


/*function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log('ok');
    //document.body.style.backgroundColor = "yellow";
  } else {
    console.log('ko');

    //document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)*/

/*window.addEventListener('scroll',(e)=>{


  if(scrollY == 0){
      position.style.position ="fixed";
      position.style.top= "50px";
      position.style.left= "250px";
      position.style.transition= "1s ease-in";

  }
  else if(scrollY < 400){
      position.style.position ="fixed";
      position.style.top= "150px";
      position.style.left= "250px";
      position.style.transition= "7s";
      position.style.display= 'block';
      position.style.transform= 'translateY(80px)'
  }
  else if(scrollY > 400) {
    position.style.display= 'none';
    position.style.transition= '2s';
  }

})*/
window.addEventListener('scroll',(e)=>{


  if(scrollY > 500 && scrollY < 880){
    /*appear.style.backgroundColor= '#eb4e14';
    appear.style.border= '#000 dotted 1.5px';
    appear.style.borderTop= 'none';
    appear.style.transition= 'all 2s';*/


      changeColor[0].classList.add("appear");
      changeColor[1].classList.remove("appear");

    //changeColor[1].classList.add("appear");
      console.log(changeColor);
  }
  if(scrollY > 1000 && scrollY < 2000){
    changeColor[1].classList.add("appear");
    changeColor[0].classList.remove("appear");
  }
  if(scrollY > 2150 && scrollY < 2750){
    changeColor[2].classList.add("appear");
    changeColor[1].classList.remove("appear");
  }
  if(scrollY > 2760 && scrollY < 3100){
    changeColor[3].classList.add("appear");
    changeColor[2].classList.remove("appear");
  }
  if(scrollY > 3150){
    changeColor[4].classList.add("appear");
    changeColor[3].classList.remove("appear");
  }
  if(scrollY < 500){
      changeColor[0].classList.remove("appear");
  }

})
