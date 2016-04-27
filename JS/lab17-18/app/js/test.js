$(function () {

    'use strict';

    var test = [
        {
            title: 'What is JavaScript?',
            points: 10,
            answers: [{
                answer: 'Hypertext Markup Language',
                right: false
            },
                {
                    answer: 'Objective Programming Language',
                    right: false
                },
                {
                    answer: 'Programming language of HTML and the Web',
                    right: true
                }
            ]
        },
        {
            title: 'What is Jquery?',
            points: 10,
            answers: [{
                answer: 'JavaScript library',
                right: true
            },
                {
                    answer: 'JavaScript FrameWork',
                    right: false
                },
                {
                    answer: 'One of JavaScript functions',
                    right: false
                }]
        },
        {
            title: 'What is JSON?',
            points: 10,
            answers: [{
                answer: 'Analog of Java with more functions',
                right: false
            },
                {
                    answer: 'High-level interpreted programming language',
                    right: false
                },
                {
                    answer: 'Lightweight data-interchange format',
                    right: true
                }]
        }
    ];

    
;

    var preparedTest = JSON.stringify(test);
    var localTest = localStorage.setItem("test", preparedTest);
    var recievedTest = localStorage.getItem("test");
    var actualTest = JSON.parse(recievedTest);
    var html = $('#template').html();
    var tmpl = _.template(html);
    var content = tmpl({
        data: actualTest
    });

    var form = $('#test');
    form.prepend(content);

    var inputs = $('input:checkbox');

    inputs.on('click', function () {

        $(this).parent().siblings().children().each(function () {
            if ($(this).attr('disabled')) {
                $(this).attr('disabled', false);
            } else {
                $(this).attr('disabled', true);
            }
        });
    });

    var checkResults = function (e) {
        e.preventDefault();
        var rightAnswers = [];
        var getRightAnswers = function () {
            for (var i = 0; i < actualTest.length; i++) {
                var testAnswers = actualTest[i].answers;
                for (var j = 0; j < testAnswers.length; j++) {
                    var currentAnswer = actualTest[i].answers[j].right;
                    rightAnswers.push(currentAnswer);
                }
            }
        };

        var givenAnswers = [];
        var getGivenAnswers = function () {
            inputs.each(function () {
                if ($(this).prop('checked')) {
                    givenAnswers.push(true);
                } else {
                    givenAnswers.push(false);
                }
            });
        };

        var answered = 0;
        var check = function () {
            for (var i = 0; i < rightAnswers.length; i++) {
                if (rightAnswers[i] === true) {
                    if (rightAnswers[i] === givenAnswers[i]) {
                        answered++;
                    }
                }
            }
        };

        var questionsQuantity = 0;
        var sumQuestions = function () {
            for (var i = 0; i < actualTest.length; i++) {
                questionsQuantity++;
            }
        };

        var passed = 0;
        var testOK = false;
        var modal;
        var body = $('body');
        var testPassed = function () {
            passed = answered / questionsQuantity;
            if (passed > 0.5) {
                testOK = true;
            }
        };
        getRightAnswers();
        getGivenAnswers();
        check();
        sumQuestions();
        testPassed();
        if (testOK) {
            modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center rezultSuccess">Вы прошли тест!</h1><h1 class="text-center">Правильных ответов ' +
            answered + ' из ' + questionsQuantity + '</h1><button class="center-block btn btn-success buttonExit" id="exit">Выход</button></div></div>');
        } else {
            modal = ('<div class="mymodal"><div class="mymodal-inner"><h1 class="text-center rezultWrong">Вы не прошли тест</h1><h1 class="text-center">Правильных ответов ' +
            answered + ' из ' + questionsQuantity + '</h1><button class="center-block btn btn-success buttonExit" id="exit">Выход</button></div></div>');
        }

        body.append(modal);
        var exit = $('#exit');
        var reset = function () {
            $('input:checkbox').prop('checked', false).prop('disabled', false);
            var modal = $('.mymodal');
            modal.remove();
            return false;
        };
        exit.on('click', reset);
    };

    var $checkResults = $('#check-results');
    $checkResults.on('click', checkResults);
});

