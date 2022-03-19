let scrollbox=document.querySelector('.con1prim')
let slide1=document.querySelector('#slide1')
let slide2=document.querySelector('#slide2')
let slide3=document.querySelector('#slide3')
let slideiii=document.querySelector("#hiii")
let slideii=document.querySelector("#hii")
let slidei=document.querySelector("#hi")
let viewbook1=document.querySelector('#onclick1')

slide1.addEventListener('click',()=>{
    viewbook1.style.display='block';
})
viewbook1.addEventListener('click',()=>{
    viewbook1.style.display='none'
    // viewbook1.style.zIndex='-1'
})
var slides=[];
var slidin=[];
slides[0]=slide1;
slides[1]=slide2;
slides[2]=slide3;


slidin[0]=slidei;
slidin[1]=slideii;
slidin[2]=slideiii;


// for(let i=0;i>0;i++){
    
i=0;
    // while(i<2){
        // if(i==2)i==0;
        slides[0].classList.remove('hide')
        slidin[0].classList.remove('hide')
        i++;
        slides[1].classList.remove('hide')
        slidin[1].classList.remove('hide')
        i++;
        slides[2].classList.remove('hide')
        slidin[2
        
        
        ].classList.remove('hide')
        i++;