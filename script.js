let currentQuestion = 1;

$(".answer").click(function() {
    if (currentQuestion === 1) {
        if ($(this).hasClass("selected")) {
            $(this).removeClass("selected");
            return;
        } else {
            $(this).addClass("selected");
        }
    } else {
        if ($(this).hasClass("selected")) {
            return;
        } else {
            $(".answer").removeClass("selected");
            $(this).addClass("selected");
        }
    }
});

$(".btn").click(function() {
    if ($(".answer").hasClass("selected")) {
        console.log("Nice choice!");
        handleQuestionChange();
        return;
    }
    console.log("Gotta select something!");
});

function handleQuestionChange() {
    console.log("Ya");
    $(".one").slideUp(1000);
    $(".box-box").slideToggle(1000);
    currentQuestion++;
}