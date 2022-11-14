const body = document.querySelector('body');
const button= document.querySelector('button');

function color() {
    body.classList.toggle('dark')
  
}

button.addEventListener('click', color)