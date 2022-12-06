
var bou=document.getElementsByTagName('body')[0];
bou.style.backgroundColor='#fff';
var ban=document.getElementById("ban");
var eveil=document.getElementById("eveil");
var parcours =document.getElementById("parcours")
var apprendre=document.getElementById('apprendre')
var decouvrir=document.getElementById("decouvrir")
  

window.onscroll = function (event)
{

    var scroll=window.pageYOffset;
    pos_decouvrir=decouvrir.getBoundingClientRect()
    pos_app=apprendre.getBoundingClientRect()
    console.log('scroll ' + scroll)
    console.log('apprendre est à : '+pos_app.y +' px du top')    
    console.log('découvrir est à : '+pos_decouvrir.y +' px du top')



    if(scroll<=1100){
   
    ban.style.backgroundColor='#22b9a1'


}

    else if(scroll >=1100 && scroll <3300)
    {
       
        ban.style.backgroundColor='#f39c12'

        if(scroll >=1300 && scroll <1900)
    {
        eveil.style.backgroundColor='#f39c12'
        eveil.style.color="#fff"
    }
        else if(scroll >1900){
            parcours.style.backgroundColor='#f39c12'
            parcours.style.color='#fff'
        }
        else{eveil.backgroundColor="#fff"}
    }
    

    else if(scroll>=3300 && scroll < 3600)
    {
        ban.style.backgroundColor='#22b9a1'
    }

    else{

        bou.style.backgroundColor='#fff';
    }
}


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
