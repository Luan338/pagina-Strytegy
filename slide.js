let list = [{
    imgUrl: 'https://www.strytegy.com/static/feature-wall-canvas-a703a85b593585afadb5ca8f96c2d4ef.gif',
    Title: 'Template Library',
    paragraph: 'A universe of exclusive templates and canvas for you to organize your ideas and boost your business.'
},
{
    imgUrl: 'https://www.strytegy.com/static/feature-workspaces-82990223958e39c65c6973361c0040dc.gif',
    Title: 'Workspaces and Projects',
    paragraph: 'Unlimited workspaces for you to create your projects collaboratively.'
},
{
    imgUrl: 'https://www.strytegy.com/static/feature-export-3e90d560e5d22c886f52fe6179a78049.gif',
    Title: 'Export and Share',
    paragraph: 'Consolidate your ideas and share documents with your team quickly and in different formats (png, pdf).'
},
{
    imgUrl: 'https://www.strytegy.com/static/feature-workspaces-82990223958e39c65c6973361c0040dc.gif',
    Title: 'Workspaces and Projects',
    paragraph: 'Unlimited workspaces for you to create your projects collaboratively.'
}]

let gif = document.getElementById('gif');
let titleGif = document.getElementById('titleGif');
let paragraphGif = document.getElementById('paragraphGif');

let items = document.querySelectorAll('#item');

gif.src = list[0].imgUrl;
titleGif.innerText = list[0].Title;
paragraphGif.innerText = list[0].paragraph;


items[0].addEventListener("click", function(){
    gif.src = list[0].imgUrl;
    titleGif.innerText = list[0].Title;
    paragraphGif.innerText = list[0].paragraph;
})

items[1].addEventListener("click", function(){
    gif.src = list[1].imgUrl;
    titleGif.innerText = list[1].Title;
    paragraphGif.innerText = list[1].paragraph;
})

items[2].addEventListener("click", function(){
    gif.src = list[2].imgUrl;
    titleGif.innerText = list[2].Title;
    paragraphGif.innerText = list[2].paragraph;
})

items[3].addEventListener("click", function(){
    gif.src = list[3].imgUrl;
    titleGif.innerText = list[3].Title;
    paragraphGif.innerText = list[3].paragraph;
})