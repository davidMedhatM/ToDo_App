let toshow = document.getElementById('show');
let res = document.getElementById('result');
let x = document.querySelector('.col-md-8');
let hide = document.querySelector('.tohide');
let hidetext = document.querySelector('.maintext');
let y = document.querySelector('.col-md-8 > .alert-primary');


toshow.onclick = function () {
    // x.innerHTML += '<div class="alert alert-primary"> david </div>';


  if (res.value == "") {
      alert("the input is null please write any thing");

  }else{
    x.innerHTML += `<div class="alert alert-primary alert-dismissible">
    <button type="button" class="close" data-dismiss="alert"><i class="fas fa-trash-alt"></i></button>
    david ${res.value}
  </div>`
    // hide.style.display="none";
  }
}
// if (y.classList.contains('alert-primary')) {
//     hidetext.style.display="none"
// }else{
//     hidetext.style.display="block"
// }
