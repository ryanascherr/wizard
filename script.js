let currentQuestion = 1;
let selectedAnswer = '';
let selectedImg = '';
let gameSelection = [];

//command shift L

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
    selectedAnswer = $(this).data("answer");
    selectedImg = $(this).data("img");

    let isAnswerSelected = ($(this).hasClass("selected"));

    if (!isAnswerSelected) {
        $(".answer").removeClass("selected");
        $(this).addClass("selected");
    }
});

$(".submit-btn").click(function() {
    let isAnswerSelected = ($('.answer').hasClass("selected"));
    let isOnConsoleQuestion = (currentQuestion === 1);
    let isOnGenreQuestion = (currentQuestion === 2);
    let isOnIntensityQuestion = (currentQuestion === 3);

    if (!isAnswerSelected) {
        $(".error-message").text("Please select one of the answers.");
        return;
    };

    if (isAnswerSelected) {
        if (isOnConsoleQuestion) {
            gameSelection = games.filter(game => game.console == selectedAnswer);
            console.log(gameSelection);
        };
        if (isOnGenreQuestion) {
            gameSelection = gameSelection.filter(game => game.genre == selectedAnswer);
            console.log(gameSelection);
        };
        if (isOnIntensityQuestion) {
            gameSelection = gameSelection.filter(game => game.intensity == selectedAnswer);
            console.log(gameSelection);
        };
        $(".error-message").text("");
        handleQuestionChange();
        currentQuestion++;
    }
});

function handleQuestionChange() {
    //if last question has been answered, show game
    let isOnFinalQuestion = (currentQuestion === 3);
    if (isOnFinalQuestion) {
        handleShowFinalGame()
    };

    handleShowNewQuestion();
    handleUpdateProgressBar();
};

function handleShowNewQuestion() {
    let previousQuestion = $(".js-container")[currentQuestion-1];
    $(previousQuestion).slideUp(500);
    let nextQuestion = $(".js-container")[currentQuestion];
    $(nextQuestion).slideToggle(500);
};

function handleUpdateProgressBar() {
    let progressLine = $(".progress-line")[currentQuestion-1];
    $(progressLine).css('background-position', 'left');
    let progressBoxImg = $(".game-img")[currentQuestion-1];
    $(progressBoxImg).attr('src', selectedImg).css('opacity', '100');
    let progressBox = $(".progress-box")[currentQuestion];
    setTimeout(function(){
        $(progressBox).css('background', '#02833E');
    }, 1000);
};

function handleShowFinalGame() {
    console.log(gameSelection);
    $(".game-name").text(gameSelection[0].name);
    let selectedGameImg = $(".game-img")[3];
    $(selectedGameImg).attr('src', gameSelection[0].img);
    $(".game-website").attr('href', gameSelection[0].url);
    $(".enter-btn").addClass("hidden");
    $(".restart-btn").removeClass("hidden");
}

$(".restart-btn").click(function(){
    location.reload();
})