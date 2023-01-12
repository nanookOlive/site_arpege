
var bou=document.getElementsByTagName('body')[0];
bou.style.backgroundColor='#fff';
var ban=document.getElementById("ban");
var eveil=document.getElementById("eveil");
var parcours =document.getElementById("parcours")
var apprendre=document.getElementById('apprendre')
var decouvrir=document.getElementById("decouvrir")
var jouer =document.getElementById("jouer")
var pos_decouvrir=decouvrir.getBoundingClientRect()
var pos_d=pos_decouvrir.y;
var pos_app=apprendre.getBoundingClientRect();
var pos_a=pos_app.y;
var pos_jouer=jouer.getBoundingClientRect()
var pos_j=pos_jouer.y;
console.log('pos_ d =' + pos_d);
console.log('pos_ a =' + pos_a);
console.log('pos_ j =' + pos_j);


window.onscroll = function (event)
{

    var scroll=window.pageYOffset;
   
    scroll = scroll + 100;
    

    if(scroll<pos_d){
   
    ban.style.backgroundColor='#22b9a1'
    menu_2.style.backgroundColor='#22b9a1'


}

    else if((scroll) >= pos_d && scroll <= pos_a)
    {
       
        ban.style.backgroundColor='#f39c12'
        menu_2.style.backgroundColor='#f39c12'

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
    

    else if(scroll>=pos_a && scroll <= pos_j)
    {
        ban.style.backgroundColor='#22b9a1'
        menu_2.style.backgroundColor='#22b9a1'
    }

    else if(scroll >= pos_j){

        ban.style.backgroundColor='#900c3f'
        menu_2.style.backgroundColor='#900c3f'

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

const slider=document.getElementById('slider');
const right=document.getElementById("right");
const left=document.getElementById("left");
const sli=document.getElementById('slide');
const barre_droite=document.getElementById("barre_droite");
const chant =document.getElementById("chant")
const piano=document.getElementById('piano')
const flute=document.getElementById('flute')
const guitare=document.getElementById('guitare')
const mao=document.getElementById('mao')
const violon=document.getElementById('violon')
const slider_back=document.querySelector('.slider');
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
    backChange(flag)

    
})

right.addEventListener('click', ()=>{

    if(flag < 5 )
    {margePlus -=500;
        flag ++
    sli.style.marginLeft = margePlus +'px';
    barre_droite.style.width=(flag *(100/5))+'%';

    }

    backChange(flag)    
})


function backChange(number){

    $(".texte").css("display","none");
    
    switch(true)
    {
        case number === 0:
            piano.style.display='block'
            $('.slider').css("background-color","#f39c12")
            break
        case number === 1:
            chant.style.display="block"
            $('.slider').css("background-color","#fc5454")
            break
        case number === 2:
            flute.style.display='block'
            $('.slider').css("background-color","#324558")

            break
        case number === 3:
            guitare.style.display='block'
            $('.slider').css("background-color","#034963")

            break
        case number === 4:
            mao.style.display='block'
            $('.slider').css("background-color","#22B9A1")

            break
        case number === 5:
            violon.style.display='block'
            $('.slider').css("background-color","#00b7dd")
            break

    }
}

/*----------------------CAROU------------------------*/

var i= 0;
var images=['jouer_1.png','jouer_2.png','jouer_3.png'];
var ti= 2000;



function changeImg(){

    document.carou.src=images[i];
    
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

/*-----------------petit bloc--------------------------*/

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
/*menu hamburger */

    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', ()=>{

        hamburger.classList.toggle('active');
        const menu_2 = document.getElementById('menu_2')
        menu_2.classList.toggle("move")
    })

    const lien= document.querySelector('.lien');

    menu_2.addEventListener('click',()=>{
    menu_2.classList.remove("move");
    hamburger.classList.remove('active');
    
})

    
