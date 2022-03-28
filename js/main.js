let input = document.querySelector('.input');
let countBtn = document.querySelector('.count-btn');
let resitBtn = document.querySelector('.resit-btn');
let ledBtn = document.querySelector('.led-btn');

countBtn.addEventListener('click', function () {
    input.value ++;
})

resitBtn.addEventListener('click', function () {
    input.value = 0;
})

ledBtn.addEventListener('click', function () {
    setTimeout(function(){
        input.classList.add('gradient');
        setTimeout(function(){
            input.classList.remove('gradient');
        }, 3000);
      }, 0);
})


