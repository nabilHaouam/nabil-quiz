const rightAnswers = ['A','B','A','B'];
const form = document.querySelector('form');
const scores = document.querySelector('.scores');
form.addEventListener('submit',(e)=>{
e.preventDefault();
let score = 0;
const userAnswers = [form.q1.value ,form.q2.value,form.q3.value,form.q4.value];
userAnswers.forEach((answer , index) =>{
if (answer ==rightAnswers[index]){
    score +=25;
    
}
})
//console.log(score);
scrollTo(0,0);
let output =0;
let counter = setInterval(()=>{

scores.textContent=`Your score is ${output} %`;

if (output == score){
clearInterval(counter);
}
else {
    output++;
}

},10)


})