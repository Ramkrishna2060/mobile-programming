function createQRCode() {

    // Remove old QR code
    document.getElementById("qrcode").innerHTML = "";

    // Profile information
    let profileInfo =
        "Name: Ram Krishna Sah\n" +
        "Address: Kathmandu, Nepal\n" +
        "Email: ram@example.com\n" +
        "Phone: 98XXXXXXXX\n" +
        "Occupation: IT Student";

    // Create QR code
    new QRCode(document.getElementById("qrcode"), {
        text: profileInfo,
        width: 150,
        height: 150
    });
}