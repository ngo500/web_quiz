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
  },
  {
    question: '3:00',
    answer: ['세시', '세시.', '세시예요', '세시 예요', '세시예요.', '세시 예요.']
  },
  {
    question: '4:00',
    answer: ['네시', '네시.', '네시예요', '네시 예요', '네시예요.', '네시 예요.']
  },
  {
    question: '5:00',
    answer: ['다섯시', '다섯시.', '다섯시예요', '다섯시 예요', '다섯시예요.', '다섯시 예요.']
  },
  {
    question: '6:00',
    answer: ['여섯시', '여섯시.', '여섯시예요', '여섯시 예요', '여섯시예요.', '여섯시 예요.']
  },
  {
    question: '7:00',
    answer: ['일곱시', '일곱시.', '일곱시예요', '일곱시 예요', '일곱시예요.', '일곱시 예요.']
  },
  {
    question: '8:00',
    answer: ['여덟시', '여덟시.', '여덟시예요', '여덟시 예요', '여덟시예요.', '여덟시 예요.']
  },
  {
    question: '9:00',
    answer: ['아홉시', '아홉시.', '아홉시예요', '아홉시 예요', '아홉시예요.', '아홉시 예요.']
  },
  {
    question: '10:00',
    answer: ['열시', '열시.', '열시예요', '열시 예요', '열시예요.', '열시 예요.']
  },
  {
    question: '11:00',
    answer: ['열한시', '열한시.', '열한시예요', '열한시 예요', '열한시예요.', '열한시 예요.']
  },
  {
    question: '12:00',
    answer: ['열두시', '열두시.', '열두시예요', '열두시 예요', '열두시예요.', '열두시 예요.']
  }
]

//holds the current question of the quiz
let currentQuestion = 0;

//holds the selected quiz const name
let questionType = '';

//holds the amount of correct answers
let currentScore = 0;

//loads the quiz for the first time
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

  //reset answer box
  document.getElementById('answerbox').value = "";

  //reset current score
  currentScore = 0;
}//loadQuiz

//submit button press-
//checks if the answer is correct
function checkAnswer(){
  //question being answered
  var questionToCheck = questionType[currentQuestion];
  //answer that was input by user
  var inputAnswer = document.getElementById('answerbox').value;
  //if answer input by user correct, true, otherwise false
  var isAnswerCorrect = false;

  //loop through answer array and check if input matches any correct answer
  for(i in questionToCheck.answer){
    if(!isAnswerCorrect && questionToCheck.answer[i] == inputAnswer){
      //add point to score
      currentScore++;
      //mark answer as true
      isAnswerCorrect = true;
    }//if
    else{}//else, input answer is false
  }//for

  //hide input box and submit button, show continue button
  document.getElementById('answerbox').style.display = 'none';
  document.getElementById('submitbutton').style.display = 'none';
  document.getElementById('continuebutton').style.display = 'block';

  //if answer was correct,
  if(isAnswerCorrect){
    //show correct answer message
    document.getElementById('correctanswerprompt').style.display = 'block';
  }//if
  else{
    //else, show incorrect answer message
    document.getElementById('incorrectanswerprompt').style.display = 'block';
  }//else

  //show correct answer
  document.getElementById('revealanswer').innerHTML = questionToCheck.answer[0];
  document.getElementById('revealanswer').style.display = 'block';

  //show message saying the user answer
  document.getElementById('userinputanswerprompt').style.display = 'block';

  //show what the user input
  document.getElementById('userinputanswer').innerHTML = inputAnswer;
  document.getElementById('userinputanswer').style.display = 'block';
}//checkAnswer

//continue button press-
//goes to the next question in the quiz
function nextQuestion(){
  //move to the next question
  currentQuestion++;

  //if there are more questions to answer
  if(currentQuestion <= questionType.length-1){
    //keep going in the quiz
    //display correct question number
    document.getElementById('questionnumber').innerHTML = ("Question " + currentQuestion + "/" + (questionType.length-1));

    //display correct question
    document.getElementById('question').innerHTML = questionType[currentQuestion].question;

    //hide answer from last question
    document.getElementById('correctanswerprompt').style.display = 'none';
    document.getElementById('incorrectanswerprompt').style.display = 'none';
    document.getElementById('revealanswer').style.display = 'none';
    document.getElementById('userinputanswerprompt').style.display = 'none';
    document.getElementById('userinputanswer').style.display = 'none';
    document.getElementById('continuebutton').style.display = 'none';

    //reset answer box
    document.getElementById('answerbox').value = "";

    //show answer box and submit button
    document.getElementById('answerbox').style.display = 'block';
    document.getElementById('submitbutton').style.display = 'block';

  }//if
  else{
    //else, there are no questions left, show the final score
    showScore();
  }//else
}//nextQuestion

//shows the final score of the quiz when there are no more questions left
function showScore(){
  //hide questions for quiz
  document.getElementById('questionnumber').style.display = 'none';
  document.getElementById('nonchangingquestion').style.display = 'none';
  document.getElementById('question').style.display = 'none';

  //hide answer from last question
  document.getElementById('correctanswerprompt').style.display = 'none';
  document.getElementById('incorrectanswerprompt').style.display = 'none';
  document.getElementById('revealanswer').style.display = 'none';
  document.getElementById('userinputanswerprompt').style.display = 'none';
  document.getElementById('userinputanswer').style.display = 'none';
  document.getElementById('continuebutton').style.display = 'none';

  //show final score
  document.getElementById('score').innerHTML = ("Final score is " + currentScore + "/" + (questionType.length-1) + "!");
  document.getElementById('score').style.display = 'block';

  //show back back button
  document.getElementById('backbutton').style.display = 'block';
}//showScore

function quizReset(){
  //hide quiz selection
  document.getElementById('quizname').style.display = 'none';

  //hide score results
  document.getElementById('score').style.display = 'none';
  document.getElementById('backbutton').style.display = 'none';

  //show quiz page
  document.getElementById('quizheader').style.display = 'block';
  document.getElementById('selection').style.display = 'block';
  document.getElementById('quizlist').style.display = 'block';

}//quizReset
