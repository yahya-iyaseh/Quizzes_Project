const correctAnswers = ['B', 'A', 'B', 'A' ];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e =>{
 e.preventDefault();
 let score = 0;
 const userAnswers = [form.q1, form.q2, form.q3, form.q4];
 userAnswers.forEach((answer, index) =>{
  if(answer.value === correctAnswers[index]){
   score +=( 1 / correctAnswers.length) * 100;
   }
 }); 

 
  scrollTo(0,0);
 result.classList.remove('d-none');


let out = 0;
const timer = setInterval(() =>{
 result.querySelector('span').textContent =`${out}%`;
 if(out === score){
  clearInterval(timer);
 }else{
  out++;
 }

}, 10);

 

});








