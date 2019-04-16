(function(){
    var score = 0;

    function Question(question, answers, correctAnswerNO) {
    
        this.question = question;
        this.answers = answers;
        this.correctAnswerNO = correctAnswerNO;
    }
    
    Question.prototype.randomElement = function () {
        
        var randomQuestion = this.question[Math.floor(Math.random() * this.question.length)];
        
        console.log(randomQuestion);
    
        if (randomQuestion === this.question[0]) {
            console.log(this.answers[0][0]);
            console.log(this.answers[0][1]);
            this.checkAnswer();
            
        } else if (randomQuestion === this.question[1]) {
            console.log(this.answers[1][0]);
            console.log(this.answers[1][1]); 
            this.checkAnswer();
            
        } else {
            console.log(this.answers[2][0]);
            console.log(this.answers[2][1]);
            this.checkAnswer();
        }
    }
    
    Question.prototype.checkAnswer = function() {
            var userInput;
            
    
            userInput = prompt('answer');
            if (userInput == this.correctAnswerNO[0]) {
                
                score++;
                console.log('correct');
                console.log('Your current score is:' + score);
                console.log('--------------------------------');
                console.log('')
                quiz.randomElement();
    
            } else if (userInput == this.correctAnswerNO[1]) {
                console.log('incorrect, try again');
                console.log('Your current score is:' + score);
                console.log('--------------------------------');
                console.log('');
                quiz.randomElement();
    
            } else if (userInput == 'exit') {
                console.log('Your final score is:' + score);
                console.log('Game ended.');
            } else {
                console.log('Please submit an answer');
            }
        }
    
    var quiz = new Question(
    
        [   
            'Is JS a good language?',
            'Is JS fun?',
            'Is earth flat?'
        ],
        [
            [   
                '0: It\'s very good!',
                '1: There are better ones..'
            ],
            [   
                '0: It\'s very fun!',
                '1: It\'s hard!'
            ],
            [   
                '0: No.',
                '1: No.'
            ]
        ],
        [
            '0',
            '1',
        ]
        
        );
    
    quiz.randomElement();
})();
