$(document).ready(function() {

    // Change card color when mouse enters
    $("#profileCard").mouseenter(function() {

        $(this).css("background-color", "#dff6ff");

    });


    // Change back when mouse leaves
    $("#profileCard").mouseleave(function() {

        $(this).css("background-color", "white");

    });


    // Open QR popup
    $("#qrButton").click(function() {

        $("#qrPopup").css("display", "flex");

        // Call JavaScript function
        createQRCode();

    });


    // Close QR popup
    $("#closeQR").click(function() {

        $("#qrPopup").hide();

    });

});