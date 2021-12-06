let currentQuestion = 1;
let currentAnswer = '';

const games = [
    {name: 'Playstation Casual First-Person Shooter', console: 'playstation', genre: 'fps', casual: 'yes'},
    {name: 'Playstation Intense First-Person Shooter', console: 'playstation', genre: 'fps', casual: 'no'},
    {name: 'Playstation Casual Platformer', console: 'playstation', genre: 'platformer', casual: 'yes'},
    {name: 'Playstation Intense Platformer', console: 'playstation', genre: 'platformer', casual: 'no'},
    {name: 'Playstation Casual Puzzler', console: 'playstation', genre: 'puzzle', casual: 'yes'},
    {name: 'Playstation Intense Puzzler', console: 'playstation', genre: 'puzzle', casual: 'no'},
    {name: 'Xbox Casual First-Person Shooter', console: 'xbox', genre: 'fps', casual: 'yes'},
    {name: 'Xbox Intense First-Person Shooter', console: 'xbox', genre: 'fps', casual: 'no'},
    {name: 'Xbox Casual Platformer', console: 'xbox', genre: 'platformer', casual: 'yes'},
    {name: 'Xbox Intense Platformer', console: 'xbox', genre: 'platformer', casual: 'no'},
    {name: 'Xbox Casual Puzzler', console: 'xbox', genre: 'puzzle', casual: 'yes'},
    {name: 'Xbox Intense Puzzler', console: 'xbox', genre: 'puzzle', casual: 'no'},
    {name: 'Switch Casual First-Person Shooter', console: 'switch', genre: 'fps', casual: 'yes'},
    {name: 'Switch Intense First-Person Shooter', console: 'switch', genre: 'fps', casual: 'no'},
    {name: 'Switch Casual Platformer', console: 'switch', genre: 'platformer', casual: 'yes'},
    {name: 'Switch Intense Platformer', console: 'switch', genre: 'platformer', casual: 'no'},
    {name: 'Switch Casual Puzzler', console: 'switch', genre: 'puzzle', casual: 'yes'},
    {name: 'Switch Intense Puzzler', console: 'switch', genre: 'puzzle', casual: 'no'}
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
        $(".answer").removeClass("selected");
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