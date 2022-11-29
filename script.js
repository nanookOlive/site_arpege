
var bou=document.getElementsByTagName('body')[0];
bou.style.backgroundColor='#fff';
var ban=document.getElementById("ban");
var ev=document.getElementById("eveil");
var deli=document.getElementById("deli");



  

window.onscroll = function (event)
{

    var scroll=window.pageYOffset;

    if(scroll<1000){
    bou.style.backgroundColor="#fff";
    bou.style.color='black';
    ban.style.backgroundColor='#22b9a1'
    ev.style.backgroundColor='#fff';


}



    
    else if(scroll >=1000 && scroll <3000)
    {
     /*   bou.style.backgroundColor="#f39c12";*/
       
        ban.style.backgroundColor='#f39c12'
        ev.style.background='linear-gradient(130deg,rgba(243,156,18)0%,rgba(243,156,18,1)35%,rgba(255,255,255,1)100%)'

    }
   

    
    else if(scroll>=3000 && scroll < 3600)
    {
        /*bou.style.backgroundColor='#22b9a1';*/
        ban.style.backgroundColor='#22b9a1'
    }

    else{

        bou.style.backgroundColor='#fff';
    }
}
window.addEventListener('scroll',()=>
{
    
    let dec =document.querySelector("#decouvrir")
    let pos = dec.getBoundingClientRect()
    console.log(pos.y)
    var taille= 200;
    taille += -pos.y ;
    console.log(taille)
    deli.style.height =taille + 'px'


    
})  
/*animation des blocs text au scroll*/
const ratio= .1;
const options={
    root:null,
    rootMargin:'0px',
    threshold:ratio
}

const handleIntersect = function(entries, observer){
    entries.forEach(function (entry){

        if(entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
        
    })
}
const observer = new IntersectionObserver(handleIntersect, options);

document.querySelectorAll('.reveal').forEach(function(r){
    observer.observe(r)
})

