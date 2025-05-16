const wrapper = document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const regLink= document.querySelector('.reg-link');
const btnPopup = document.querySelector('.btnlogin')
const iconClose = document.querySelector('.close')

const welcome = document.querySelector('.welcome');

regLink.addEventListener( 'click', ()=>{
  wrapper.classList.add('active');
})

loginLink.addEventListener( 'click', ()=>{
  wrapper.classList.remove('active');
})
btnPopup.addEventListener('click', ()=>{
  wrapper.classList.add('active-popup'),
  welcome.classList.add('show');
})
iconClose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup');
  welcome.classList.remove('show');
})
