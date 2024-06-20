const quizTimetwelvehours = [
  {
    question: 'DEFAULT',
    answer: ['DEFAULT', 'default']
  },
  {
    question: '1:00',
    answer: ['한시', '한시.', '한시예요', '한시 예요', '한시예요.', '한시 예요.']
  },
  {
    question: '2:00',
    answer: ['두시', '두시.', '두시예요', '두시 예요', '두시예요.', '두시 예요.']
  }
]

let currentQuestion = 0;
let questionType = '';

function loadQuiz(event){
  //hide/display appropriate sections
  document.getElementById('quizheader').style.display = 'none';
  document.getElementById('selection').style.display = 'none';
  document.getElementById('quizname').style.display = 'block';
  document.getElementById('quizlist').style.display = 'none';
  document.getElementById('questionnumber').style.display = 'block';
  document.getElementById('question').style.display = 'block';
  document.getElementById('answerbox').style.display = 'block';
  document.getElementById('submitbutton').style.display = 'block';

  //display quiz name at top
  var name = document.getElementById('quizname');
  var quizSelection = event.innerHTML;
  name.innerHTML = quizSelection;

  //get correct quiz
  if(quizSelection == 'Time- 12 Hours'){
    questionType = quizTimetwelvehours;
    document.getElementById('nonchangingquestion').innerHTML = '몇 시예요?';
    document.getElementById('nonchangingquestion').style.display = 'block';
  }//if
  else{}//else

  //set current question number to 1
  currentQuestion = 1;
  document.getElementById('questionnumber').innerHTML = ("Question " + 1 + "/" + (questionType.length-1));

  //set first question
  document.getElementById('question').innerHTML = questionType[1].question;


}//loadQuiz
