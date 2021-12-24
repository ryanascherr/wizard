let questionNumber = 1;
let selectedAnswer = '';
let selectedAnswerImage = '';
let gameSelection = [];

let games = [
    {name: 'Paladins: Champions of the Realm', console: 'playstation', genre: 'fps', intensity: 'casual', url: 'https://www.paladins.com/', img: './img/games/paladins.jpeg'},
    {name: 'Killzone: Shadow Fall', console: 'playstation', genre: 'fps', intensity: 'intense', url: 'https://killzone.com/', img: './img/games/killzone.jpeg'},
    {name: 'Sackboy: A Big Adventure', console: 'playstation', genre: 'platformer', intensity: 'casual', url: 'https://sheffield.sumo-digital.com/sackboy-a-big-adventure', img: './img/games/sackboy.jpeg'},
    {name: 'Dying Light 2: Stay Human', console: 'playstation', genre: 'platformer', intensity: 'intense', url: 'https://dl2.dyinglightgame.com/', img: './img/games/dying-light.jpeg'},
    {name: 'The Pedestrian', console: 'playstation', genre: 'puzzle', intensity: 'casual', url: 'https://www.skookum-arts.com/', img: './img/games/pedestrian.jpeg'},
    {name: 'Little Nightmares II', console: 'playstation', genre: 'puzzle', intensity: 'intense', url: 'https://en.bandainamcoent.eu/little-nightmares/little-nightmares-ii', img: './img/games/little-nightmares.jpeg'},
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
    let isAnswerSelected = ($(this).hasClass("selected"));

    selectedAnswer = $(this).data("answer");
    selectedAnswerImage = $(this).data("img");

    if (!isAnswerSelected) {
        $(".answer").removeClass("selected");
        $(this).addClass("selected");
    }
});

$(".submit-btn").click(function() {
    let isAnswerSelected = ($('.answer').hasClass("selected"));
    let isOnConsoleQuestion = (questionNumber === 1);
    let isOnGenreQuestion = (questionNumber === 2);
    let isOnIntensityQuestion = (questionNumber === 3);

    if (!isAnswerSelected) {
        $(".error-message").text("Please select one of the answers.");
        return;
    };

    if (isAnswerSelected) {
        if (isOnConsoleQuestion) {
            gameSelection = games.filter(game => game.console == selectedAnswer);
        };
        if (isOnGenreQuestion) {
            gameSelection = gameSelection.filter(game => game.genre == selectedAnswer);
        };
        if (isOnIntensityQuestion) {
            gameSelection = gameSelection.filter(game => game.intensity == selectedAnswer);
        };
        $(".error-message").text("");
        handleQuestionChange();
        questionNumber++;
    }
});

function handleQuestionChange() {
    let isOnFinalQuestion = (questionNumber === 3);
    if (isOnFinalQuestion) {
        handleShowFinalGame();
    };

    handleShowNewQuestion();
    handleUpdateProgressBar();
};

function handleShowNewQuestion() {
    let questionJustAnswered = $(".js-container")[questionNumber-1];
    $(questionJustAnswered).slideUp(500);
    let newQuestion = $(".js-container")[questionNumber];
    $(newQuestion).slideDown(500);
};

function handleUpdateProgressBar() {
    let progressLine = $(".progress-line")[questionNumber-1];
    $(progressLine).css('background-position', 'left');
    let progressBoxImage = $(".game-img")[questionNumber-1];
    $(progressBoxImage).attr('src', selectedAnswerImage).css('opacity', '100');
    let progressBox = $(".progress-box")[questionNumber];
    setTimeout(function(){
        $(progressBox).css('background', '#02833E');
    }, 500);
};

function handleShowFinalGame() {
    $(".game-name").text(gameSelection[0].name);
    $(".js-game-img").attr('src', gameSelection[0].img);
    $(".game-website").attr('href', gameSelection[0].url);
    $(".submit-btn").addClass("hidden");
    $(".restart-btn").removeClass("hidden");
    $('.js-game-img').on('load', function() {
    });
}

$(".restart-btn").click(function(){
    location.reload();
})