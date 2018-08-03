var topBlock = document.querySelector('.footer_column:nth-child(1)');
var bottomBlock = document.querySelector('.footer_column:nth-child(2)');


topBlock.addEventListener('click',function () {
bottomBlock.classList.toggle('hide')
});
