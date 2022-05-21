(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      var output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          var answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      var answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    //Quiz timer
    var count = 210;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);
var myQuestions = [
{
    question: "What is the purpose of a Boolean?",

    answers: {
        a:"Represents empty, nothing, and unknown type of values",

        b: "Represents true and false values",

        c: "Used for storing collections of data or more complex entities",
        
        d: "Represents single-character, multi-character, and alphanumeric values"
    },
    correctAnswer: "b"
},
{
    question: "Which is symbol is used to comment out code?",
    answers: {
        a:"=",
        b:"{}",
        c:"[]",
        d:"//"
    },
    correcrAnswer: "d"
},
{
    question: "What does an anchor do?",
    answers: {
        a: "returns the smallest integer that is greater than or equal to the given number",
        b: "returns the function that created the corresponding instance of the object",
        c: "Creates an HTML anchor to be used as a hypertext target",
        d: "Creates an HTML hypertext link that requests another URL"
    },
    correctAnswer: "c"
},
{
  question: "The Tag is used To Give Heading To The Table",
  answers: {
    a: "head",
    b: "Td",
    c: "Th",
    d: "Caption"
  },
  correctAnswer: "d"
},
{
  question: "JavaScript File Has An Extension of:",
  answers: {
    a:".Java",
    b:".Js",
    c:"javascript",
    d:".xml"
  },
  correctAnswer: "b"
},
{
  question: "A Function Associated With An object is Called:",
  answers: {
    a: "Function",
    b: "Method",
    c: "Link",
    d: "None"
  },
  correctAnswer: "b"
},
{
  question: "Event is Used To Check An Empty Text Box:",
  answers: {
    a:"Onclick()",
    b:"OnFocous()",
    c:"OnBlur()",
    d:"none"
  },
  correctAnswer: "c"
}
];
//call quiz function
buildQuiz();
//Pagination
var previousButton= document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);

//event listners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
})();