const countVal=document.querySelector('#counter');

const increment=()=>{
    let val=parseInt(countVal.innerText);
    val=val+1;
    countVal.innerText=val;

};

const decrement=()=>{
    let val2=parseInt(countVal.innerText);
    val2=val2-1;
    countVal.innerText=val2;

};