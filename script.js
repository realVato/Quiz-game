/* 
 QUIZ GAME
 --------------------
 1. Build a function constructor called Question 
 to describe a question.
 A question should include:
 a) question itself
 b) the answers from which the player can choose the correct one
 (Choose and adequate data structure here, array, object, etc.)
 c) correct answer (number 0 1)

 2. Create a couple of questions using the constructor

 3. Store them all inside an array

 4. Select one random question and log it on the console,
 together with the possible answers
 (each question should have a number)
 (Hint: Write a method for the question objects for this task).

 5. Use the 'prompt' function to ask the user for the correct 
 answer.
 The user should input the number of the corrent answer
 such as displayed in task 4.

 6. Check if the answer is correct and print to the console
 whether the answer is correct or not (Write another method).

 7. Suppose this code would be a plugin for other programmers
 to use in their code. So make sure that all the code is private
 and doesnt interfere with the other programmers code.

//EXPERT LEVEL

8. After displaying the result, display the next random question, so that
the game never ends.

9. Task 8 - the game literally never ends.
Include the option to quite the game by typing 'exit' instead of answer.
In this case, dont call the function from task 8.

10. Track the user's score to make the game more fun. Each time
an answer is correct, add 1 point to the score.

11. Display the score in the console. (Yet another method for this).

*/

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
            console.log('correct');
            console.log('')
            console.log('--------------------------------')
            console.log('')
            quiz.randomElement();

        } else {
            console.log('incorrect, try again');
            console.log('')
            console.log('--------------------------------')
            console.log('')
            quiz.randomElement();
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
        '1'
    ]
    
    );

quiz.randomElement();