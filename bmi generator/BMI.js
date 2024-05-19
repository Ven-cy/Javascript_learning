const form=document.querySelector('form')
const result=document.querySelector('#result')

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);

    if(height === '' || isNaN(height) || height<0 ){
        result.innerHTML=`Please Enter Valid Value`;
    }else if(weight === '' || isNaN(weight) || weight<0 ){
        result.innerHTML=`Please Enter Valid Value`;
    }else{
        const BMI=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${BMI}</span>`;
    }
});