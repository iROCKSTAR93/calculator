const buttonElement=document.getElementsByClassName('btn');
console.log(buttonElement);
let str=" ";
const inp=document.querySelector('input');
console.log(inp);
console.log(Array.isArray(buttonElement));

const arr =Array.from(buttonElement);

console.log(Array.isArray(arr));
console.log(arr);
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
            str=str.slice(0,str.length-1);
        }
        else
        {
          str=str+e.target.textContent; 
          inp.value=str;
        }
         inp.value=str;
    })
}
