function generateQR() {
  var name = document.getElementById("inputText").value;
  
  if (name === "") {
      alert("Please enter a name");
      return;
  }
  
  var qrContainer = document.getElementById("qrCode");
  qrContainer.innerHTML = "";
  
  var qr = qrcode(0, 'M');
  qr.addData("https://example.com/" + "display.html?name=" + encodeURIComponent(name));
  qr.make();
  
  var qrImage = qr.createImgTag(8, 8);
  qrContainer.innerHTML = qrImage;
}