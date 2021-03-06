let questionNumber = 1;
let questionTransitionTime = 500;
let isDuringQuestionTransition = false;
let selectedAnswer = '';
let selectedAnswerImage = '';
let isOnFinalQuestion = false;

let gameSelection = [
    {
        name: 'Paladins: Champions of the Realm',
        console: 'playstation',
        genre: 'fps',
        intensity: 'casual',
        url: 'https://www.paladins.com/',
        img: './img/games/paladins.jpeg'
    },
    {
        name: 'Killzone: Shadow Fall',
        console: 'playstation',
        genre: 'fps',
        intensity: 'intense',
        url: 'https://killzone.com/',
        img: './img/games/killzone.jpeg'
    },
    {
        name: 'Sackboy: A Big Adventure',
        console: 'playstation',
        genre: 'platformer',
        intensity: 'casual',
        url: 'https://sheffield.sumo-digital.com/sackboy-a-big-adventure',
        img: './img/games/sackboy.jpeg'
    },
    {
        name: 'Dying Light 2: Stay Human',
        console: 'playstation',
        genre: 'platformer',
        intensity: 'intense',
        url: 'https://dl2.dyinglightgame.com/',
        img: './img/games/dying-light.jpeg'
    },
    {
        name: 'The Pedestrian',
        console: 'playstation',
        genre: 'puzzle',
        intensity: 'casual',
        url: 'https://www.skookum-arts.com/',
        img: './img/games/pedestrian.jpeg'
    },
    {
        name: 'Little Nightmares II',
        console: 'playstation',
        genre: 'puzzle',
        intensity: 'intense',
        url: 'https://en.bandainamcoent.eu/little-nightmares/little-nightmares-ii',
        img: './img/games/little-nightmares.jpeg'
    },

    {
        name: 'Slime Rancher',
        console: 'xbox',
        genre: 'fps',
        intensity: 'casual',
        url: 'http://www.slimerancher.com/',
        img: './img/games/slime-rancher.jpeg'
    },
    {
        name: 'Halo: Infinite',
        console: 'xbox',
        genre: 'fps',
        intensity: 'intense',
        url: 'https://www.xbox.com/en-US/games/halo-infinite',
        img: './img/games/halo.jpeg'
    },
    {
        name: 'Unravel 2',
        console: 'xbox',
        genre: 'platformer',
        intensity: 'casual',
        url: 'https://www.ea.com/games/unravel',
        img: './img/games/unravel.jpeg'
    },
    {
        name: 'Ori and the Will of the Wisps',
        console: 'xbox',
        genre: 'platformer',
        intensity: 'intense',
        url: 'https://www.orithegame.com/',
        img: './img/games/ori.jpeg'
    },
    {
        name: 'Rime',
        console: 'xbox',
        genre: 'puzzle',
        intensity: 'casual',
        url: 'https://www.tequilaworks.com/en/projects/rime/',
        img: './img/games/rime.jpeg'
    },
    {
        name: 'Inside',
        console: 'xbox',
        genre: 'puzzle',
        intensity: 'intense',
        url: 'https://playdead.com/games/inside/',
        img: './img/games/inside.jpeg'
    },

    {
        name: 'Screen Cheat',
        console: 'switch',
        genre: 'fps',
        intensity: 'casual',
        url: 'https://samuraipunk.com/screencheat',
        img: './img/games/screen-cheat.jpeg'
    },
    {
        name: 'Overwatch',
        console: 'switch',
        genre: 'fps',
        intensity: 'intense',
        url: 'https://playoverwatch.com/en-us/',
        img: './img/games/overwatch.jpeg'
    },
    {
        name: 'Donkey King Country: Tropical Freeze',
        console: 'switch',
        genre: 'platformer',
        intensity: 'casual',
        url: 'https://www.nintendo.com/games/detail/donkey-kong-country-tropical-freeze-switch/', img: './img/games/donkey-kong.jpeg'
    },
    {
        name: 'Celeste',
        console: 'switch',
        genre: 'platformer',
        intensity: 'intense',
        url: 'http://www.celestegame.com/',
        img: './img/games/celeste.jpeg'},
    {
        name: 'Captain Toad: Treasure Tracker',
        console: 'switch',
        genre: 'puzzle',
        intensity: 'casual',
        url: 'https://www.nintendo.com/games/detail/captain-toad-treasure-tracker-switch/',
        img: './img/games/captain-toad.jpeg'
    },
    {
        name: 'Baba is You',
        console: 'switch',
        genre: 'puzzle',
        intensity: 'intense',
        url: 'https://hempuli.com/baba/',
        img: './img/games/baba.jpeg'
    }
];

