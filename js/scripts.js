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
  });
});
