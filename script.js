var question=document.querySelector('.question');
var answer=document.querySelector('.answer');
var plus=document.querySelector('#plus');

var click=0;
question.addEventListener('click',()=>{
    if(click%2==0){
        answer.style.top='0px';
        answer.style.transition='all 0.5s ease-in-out';
        plus.style.transform='rotate(45deg)';
        plus.style.transition='all 0.5s ease-in-out';
    }
    else{ 
        answer.style.top='-65px';
        answer.style.transition='all 0.5s ease-in-out';
        plus.style.transform='rotate(0deg)';
        plus.style.transition='all 0.5s ease-in-out';
    }
   click++;
})