$(".answer").on('focus click', function(event){
    handleSelectAnswer(event);
})

function handleSelectAnswer(event) {
    let target = $(event.currentTarget);
    let isAnswerSelected = target.hasClass("selected");

    selectedAnswer = target.data("answer");
    selectedAnswerImage = target.data("img");

    if (isAnswerSelected) return;

    $(".answer").removeClass("selected");
    target.addClass("selected");
}

$(document).on('keypress',function(e) {
    const enterKey = 13;

    if (isOnFinalQuestion || e.keyCode !== enterKey) return;
    
    handleSubmitAnswer();
});

$(".submit-btn").click(function() {
    handleSubmitAnswer();
});

function handleSubmitAnswer() {
    let isAnswerSelected = $(".answer").hasClass("selected");

    if (isDuringQuestionTransition) return;

    handleErrorMessage(isAnswerSelected);

    if (!isAnswerSelected) return;

    handleFilterGameSelection();
    handleQuestionChange();
}

function handleErrorMessage(isAnswerSelected) {
    let errorMessage = $(".js-error-message");
    let newMessage = isAnswerSelected ? "" : "Please select one of the answers."

    errorMessage.text(newMessage);
}

function handleFilterGameSelection() {
    let isOnConsoleQuestion = (questionNumber === 1);
    let isOnGenreQuestion = (questionNumber === 2);

    if (isOnConsoleQuestion) {
        gameSelection = gameSelection.filter(game => game.console == selectedAnswer);
        return;
    };
    if (isOnGenreQuestion) {
        gameSelection = gameSelection.filter(game => game.genre == selectedAnswer);
        return;
    };

    gameSelection = gameSelection.filter(game => game.intensity == selectedAnswer);
    isOnFinalQuestion = true;
}

function handleQuestionChange() {
    $(".answer").removeClass("selected");
    
    if (isOnFinalQuestion) {
        handleShowFinalGame();
        return;
    };
    
    handleShowNewQuestion();
    handleUpdateProgressBar();

    questionNumber++;
};

function handleShowNewQuestion() {
    let questionJustAnswered = $(".js-container")[questionNumber-1];
    let newQuestion = $(".js-container")[questionNumber];

    $(questionJustAnswered).slideUp(questionTransitionTime);
    $(newQuestion).slideDown(questionTransitionTime);
    isDuringQuestionTransition = true;

    setTimeout(function(){
        isDuringQuestionTransition = false;
    }, questionTransitionTime);
};

function handleUpdateProgressBar() {
    let progressLine = $(".progress-line")[questionNumber-1];
    let progressBoxImage = $(".progress-box-img")[questionNumber-1];
    let progressBox = $(".progress-box")[questionNumber];

    $(progressLine).css('background-position', 'left');
    $(progressBoxImage).attr('src', selectedAnswerImage).css('opacity', '100');

    setTimeout(function(){
        $(progressBox).css('background', '#02833E');
    }, questionTransitionTime);
};

function handleShowFinalGame() {
    $(".js-game-img").on('load', function() {
        handleShowNewQuestion();
        handleUpdateProgressBar();
    });
    $(".js-game-img").attr('src', gameSelection[0].img);
    $(".js-game-name").text(gameSelection[0].name);
    $(".js-game-website").attr('href', gameSelection[0].url);
    $(".submit-btn").addClass("hidden");
    $(".restart-btn").removeClass("hidden");
}

$(".restart-btn").click(function(){
    if (isDuringQuestionTransition) return;
    
    location.reload();
})