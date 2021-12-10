let currentQuestion = 1;
let currentAnswer = '';
let gameSelection = [];

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

$(".answer").click(function() {
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
        }
        if (currentQuestion === 2) {
            gameSelection = gameSelection.filter(game => game.genre == currentAnswer);
        }
        if (currentQuestion === 3) {
            gameSelection = gameSelection.filter(game => game.intensity == currentAnswer);
        }
        handleQuestionChange();
        currentQuestion++;
        return;
    }
    console.log("Gotta select something!");
});

function handleQuestionChange() {
    let currentBox = $(".question-box")
    [currentQuestion-1];
    $(currentBox).slideUp(1000);
    let currentBoxBox = $(".test")[currentQuestion-1];
    $(currentBoxBox).slideToggle(1000);
    let progressLine = $(".progress-line")[currentQuestion-1];
    $(progressLine).css('background-position', 'left');
    let progressBox = $(".progress-box")[currentQuestion];
    if (currentQuestion === 3) {
        $(".game").text(gameSelection[0].name);
        $(".btn").addClass("hidden");
   }
    setTimeout(function(){
        $(progressBox).css('background', '#02833E');
   }, 1000);
}