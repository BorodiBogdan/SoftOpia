let image = document.getElementById("hero");
let images = ['photos/background.jpg', 'photos/background22.jpg'];
var dots = document.getElementsByClassName('aux');
let aux_images = [ 'photos/cool photo.png', 'photos/cool photo.png'];
let poz = 0, cnt = 0;

setInterval( function(){
  cnt++;
  changer();
}, 1);

function changer() {
 
    if(cnt == 2500){
      poz = (poz + 1) % 2;
      image.style.backgroundImage = 'url("'+images[poz] + '")';
      dots[poz].style.color = '#ef744b';
      dots[(poz + 1) % 2].style.color = "white";
      cnt = 0;
    }
};

const hamburgerButton = document.getElementById('hamburgerr');
const navList = document.getElementById('sliding');

function ToggleButton(){
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', ToggleButton);

var sliding_info = document.getElementsByClassName('sliding-info');

for(var infos = 0; infos < sliding_info.length; infos++)
  sliding_info[infos].addEventListener('click', ToggleButton);

dots[0].addEventListener('click', function(){
  image.style.backgroundImage = 'url("'+images[0] + '")';
  dots[0].style.color = '#ef744b';
  dots[1].style.color = "white";
  cnt = 0;
  poz = 1;
})
dots[1].addEventListener('click', function(){
  image.style.backgroundImage = 'url("'+images[1] + '")';
  dots[1].style.color = '#ef744b';
  dots[0].style.color = "white";
  cnt = 0;
  poz = 0;
})
function refresh(){
    window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above
        
        var form = document.getElementById("my-form");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("my-form-status");
    
        // Success and Error functions for after the form is submitted
        
        function success() {
          form.reset();
          document.getElementById("my-form-status").style.opacity = "1";
          button.style = "display: none ";
          status.innerHTML = "Trimis!";
        }
        
        function error() {
            document.getElementById("my-form-status").style.opacity = "1";
          status.innerHTML = "Datele nu sunt corecte!Incearca din nou!";
        }
    
        // handle the form submission event
    
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
        });
      });
      
      // helper function for sending an AJAX request
    
      function ajax(method, url, data, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
          } else {
            error(xhr.status, xhr.response, xhr.responseType);
          }
        };
        xhr.send(data);
      }
}

refresh();

function navbar1(){
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  var navbar = document.getElementById("navbar");
  
  if(scrollTop > 100)
    navbar.style.backgroundColor = "rgb(45, 73, 110)";
  else navbar.style.backgroundColor = "transparent";

}

setInterval( function(){
  navbar1();
}, 1);

const faders = document.querySelectorAll('.service-example');
const sliders = document.querySelectorAll('.project-card1');
const sliders2 = document.querySelectorAll('.project-card');
const contacts = document.querySelectorAll('.contact-div');
const floats = document.querySelectorAll('.floating-image');
const texts = document.querySelectorAll('.hero-text');
const informations = document.querySelectorAll('.information');
const headshots = document.querySelectorAll('.headshot-container');

const AppearOptions = {
  threshold : 0.2,
  rootMargin: "0px 0px -200px 0px"
};

const appearOnScroll = new IntersectionObserver( 
  function( entries, appearOnScroll){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      } else{
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
      }
    })

}, AppearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
})

sliders2.forEach(slider =>{
  appearOnScroll.observe(slider);
})

contacts.forEach( contact =>{
  appearOnScroll.observe(contact);
})

floats.forEach( float =>{
  appearOnScroll.observe(float);
})
texts.forEach( text =>{
  appearOnScroll.observe(text);
})
informations.forEach( information  =>{
  appearOnScroll.observe(information);
})
headshots.forEach( head =>{
  appearOnScroll.observe(head);
})