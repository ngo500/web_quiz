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

const quizSinozerototen = [
  {
    question: 'DEFAULT',
    answer: ['DEFAULT', 'default']
  },
  {
    question: '0',
    answer: ['영', '영.', '영이에요', '영이에요.', '영 이에요', '영 이에요.', '공', '공.', '공이에요', '공이에요.', '공 이에요', '공 이에요.']
  },
  {
    question: '1',
    answer: ['일', '일.', '일이예요', '일이예요.', '일 이예요', '일 이예요.']
  },
  {
    question: '2',
    answer: []
  },
  {
    question: '3',
    answer: []
  },
  {
    question: '4',
    answer: []
  },
  {
    question: '5',
    answer: []
  },
  {
    question: '6',
    answer: []
  },
  {
    question: '7',
    answer: []
  },
  {
    question: '8',
    answer: []
  },
  {
    question: '9',
    answer: []
  },
  {
    question: '10',
    answer: []
  }
]

document.getElementById('answerbox').addEventListener("keypress", function(e){
  if(e.key === "Enter" || e.key === 13){
    e.preventDefault();
    document.getElementById('submitbutton').click();
  }//if
});

//holds the current question of the quiz
let currentQuestion = 0;

//holds the selected quiz const name
let questionType = '';

//holds the amount of correct answers
let currentScore = 0;

function hideQuizlist(){
  document.getElementById('quizprompt').style.display = 'none';
  document.getElementById('quiztimetwelvehoursbutton').style.display = 'none';
  document.getElementById('quizlist').style.display = 'none';
}//hideQuizlist

function showQuizlist(){
  document.getElementById('quizprompt').style.display = 'block';
  document.getElementById('quiztimetwelvehoursbutton').style.display = 'block';
  document.getElementById('quizlist').style.display = 'block';
}//showQuizlist

function hideQuestionlayout(){
  document.getElementById('questionnumber').style.display = 'none';
  document.getElementById('nonchangingquestion').style.display = 'none';
  document.getElementById('question').style.display = 'none';
  document.getElementById('questionlayout').style.display = 'none';
}//hideQuestionlayout

function showQuestionlayout(){
  document.getElementById('questionnumber').style.display = 'block';
  document.getElementById('nonchangingquestion').style.display = 'block';
  document.getElementById('question').style.display = 'block';
  document.getElementById('questionlayout').style.display = 'block';
}//hideQuestionlayout

function hideInputlayout(){
  document.getElementById('answerbox').style.display = 'none';
  document.getElementById('submitbutton').style.display = 'none';
  document.getElementById('inputlayout').style.display = 'none';
}//hideInputlayout

function showInputlayout(){
  document.getElementById('answerbox').style.display = 'block';
  document.getElementById('submitbutton').style.display = 'block';
  document.getElementById('inputlayout').style.display = 'block';
}//showInputlayout

function hideAnswerlayout(){
  document.getElementById('revealanswer').style.display = 'none';
  document.getElementById('userinputanswerprompt').style.display = 'none';
  document.getElementById('userinputanswer').style.display = 'none';
  document.getElementById('continuebutton').style.display = 'none';
  document.getElementById('answerlayout').style.display = 'none';
}//hideAnswerlayout

function showAnswerlayout(){
  document.getElementById('revealanswer').style.display = 'block';
  document.getElementById('userinputanswerprompt').style.display = 'block';
  document.getElementById('userinputanswer').style.display = 'block';
  document.getElementById('continuebutton').style.display = 'block';
  document.getElementById('answerlayout').style.display = 'block';
}//showAnswerlayout

function hideScorelayout(){
  document.getElementById('score').style.display = 'none';
  document.getElementById('backbutton').style.display = 'none';
  document.getElementById('scorelayout').style.display = 'none';
}//hideScorelayout

function showScorelayout(){
  document.getElementById('score').style.display = 'block';
  document.getElementById('backbutton').style.display = 'block';
  document.getElementById('scorelayout').style.display = 'block';
}//showScorelayout

//loads the quiz for the first time
function loadQuiz(event){
  //hide appropriate sections
  document.getElementById('quizheader').style.display = 'none';
  hideQuizlist();

  //display quiz name at top
  var name = document.getElementById('quizname');
  var quizSelection = event.innerHTML;
  name.innerHTML = quizSelection;
  document.getElementById('quizname').style.display = 'block';

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

  //display question section
  showQuestionlayout();

  //reset answer box
  document.getElementById('answerbox').value = "";

  //reset current score
  currentScore = 0;

  //show input box
  showInputlayout();
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

  //hide questions
  hideQuestionlayout();

  //hide input box and submit button
  hideInputlayout();

  //if answer was correct,
  if(isAnswerCorrect){
    //show correct answer message
    document.getElementById('correctanswerprompt').style.display = 'block';
    document.getElementById('incorrectanswerprompt').style.display = 'none';
  }//if
  else{
    //else, show incorrect answer message
    document.getElementById('incorrectanswerprompt').style.display = 'block';
    document.getElementById('correctanswerprompt').style.display = 'none';
  }//else

  //get input answer
  document.getElementById('userinputanswer').innerHTML = inputAnswer;

  //show correct answer
  document.getElementById('revealanswer').innerHTML = questionToCheck.answer[0];
  showAnswerlayout();
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

    //show questions
    showQuestionlayout();

    //hide answer from last question
    hideAnswerlayout();

    //reset answer box
    document.getElementById('answerbox').value = "";

    //show answer box and submit button
    showInputlayout();
  }//if
  else{
    //else, there are no questions left, show the final score
    showScore();
  }//else
}//nextQuestion

//shows the final score of the quiz when there are no more questions left
function showScore(){
  //hide questions for quiz
  hideQuestionlayout();

  //hide answer from last question
  hideAnswerlayout();

  //hide input layout
  hideInputlayout();

  //show final score, back button
  document.getElementById('score').innerHTML = ("Final score is " + currentScore + "/" + (questionType.length-1) + "!");
  showScorelayout();
}//showScore

function quizReset(){
  //hide quiz selection
  document.getElementById('quizname').style.display = 'none';

  //hide score results
  hideScorelayout();

  //show quiz page
  document.getElementById('quizheader').style.display = 'block';
  showQuizlist();
}//quizReset
