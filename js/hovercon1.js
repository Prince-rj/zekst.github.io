const con1=document.querySelector(".con1");
let box1
let box
// const box2=document.querySelector('#2');
// const box3=document.querySelector('#3');
// const box4=document.querySelector('#4');


const outFunc1=()=>{
    con1.innerHTML=`<div  id="1"  class="boxdiv boxchange">Tech</div>
    <div id="2"  class="boxdiv changed">Fiction</div>
    <div  id="3" class="boxdiv">Self Help</div>
    <div id="4"  class="boxdiv">Other</div>`
}
const outFunc2=()=>{
    con1.innerHTML=`<div  id="1"  class="boxdiv changed">Tech</div>
    <div id="2"  class="boxdiv boxchange">Fiction</div>
    <div  id="3" class="boxdiv">Self Help</div>
    <div id="4"  class="boxdiv">Other</div>`
}
const outFunc3=()=>{
    con1.innerHTML=`<div  id="1"  class="boxdiv">Tech</div>
    <div id="2"  class="boxdiv">Fiction</div>
    <div  id="3" class="boxdiv boxchange">Self Help</div>
    <div id="4"  class="boxdiv changed">Other</div>`
}
const outFunc4=()=>{
    con1.innerHTML=`<div  id="1"  class="boxdiv">Tech</div>
    <div id="2"  class="boxdiv">Fiction</div>
    <div  id="3" class="boxdiv changed">Self Help</div>
    <div id="4"  class="boxdiv boxchange">Other</div>`
}
setInterval(() => {
    box1=document.getElementById('1');
if(box!=null){
        box.addEventListener('mouseout',outFunc1)
    }
box1.addEventListener('mouseenter',()=>{
        con1.innerHTML=`<div  id="1"  class="box"><h1>Tech</h1>
        <P>This is a book written by zzz askfjajfoadf asjdfoajldfj jdfahdoif jao</p>
        </div>
        <div  id="3" class="boxdiv">Self Help</div>
        <div id="4"  class="boxdiv">Other</div>`;
        box=document.querySelector('.box');
        // console.log(box);
    })
    // console.log("")
}, 100);
    
    

    
    