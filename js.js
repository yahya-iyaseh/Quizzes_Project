const correctAnswers = ['A', 'B', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const show = document.querySelector('#show');
const boxShow = document.querySelector('#box-show');
const radios = document.getElementsByTagName('input');

 show.addEventListener('click', e =>{
  boxShow.classList.toggle('d-none');
  show.classList.add('d-none');
  result.classList.add('d-none');
 
 });

form.addEventListener('submit', e =>{
  e.preventDefault();
  let score = 0;
  const userAnswers = [form.q1, form.q2, form.q3, form.q4 ,form.q5];
 // console.log(userAnswers);
  userAnswers.forEach((answer, index) =>{
   if(answer.value === correctAnswers[index]){
      console.log(answer.value);
      score +=( 1 / correctAnswers.length) * 100;
    }
  }); 

 // console.log(score);
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
 boxShow.classList.toggle('d-none');
 show.classList.remove('d-none');

 for(i = 0; i <radios.length;i++ ){
  radios[i].checked = false; 
 }

});








