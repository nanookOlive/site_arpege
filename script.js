
var bou=document.getElementsByTagName('body')[0];
bou.style.backgroundColor='#fff';
var ban=document.getElementById("ban");
var eveil=document.getElementById("eveil");
var parcours =document.getElementById("parcours")
var apprendre=document.getElementById('apprendre')
var decouvrir=document.getElementById("decouvrir")
var jouer =document.getElementById("jouer")

window.onscroll = function (event)
{

    var scroll=window.pageYOffset;
    pos_decouvrir=decouvrir.getBoundingClientRect()
    pos_app=apprendre.getBoundingClientRect()
    pos_jouer=jouer.getBoundingClientRect()
    console.log('scroll ' + scroll)
    console.log('apprendre est à : '+pos_app.y +' px du top')    
    console.log('découvrir est à : '+pos_decouvrir.y +' px du top')
    console.log('jouer est à : '+pos_jouer.y+' px.')

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
    

    else if(scroll>=3300 && scroll < 5900)
    {
        ban.style.backgroundColor='#22b9a1'
    }

    else if(scroll >=5900 ){

        ban.style.backgroundColor='#00b7dd'
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
const chant =document.getElementById("chant")
const piano=document.getElementById('piano')
const flute=document.getElementById('flute')
const guitare=document.getElementById('guitare')
const mao=document.getElementById('mao')
const violon=document.getElementById('violon')

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
    console.log(flag)
    backChange(flag)
    
})

right.addEventListener('click', ()=>{

    if(flag < 5 )
    {margePlus -=500;
        flag ++
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag *(100/5))+'%';

    }
    console.log(flag)

    backChange(flag)    
})

console.log(flag)

function backChange(number){

    $(".texte").css("display","none");

    switch(true)
    {
        case number === 0:
            piano.style.display='block'
            break
        case number === 1:
            chant.style.display="block"
            break
        case number === 2:
            flute.style.display='block'
            break
        case number === 3:
            guitare.style.display='block'
            break
        case number === 4:
            mao.style.display='block'
            break
        case number === 5:
            violon.style.display='block'

    }
}

/*CAROU*/

var i= 0;
var images=['jouer_1.png','jouer_2.png','jouer_3.png'];
var ti= 2000;



function changeImg(){

    document.carou.src=images[i];
    console.log(i)
    
    if(i < images.length-1)
    {
        i ++;
    } 
    else{
        i=0;
    }

    setTimeout("changeImg",ti);
   
}

window.setInterval(function(){
    changeImg()
},4000);

/*petit bloc*/

var chambre=document.getElementById('chambre')
var rock=document.getElementById('rock')
var trad=document.getElementById('trad')
var choeur=document.getElementById("choeur")

    chambre.addEventListener('click',()=>
    {
        chambre.classList.toggle('change')
        rock.classList.remove("change")
        choeur.classList.remove("change")
        trad.classList.remove('change')

    })



    rock.addEventListener('click',()=>
    {
        rock.classList.toggle('change')
        chambre.classList.remove('change')
        trad.classList.remove("change")
        choeur.classList.remove("change")

    })

    trad.addEventListener('click',()=>
    {
        trad.classList.toggle('change')
        chambre.classList.remove('change')
        rock.classList.remove("change")
        choeur.classList.remove("change")

    })

    choeur.addEventListener('click',()=>
    {
        choeur.classList.toggle('change')
        chambre.classList.remove('change')
        trad.classList.remove("change")
        rock.classList.remove("change")

    })


    