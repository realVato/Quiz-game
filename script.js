(function() {
    var score = 0;

    function Question(question, answer, correctAnswer) {
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for(var i = 0; i < this.answer.length; i++) {
            console.log(i + ': ' + this.answer[i]);
        }
    };

    Question.prototype.checkAnswer = function(answer) {
        if (answer == this.correctAnswer) {
            score++;
            console.log('---------------------------------');
            console.log('Correct');
            console.log('---------------------------------');
            console.log('Your score: ' + score);
            console.log('---------------------------------');
            nextQuestion();
        } else if (answer === 'exit') {
            console.log('---------------------------------');
            console.log('Game finish.')
        } else {
            score = 0;
            console.log('---------------------------------');
            console.log('Incorrect');
            console.log('---------------------------------');
            console.log('Your score: ' + score);
            console.log('---------------------------------');
            nextQuestion();
        }
    };

    var q1 = new Question('Is JavaScript a powerful language?', ['Yes', 'No'], 0);
    var q2 = new Question('Is Keanu Reeves amazing?', ['Yes', 'No', 'Can\'t say'], 0);
    var q3 = new Question('How to be amazing just like Keanu Reeves?', ['Be tinder',
    'Be aggressive', 'Be tinder aggressive',
    'Be tinder aggressive and humble'], 3);

    var questions = [q1, q2, q3];

    nextQuestion();

    function nextQuestion() {
        var randomQuestion = Math.floor(Math.random() * questions.length);
        questions[randomQuestion].displayQuestion();
        answer = prompt('Answer:  | type \'exit\' to finish the game');
        questions[randomQuestion].checkAnswer(answer);
    }
})();

