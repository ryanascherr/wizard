let currentQuestion = 1;
let currentAnswer = '';

let games = [
    {name: 'Playstation Casual First-Person Shooter', console: 'playstation', genre: 'fps', intensity: 'casual'},
    {name: 'Playstation Intense First-Person Shooter', console: 'playstation', genre: 'fps', intensity: 'intense'},
    {name: 'Playstation Casual Platformer', console: 'playstation', genre: 'platformer', intensity: 'casual'},
    {name: 'Playstation Intense Platformer', console: 'playstation', genre: 'platformer', intensity: 'intense'},
    {name: 'Playstation Casual Puzzler', console: 'playstation', genre: 'puzzle', intensity: 'intense'},
    {name: 'Playstation Intense Puzzler', console: 'playstation', genre: 'puzzle', intensity: 'intense'},
    {name: 'Xbox Casual First-Person Shooter', console: 'xbox', genre: 'fps', intensity: 'casual'},
    {name: 'Xbox Intense First-Person Shooter', console: 'xbox', genre: 'fps', intensity: 'intense'},
    {name: 'Xbox Casual Platformer', console: 'xbox', genre: 'platformer', intensity: 'casual'},
    {name: 'Xbox Intense Platformer', console: 'xbox', genre: 'platformer', intensity: 'intense'},
    {name: 'Xbox Casual Puzzler', console: 'xbox', genre: 'puzzle', intensity: 'casual'},
    {name: 'Xbox Intense Puzzler', console: 'xbox', genre: 'puzzle', intensity: 'intense'},
    {name: 'Switch Casual First-Person Shooter', console: 'switch', genre: 'fps', intensity: 'casual'},
    {name: 'Switch Intense First-Person Shooter', console: 'switch', genre: 'fps', intensity: 'intense'},
    {name: 'Switch Casual Platformer', console: 'switch', genre: 'platformer', intensity: 'casual'},
    {name: 'Switch Intense Platformer', console: 'switch', genre: 'platformer', intensity: 'intense'},
    {name: 'Switch Casual Puzzler', console: 'switch', genre: 'puzzle', intensity: 'casual'},
    {name: 'Switch Intense Puzzler', console: 'switch', genre: 'puzzle', intensity: 'intense'}
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
        $(".answer").removeClass("selected");
        if (currentQuestion === 1) {
            gameSelection = games.filter(game => game.console == currentAnswer);
            handleQuestionOneChange();
            return;
        }
        if (currentQuestion === 2) {
            gameSelection = gameSelection.filter(game => game.genre == currentAnswer);
            handleQuestionTwoChange();
            return;
        }
        if (currentQuestion === 3) {
            gameSelection = gameSelection.filter(game => game.intensity == currentAnswer);
            handleQuestionThreeChange();
            return;
        }
        return;
    }
    console.log("Gotta select something!");
});

function handleQuestionOneChange() {
    $(".one").slideUp(1000);
    $(".box-box-one").slideToggle(1000);
    currentQuestion++;
    $(".progress-box-one").css('background-position', 'left');
    $(".progress-line-one").css('background-position', 'left');
    setTimeout(function(){
        $(".progress-box-two").css('background', '#02833E');
   }, 1000);
}

function handleQuestionTwoChange() {
    $(".two").slideUp(1000);
    $(".box-box-two").slideToggle(1000);
    currentQuestion++;
    $(".progress-box-two").css('background-position', 'left');
    $(".progress-line-two").css('background-position', 'left');
    setTimeout(function(){
        $(".progress-box-three").css('background', '#02833E');
   }, 1000);
}

function handleQuestionThreeChange() {
    $(".three").slideUp(1000);
    $(".box-box-three").slideToggle(1000);
    currentQuestion++;
    $(".progress-box-three").css('background-position', 'left');
    $(".progress-line-three").css('background-position', 'left');
    setTimeout(function(){
        $(".progress-box-four").css('background', '#02833E');
   }, 1000);
}