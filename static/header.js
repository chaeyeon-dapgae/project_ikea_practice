let menuBtn = document.querySelector('.menu');
let menuList = document.querySelector('.lnb')

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('focus')
  menuList.classList.toggle('focus')
});

menuList.addEventListener("click", function(){
  menuBtn.classList.remove('focus');
  menuList.classList.remove('focus');
})