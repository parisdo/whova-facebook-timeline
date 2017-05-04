$("#white").click( function () {
    $(".textarea-box-modal").css("background", "white");
    $(".textarea-box-modal textarea").css("color", "#757575");
    $(".profile-picture").show();
    $(".textarea-box-modal .textarea-input").removeClass("white-placeholder");
    $(".textarea-box-modal textarea.textarea-input").css("text-align", "left");
    $("textarea.textarea-input").css("width", "83%");
    $("textarea.textarea-input").css("padding-top", "18px");
    $("textarea.textarea-input").css("padding-bottom", "14px");

});

$("#yellow").click( function () {
    $(".textarea-box-modal").css("background", "#FCD872");
    $(".textarea-box-modal textarea").css("color", "white");
});

$("#yellow-orange").click( function () {
    $(".textarea-box-modal").css("background", "-webkit-linear-gradient(left bottom, #FBC971, #F35A69)");
    $(".textarea-box-modal").css("background", "-o-linear-gradient(top right, #FBC971, #F35A69);");
    $(".textarea-box-modal").css("background", "-moz-linear-gradient(top right, #FBC971, #F35A69);");
    $(".textarea-box-modal").css("background", "linear-gradient(to top right, #FBC971, #F35A69);");
    $(".textarea-box-modal textarea").css("color", "white");

});

$("#red").click( function () {
    $(".textarea-box-modal").css("background", "#F35369");
    $(".textarea-box-modal textarea").css("color", "white");
});

$("#blue").click( function () {
    console.log("hi");
    $(".textarea-box-modal").css("background", "#4A90E2");
    $(".textarea-box-modal textarea").css("color", "white");

});

$("#darkgrey").click( function () {
    console.log("hi");
    $(".textarea-box-modal").css("background", "#5F6673");
    $(".textarea-box-modal textarea").css("color", "white");
});

$("#green-blue").click( function () {
    $(".textarea-box-modal").css("background", "-webkit-linear-gradient(left bottom, #5FED90, #1CB0F8)");
    $(".textarea-box-modal").css("background", "-o-linear-gradient(top right, #5FED90, #1CB0F8);");
    $(".textarea-box-modal").css("background", "-moz-linear-gradient(top right, #5FED90, #1CB0F8);");
    $(".textarea-box-modal").css("background", "linear-gradient(to top right, #5FED90, #1CB0F8);");
    $(".textarea-box-modal textarea").css("color", "white");

});

$("#pink-purple").click( function () {
    $(".textarea-box-modal").css("background", "-webkit-linear-gradient(left bottom, #ED37FA, #683EDC)");
    $(".textarea-box-modal").css("background", "-o-linear-gradient(top right, #ED37FA, #683EDC);");
    $(".textarea-box-modal").css("background", "-moz-linear-gradient(top right, #ED37FA, #683EDC);");
    $(".textarea-box-modal").css("background", "linear-gradient(to top right, #ED37FA, #683EDC);");
    $(".textarea-box-modal textarea").css("color", "white");

});


$("#yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").click( function () {
    $(".profile-picture").hide();
    $(".textarea-box-modal .textarea-input").addClass("white-placeholder");
    $(".textarea-box-modal textarea.textarea-input").css("text-align", "center");
    $(".textarea-box-modal textarea.textarea-input").css("align-items", "center");
    $("textarea.textarea-input").css("width", "100%");
    $("textarea.textarea-input").css("padding-top", "80px");
    $("textarea.textarea-input").css("padding-bottom", "40px");
    // $("texa.textarea-input").toggleClass("white-placeholder");
});

$(".collapse-colors").click( function () {
    $(".collapse-colors").css("display", "none");
    $(".uncollapse-colors").css("display", "inline-block");
    $("#white, #yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").hide();
})

$(".uncollapse-colors").click( function () {
    $(".uncollapse-colors").css("display", "none");
    $(".collapse-colors").css("display", "inline-block");
    $("#white, #yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").show();
})
