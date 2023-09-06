let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('click', function(){
    button.style.position = 'absolute';
    button.style.left = Math.random() * width + 'px';
    button.style.top = Math.random() * height + 'px';
});
