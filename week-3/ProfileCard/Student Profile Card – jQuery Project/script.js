$(document).ready(function () {

    // =========================
    // 1. GET & SET
    // =========================

    // Show Name - GET text
    $("#show-name").click(function () {
        let name = $("#student-name").text();
        $("#output").text(name);
    });

    // Change Name - SET text
    $("#change-name").click(function () {
        $("#student-name").text("Ram Krishna Sah");
    });

    // Show Bio - GET HTML
    $("#show-bio").click(function () {
        let bio = $("#student-bio").html();
        $("#output").text(bio);
    });

    // Get Input - GET value
    $("#get-input").click(function () {
        let nickname = $("#nickname-input").val();
        $("#output").text(nickname);
    });

    // Set Input - SET value
    $("#set-input").click(function () {
        $("#nickname-input").val("jQuery Pro");
    });


    // =========================
    // 2. CSS CLASSES
    // =========================

    // Add highlighted class
    $("#highlight-card").click(function () {
        $("#profile-card").addClass("highlighted");
    });

    // Remove highlighted class
    $("#remove-highlight").click(function () {
        $("#profile-card").removeClass("highlighted");
    });

    // Toggle dark-mode class
    $("#dark-mode").click(function () {
        $("#profile-card").toggleClass("dark-mode");
    });

    // Toggle rounded class
    $("#rounded").click(function () {
        $("#profile-photo").toggleClass("rounded");
    });


    // =========================
    // 3. CSS METHOD
    // =========================

    // Change background to red
    $("#red-background").click(function () {
        $("#profile-card").css("background", "#e74c3c");
    });

    // Reset background to white
    $("#reset-background").click(function () {
        $("#profile-card").css("background", "white");
    });


    // =========================
    // 4. HIDE & SHOW
    // =========================

    // Hide photo slowly
    $("#hide-photo").click(function () {
        $("#profile-photo").hide("slow");
    });

    // Show photo slowly
    $("#show-photo").click(function () {
        $("#profile-photo").show("slow");
    });

    // Toggle bio
    $("#toggle-bio").click(function () {
        $("#student-bio").toggle();
    });


    // =========================
    // 5. FADE
    // =========================

    // Fade out card
    $("#fade-out").click(function () {
        $("#profile-card").fadeOut();
    });

    // Fade in card
    $("#fade-in").click(function () {
        $("#profile-card").fadeIn();
    });

    // Fade card to 50% opacity
    $("#fade-50").click(function () {
        $("#profile-card").fadeTo("slow", 0.5);
    });


    // =========================
    // 6. SLIDE
    // =========================

    // Slide up skills
    $("#slide-up").click(function () {
        $("#skills-list").slideUp();
    });

    // Slide down skills
    $("#slide-down").click(function () {
        $("#skills-list").slideDown();
    });

    // Slide toggle skills
    $("#slide-toggle").click(function () {
        $("#skills-list").slideToggle();
    });


    // =========================
    // 7. ANIMATE
    // =========================

    $("#animate-card").click(function () {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

    });


    // =========================
    // 8. EVENTS
    // =========================

    // Mouse enters photo
    $("#profile-photo").mouseenter(function () {
        $("#profile-photo").addClass("shadow");
    });

    // Mouse leaves photo
    $("#profile-photo").mouseleave(function () {
        $("#profile-photo").removeClass("shadow");
    });

    // Key pressed in nickname input
    $("#nickname-input").keypress(function (event) {
        $("#output").text(event.key);
    });

});