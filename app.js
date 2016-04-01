var app = angular.module("app", []);

app.controller("MainControl", function ($scope) {
  $scope.question = 0;
  $scope.reveal;
  $scope.solved = false;
  $scope.score = 0;
  $scope.next = "Next";
  $scope.finished = false;

  $scope.data = [
    {
      sentence: "It does not do to dwell on dreams and forget to live.",
      author: "Dumbledore"
    },
    {
      sentence: "We all have moments of weakness. It’s how we recover from them that really counts.",
      author: "Georgina"
    },
    {
      sentence: "Very often the things we most desire come only after much patience and struggle.",
      author: "Georgina"
    },
    {
      sentence: "You care so much you feel as though you will bleed to death with the pain of it.",
      author: "Dumbledore"
    },
    {
      sentence: "Most good things come with the risk of something bad.",
      author: "Georgina"
    },
    {
      sentence: "Killing is not so easy as the innocent believe.",
      author: "Dumbledore"
    },
    {
      sentence: "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
      author: "Dumbledore"
    },
    {
      sentence: "I am not worried, I am with you.",
      author: "Dumbledore"
    },
    {
      sentence: "I don't deserve that much regard.",
      author: "Georgina"
    },
    {
      sentence: "How we love others is affected by how we love ourselves.",
      author: "Georgina"
    }
  ];

  $scope.current_question = $scope.data[$scope.question].sentence;

  $scope.show_answer = function (answer) {
    $scope.solved = true;
    if (answer === $scope.data[$scope.question].author) {
      $scope.reveal = "Bingo! It's " + $scope.data[$scope.question].author + ".";
      $scope.score += 10;
    } else {
      $scope.reveal = "Wrong! It's " + $scope.data[$scope.question].author + ".";
    }

    if ($scope.question + 1 === $scope.data.length) {
      $scope.next = "Reveal score";
    }
  };

  $scope.show_next = function () {
    if ($scope.question + 1 === $scope.data.length) {
      $scope.current_question = "";
      $scope.finished = true;
      $scope.reveal = "Your score is " + $scope.score + " out of " + $scope.data.length * 10 + " !";
      $scope.solved = false;
    } else {
      $scope.solved = false;
      $scope.question += 1;
      $scope.reveal = "";
      $scope.current_question = $scope.data[$scope.question].sentence;
    }
  };


});
