// Get the modal
var modal = document.getElementById('myModal');


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

var textarea = $(".textarea-input");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal
$(".textarea-input").click( function () {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
});

$("#ellipsis").click( function () {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
});

$("#photo-video").click( function () {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
});

$("#feeling-activity").click( function () {
    modal.style.display = "block";
    $("body").css("overflow", "hidden");
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("hi");
    modal.style.display = "none";
    // reset colors to original state
    $("body").css("overflow", "auto");
    $("textarea.textarea-input").css("width", "83%");
    $("textarea.textarea-input").css("padding-top", "18px");
    $("textarea.textarea-input").css("padding-bottom", "14px");
    $(".profile-picture").show();
    $(".uncollapse-colors").css("display", "none");
    $(".collapse-colors").css("display", "inline-block");
    $("#white, #yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").show();
    $(".textarea-box-modal").css("background", "white");
    $(".textarea-box-modal .textarea-input").removeClass("white-placeholder");
    $(".textarea-box-modal textarea.textarea-input").css("text-align", "left");

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        // reset colors to original state
        $("body").css("overflow", "auto");
        $("textarea.textarea-input").css("width", "83%");
        $("textarea.textarea-input").css("padding-top", "18px");
        $("textarea.textarea-input").css("padding-bottom", "14px");
        $(".profile-picture").show();
        $(".uncollapse-colors").css("display", "none");
        $(".collapse-colors").css("display", "inline-block");
        $("#white, #yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").show();
        $(".textarea-box-modal").css("background", "white");
        $(".textarea-box-modal .textarea-input").removeClass("white-placeholder");
    $(".textarea-box-modal textarea.textarea-input").css("text-align", "left");
    }
}

$(".post.button").click( function () {
    modal.style.display = "none";
    // reset colors to original state
    $("body").css("overflow", "auto");
    $("textarea.textarea-input").css("width", "83%");
    $("textarea.textarea-input").css("padding-top", "18px");
    $("textarea.textarea-input").css("padding-bottom", "14px");
    $(".profile-picture").show();
    $(".uncollapse-colors").css("display", "none");
    $(".collapse-colors").css("display", "inline-block");
    $("#white, #yellow, #yellow-orange, #red, #blue, #darkgrey, #green-blue, #pink-purple").show();
    $(".textarea-box-modal").css("background", "white");
    $(".textarea-box-modal .textarea-input").removeClass("white-placeholder");
    $(".textarea-box-modal textarea.textarea-input").css("text-align", "left");

});
