let modal = document.getElementById("mymodal");
let btns = document.querySelectorAll(".btn");

btns.forEach(element =>{

  element.addEventListener('click', () => {
    modal.classList.toggle('open')
  })

})