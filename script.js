$(".answer").click(function() {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        return;
    }
    $(this).addClass("selected");
});

$(".btn").click(function() {
    if ($(".answer").hasClass("selected")) {
        console.log("Nice choice!");
        return;
    }
    console.log("Gotta select something!");
});