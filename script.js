let currentQuestion = 1;
let currentAnswer = '';
let currentImg = '';
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
    currentAnswer = $(this).data("answer");
    currentImg = $(this).data("img");
    //if answer is already selected, nothing happens
    if ($(this).hasClass("selected")) {
        return;
    //if selected answer is not already selected, select it
    } else {
        $(".answer").removeClass("selected");
        $(this).addClass("selected");
    }
});

$(".enter-btn").click(function() {
    if ($(".answer").hasClass("selected")) {
        $(".answer").removeClass("selected");
        //filter gameSelection on criteria depending on question answered
        if (currentQuestion === 1) {
            gameSelection = games.filter(game => game.console == currentAnswer);
        }
        if (currentQuestion === 2) {
            gameSelection = gameSelection.filter(game => game.genre == currentAnswer);
        }
        if (currentQuestion === 3) {
            gameSelection = gameSelection.filter(game => game.intensity == currentAnswer);
        }
        $(".error-message").text("");
        handleQuestionChange();
        currentQuestion++;
        return;
    }
    $(".error-message").text("Please select one of the answers.");
});

function handleQuestionChange() {
    //if last question has been answered, show game
    if (currentQuestion === 3) {
        $(".game-name").text(gameSelection[0].name);
        let selectedGameImg = $(".game-img")[3];
        $(selectedGameImg).attr('src', gameSelection[0].img);
        $(".game-website").attr('href', gameSelection[0].url);
        $(".enter-btn").addClass("hidden");
        $(".restart-btn").removeClass("hidden");
    };
    //hide previous question
    let previousQuestion = $(".js-container")
    [currentQuestion-1];
    $(previousQuestion).slideUp(1000);
    //show next question
    let nextQuestion = $(".js-container")[currentQuestion];
    $(nextQuestion).slideToggle(1000);
    //update progress bar
    let progressLine = $(".progress-line")[currentQuestion-1];
    $(progressLine).css('background-position', 'left');
    let boxImg = $(".game-img")[currentQuestion-1];
    $(boxImg).attr('src', currentImg);
    $(boxImg).css('opacity', '100');
    let progressBox = $(".progress-box")[currentQuestion];
    setTimeout(function(){
        $(progressBox).css('background', '#02833E');
    }, 1000);
};

$(".restart-btn").click(function(){
    location.reload();
})