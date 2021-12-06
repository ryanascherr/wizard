let currentQuestion = 1;
let currentAnswer = '';

const games = [
    {name: 'game 1', console: 'playstation', genre: 'action-adventure'},
    {name: 'game 2', console: 'xbox', genre: 'FPS'},
    {name: 'game 3', console: 'switch', genre: 'platformer'},
    {name: 'game 4', console: 'playstation', genre: 'puzzle'},
    {name: 'game 5', console: 'xbox', genre: 'survival/horror'},
    {name: 'game 6', console: 'switch', genre: 'roleplaying game'}
];

let gameSelection = [];

$(".answer").click(function() {
    // if (currentQuestion === 1) {
    //     if ($(this).hasClass("selected")) {
    //         $(this).removeClass("selected");
    //         return;
    //     } else {
    //         $(this).addClass("selected");
    //     }
    // } else {
    //     if ($(this).hasClass("selected")) {
    //         return;
    //     } else {
    //         $(".answer").removeClass("selected");
    //         $(this).addClass("selected");
    //     }
    // }
    currentAnswer = $(this).data("answer");
    if ($(this).hasClass("selected")) {
        return;
    } else {
        $(".answer").removeClass("selected");
        $(this).addClass("selected");
    }
});

$(".btn").click(function() {
    if ($(".answer").hasClass("selected")) {
        const games2 = games.filter(game => game.console == currentAnswer);
        if (currentQuestion === 1) {
            handleQuestionOneChange();
            return;
        }
        if (currentQuestion === 2) {
            handleQuestionTwoChange();
            return;
        }
        return;
    }
    console.log("Gotta select something!");
});

function handleQuestionOneChange() {
    $(".one").slideUp(1000);
    $(".box-box").slideToggle(1000);
    currentQuestion++;
    $(".progress-box-one").css('background-position', 'left');
    $(".progress-line-one").css('background-position', 'left');
    setTimeout(function(){
        $(".progress-box-two").css('background', '#02833E');
   }, 1000);
}

function handleQuestionTwoChange() {
    $(".one").slideUp(1000);
    $(".box-box").slideToggle(1000);
    currentQuestion++;
    $(".progress-box-two").css('background-position', 'left');
    $(".progress-line-two").css('background-position', 'left');
    setTimeout(function(){
        $(".progress-box-three").css('background', '#02833E');
   }, 1000);
}