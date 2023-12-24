const buttonElement=document.getElementsByClassName('btn');

let str=" ";
const inp=document.querySelector('input');


const arr =Array.from(buttonElement);

for(let i=0;i<arr.length;i++)
{
    arr[i].addEventListener('click',(e)=>{
        if(e.target.innerHTML==='=')
        {
            str=eval(str);
        }
        else if(e.target.innerHTML==='AC'){
            str='';
        }
        else if(e.target.innerHTML==='DEL')
        {   
            str=str.toString()?.slice(0,-1);
        }
        else
        {
          str=str+e.target.textContent; 
          inp.value=str;
        }
         inp.value=str;
    })
}
