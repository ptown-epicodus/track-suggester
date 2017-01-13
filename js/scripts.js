var prefersProgramming;
var typingDiscipline;
var paradigm;
var prefersSemicolon;
var prefersCompilation
var abstractionLevel
var license;

$(document).ready(function() {
  $("#quiz form").submit(function(event) {
      prefersProgramming = ("true" === $("input:radio[name=like-programming]:checked").val());
      typingDiscipline = $("input:radio[name=typing]:checked").val();
      paradigm = $("input:radio[name=paradigm]:checked").val();
      prefersSemicolon = ("true" === $("input:radio[name=semicolon]:checked").val());
      prefersCompilation = ("true" === $("input:radio[name=compiled]:checked").val());
      abstractionLevel = parseInt($("#low-high").val());
      license = $("input:radio[name=license]:checked").val();

      event.preventDefault();

      alert("You should take " + determineWinner());
  });
});

var calculateResults = function() {
  var ruby = 0;
  var php = 0;
  var java = 0;
  var css = 0;
  var cSharp = 0;

  if (prefersProgramming) {
    ruby += 1;
    php += 1;
    java += 1;
    css -= 1;
    cSharp += 1;
  } else {
    css += 5;
  }

  if (typingDiscipline == "strong") {
    java += 1;
    cSharp += 1;
  } else if (typingDiscipline == "weak") {
    ruby += 1;
    php += 1;
  }

  switch(paradigm) {
    case 'functional':
      ruby += 1;
      php += 1;
      cSharp += 1;
      break;
    case 'generic':
      java += 1;
      cSharp += 1;
      break;
    case 'procedural':
      php += 1;
      break;
    case 'structured':
      java += 1;
      cSharp += 1;
      break;
    case 'muli':
      ruby += 1;
      cSharp += 1;
      break;
    default:
      break;
  }

  if (prefersSemicolon) {
    php += 1;
    java += 1;
    css += 1;
    cSharp += 1;
  } else {
    ruby += 1;
  }

  if (prefersCompilation) {
    java += 1;
    cSharp += 1;
  } else {
    ruby += 1;
    php += 1;
  }

  switch(abstractionLevel) {
    case 5:
      cSharp += 1;
    case 4:
      java += 1;
    case 3:
      php += 1;
    case 2:
      ruby += 1;
    case 1:
      css += 1;
      break;
    default:
      break;
  }

  if (license === "closed") {
    java += 1;
    cSharp += 1;
  } else if (license === "open") {
    ruby += 1;
    php += 1;
    css += 1;
  }

  return [ruby, php, java, css, cSharp];
};

var determineWinner = function() {
  var contestants = ["Ruby/Rails", "PHP/Drupal", "Java/Android", "CSS/Design", "C#/.NET"];
  var topScore = 0;
  var indicesOfWinners = [ ];
  var scores = calculateResults();

  for (var i = 0; i < contestants.length; i++) {
    var score = scores[i];
    if (score === topScore) {
      // Include another contestant tied for first
      indicesOfWinners.push(i);
    }
    if (score > topScore) {
      topScore = score;
      // Reset winners list with only current contestant
      indicesOfWinners = [i];
    }
  }

  var numberOfTie = indicesOfWinners.length;
  if (numberOfTie === 1) {
    // Return sole winner
    return contestants[indicesOfWinners[0]];
  } else {
    // Return winner at random
    var winningIndex = Math.floor(Math.random() * numberOfTie);
    return contestants[winningIndex];
  }
};
