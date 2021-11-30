$(".answer").click(function() {
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
        return;
    }
    $(this).addClass("selected");
});

$(".btn").click(function() {
    console.log("button");
});