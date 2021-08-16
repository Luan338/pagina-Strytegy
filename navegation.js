let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');
let listGroup = document.getElementById('listGroup');

var posicaoX = 0;

leftArrow.addEventListener('click', function(){
    if(posicaoX >= 0){
        posicaoX -= 65.2
        listGroup.style.transform = `translate(-${posicaoX}vw)`     
    }
});

rightArrow.addEventListener('click', function(){
    if(posicaoX < 194){
        posicaoX += 65.2
        listGroup.style.transform = `translate(-${posicaoX}vw)`
    }
});



