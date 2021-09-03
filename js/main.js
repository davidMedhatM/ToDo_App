let toshow = document.getElementById('addrow');
let res = document.getElementById('result');
let x = document.querySelector('.alltask');

let hide = document.querySelector('.tohide');
let hidetext = document.querySelector('.maintext');


// to show the model
let to_show = document.querySelector('.to_show')
to_show.onclick = function() {
  hide.classList.toggle('block')

  
}



// to add the task
toshow.onclick = function () {

  if (res.value.trim() == "") {
      alert("the input is null please write any thing");

  }else{
    x.innerHTML += `<div class="alert alert-primary alert-dismissible">
    <button type="button" class="close closeList" data-dismiss="alert"><i class="fas fa-trash-alt"></i></button>
    david ${res.value}</div>`;
  
      res.value="";
      hide.classList.toggle('block');

      hidetext.style.display = "none";
  }
}


// to show and hide the main task
let check =()=>{
  if(x.children.length > 0) {
    hidetext.style.display="none"
  }else{
      hidetext.style.display="block"
  }
}



document.addEventListener('click',(e)=>{
  if (e.target.classList.contains('closeList') ||e.target.classList.contains('fa-trash-alt')) {
    check();
  }
})



// to make a throw on the text
document.addEventListener("click",(e)=>{
  if (e.target.classList.contains('alert-primary')) {
    e.target.classList.toggle('clicked');
  } else if(e.target.classList.contains('hidemod')) {
      hide.classList.remove('block');
  }
  
})


let changeback = document.getElementById('changeback');

changeback.addEventListener("click",()=>{
  document.body.classList.toggle('back');
  document.body.classList.toggle('back1');
})

