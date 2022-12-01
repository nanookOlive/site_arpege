
var bou=document.getElementsByTagName('body')[0];
bou.style.backgroundColor='#fff';
var ban=document.getElementById("ban");
var ev=document.getElementById("eveil");
var deli=document.getElementById("deli");
var parcours =document.getElementById("parcours")


  

window.onscroll = function (event)
{

    var scroll=window.pageYOffset;

    if(scroll<1000){
   
    ban.style.backgroundColor='#22b9a1'


}

    else if(scroll >=1000 && scroll <3000)
    {
       
        ban.style.backgroundColor='#f39c12'

    }

    else if(scroll>=3000 && scroll < 3600)
    {
        ban.style.backgroundColor='#22b9a1'
    }

    else{

        bou.style.backgroundColor='#fff';
    }
}

/*agrandissement barre de défilement verticale au scroll*/ 
window.addEventListener('scroll',()=>
{
    
    let dec =document.querySelector("#decouvrir")
    let pos = dec.getBoundingClientRect()
    console.log(pos.y)
    var taille= 200;
    taille += -pos.y ;
    console.log('taille du bouzin : '+taille)
    deli.style.height =taille + 'px'

    
    if(taille > 300 && taille < 1000)
    {
        ev.style.backgroundColor="#f39c12"
        ev.style.color="#fff"}
    

    else if(taille >1200 && taille < 2000)
        {parcours.style.backgroundColor='#f39c12'
        parcours.style.color='#fff'
    
    }
    else {

        ev.style.backgroundColor="#fff"
        ev.style.color="black"
        parcours.style.backgroundColor='#fff'
        parcours.style.color='black'

    }
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

/*Slider */

const right=document.getElementById("right")
const left=document.getElementById("left")
const sli=document.getElementById('slide')
const barre_droite=document.getElementById("barre_droite");
var margePlus=0;
var flag=0;

left.addEventListener('click', ()=>{

    if(flag > 0)
    {
        margePlus += 500;
        flag --
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag * (100/5))+'%';

    }
})

right.addEventListener('click', ()=>{

    if(flag < 5 )
    {margePlus -=500;
        flag ++
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag *(100/5))+'%';

    }
})
