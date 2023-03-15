let textTag = document.querySelector('.section1 h1')
let text = textTag.textContent
let splitedText= text.split('');
textTag.innerHTML= '';
for (let i=0;i<splitedText.length;i++){
    if(splitedText[i] == " "){
        splitedText[i]="&nbsp;";
    }
    textTag.innerHTML += `<span>${splitedText[i]}</span>`;
}
let k= 0;
let interval = setInterval(()=>{
    let spans=textTag.querySelectorAll('span');
    let singleSpan=spans[k];
     singleSpan.className='fadeMove'
    k++;
    if(k== spans.length){
        clearInterval(interval);
    }
},100);
let border =  document.querySelector('.border-line');
let animationWidth=0;
window.onscroll = () =>{
    if(this.oldScroll>this.scrollY){
       animationWidth -=1;
    }
    else{
       animationWidth +=1;
    }
    if(animationWidth>=100){
        animationWidth=100;
    }

    if(animationWidth <=0){
        animationWidth=0;
    }
   
  border.style.width=animationWidth +'%'
 
  this.oldScroll=this.scrollY;
  let sectionForAnimation=document.querySelector('.section2 .images');
  let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
  let screenPosition=window.innerHeight;
  
  let leftImage= document.querySelector('.slideFromLeft')
  let RightImage= document.querySelector('.slideFromRight')
  if(sectionPosition< screenPosition){
  leftImage.classList.add('animated');
  RightImage.classList.add('animated');
  }
}