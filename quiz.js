(function() {
  var questions = [{
    question: "You've just arrived at your travel destination.You would",
    choices: ["Just start sleeping in your hotel room", "Start wandering around"],
    correctAnswer: 1
  }, {
    question: "It is very humid at the place you are travelling to,however the place you're gonna visit has  asplendid scenery.Given that today will be the last day at that place .You would",
    choices: ["Be adventurous and take the risk to travel there", "Just stay at my hotel room or go somewhere nearby to eat " ],
    correctAnswer:0
  }, {
    question: "What will be your mode of transportation for a distance of 5km?",
    choices: ["Rental cycle","Taxi"],
    correctAnswer: 0
  }, {
    question: "What scenario will you prefer to be in?",
    choices: ["Slacking under a beach umbrella & having a cocktail", "Trekking/Visiting different places"],
    correctAnswer: 1
  }, {
    question: "You've just arrived at your travel destination again ,but this time You would ",
    choices: ["Go check out the food at the local area (restaurant,food stalls)","Order in food and take rest"],
    correctAnswer: 0
  },
  {
    question: "What kind of place would you like to travel to? ",
    choices: ["A place with not much of luxury but with splendid sceneries and various sightseeing places in it's affinity ", "A place where you can stay  in a luxury lifestyle and comfortable  "],
    correctAnswer: 1
  },
  {
    question: "The food stalls are crowded;will you wait in the queue and try it out or just get food from any fast food restaurant available? ",
    choices: ["I'm really keen in trying out food which differ from my normal diet,and will wait in the queue","Just get any food,I've got places to visit."],
    correctAnswer: 1
  },
  {
    question: " Which of the following  you always take when you are travelling?",
    choices: ["Sport/Walking shoes","Shades"],
    correctAnswer: 0
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
 var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
  if(numCorrect <= 2){
    score.append('You can consider going to Singapore');
   var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
   link.textContent = 'Singapore';
   link.href = 'PlacesGC.html#SG';
   document.getElementById('where_to_insert').appendChild(link);
}
     else if(numCorrect <=3){
    score.append('You can consider going to Bangkok');
    var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
    link.textContent = 'Bangkok';
    link.href = 'PlacesGC.html#BK';
    document.getElementById('where_to_insert').appendChild(link);
}
     else if(numCorrect <=4){
    score.append('You can consider going to Sydney');
    var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
    link.textContent = 'Sydney';
    link.href = 'PlacesGC.html#SYD';
    document.getElementById('where_to_insert').appendChild(link);
}
     else if(numCorrect <=4){
   score.append('You can consider going to Sydney');
   var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
   link.textContent = 'Sydney';
   link.href = 'PlacesGC.html#SYD';
   document.getElementById('where_to_insert').appendChild(link);
}
      else if(numCorrect <=6){
      score.append('You can consider going to Monterego');
     var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
     link.textContent = 'Monterego';
     link.href = 'PlacesGC.html#MT';
     document.getElementById('where_to_insert').appendChild(link);
}
      else if(numCorrect <=7){
      score.append('You can consider going to Cairo');
     var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
     link.textContent = 'Cairo';
     link.href = 'PlacesGC.html#CA';
     document.getElementById('where_to_insert').appendChild(link);
}
     else if(numCorrect <=8){
    score.append('You can consider going to Costa Rica');
     var link = document.createElement('a'); //creates a hyperlink  in javascript itself 
     link.textContent = 'Costa Rica';
     link.href = 'PlacesGC.html#CR';
     document.getElementById('where_to_insert').appendChild(link);
}
    return score;
  }
})();