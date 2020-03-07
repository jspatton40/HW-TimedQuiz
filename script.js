
var myQuestions = [
	{
		question: "What is 10/2?",
		answers: {
			a: '3',
			b: '5',
			c: '115'
		},
		correctAnswer: '5'
	},
	{
		question: "What is 30/3?",
		answers: {
			a: '3',
			b: '5',
			c: '10'
		},
		correctAnswer: '10'
  },
  {
    question: "What is 10*2?",
    answers: {
      a: '20',
      b: '40',
      c: '10'
    },
    correctAnswer: '20'
  },
  {
  question: "What is 10/5?",
  answers: {
    a: '2',
    b: '5',
    c: '4'
  },
  correctAnswer: '4'
  },
];

var currentIndex = 0


$("#Start-Quiz").click(function(){
appendQuestion()
});

var appendQuestion = function(){
  $("#quiz").html("");
  var question1 = $(`<h2> ${myQuestions[currentIndex].question} </h2>`);
  $("#quiz").append(question1);
  //Grabbing the keys from the answer property on the current question.
  var options1 = Object.keys(myQuestions[currentIndex].answers);
  console.log('answerkeys',options1)
  //Iterate through each answer
  for (var i=0; i < options1.length; i++ ) {
    var answers1 = $(`<button>${myQuestions[currentIndex].answers[options1[i]]}</button>`);
    answers1.click(checkAnswer);
    $("#quiz").append(answers1);
  }
}

var checkAnswer= function() {
  var userAnswer = $(this).text();
 if (userAnswer===myQuestions[currentIndex].correctAnswer) {
  alert ("That is correct!");
 } else {
   alert ("Sorry, that is incorrect.")
 }
 currentIndex++;
 appendQuestion();
}

var score = ""

if (userAnswer===myQuestions[currentIndex].correctAnswer){
  
}






//on click of answer trigger alert based on correct or not
  //append question with current index +1
  //