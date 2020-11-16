function convert() {
  var canvas = document.getElementById("draw");
  var img = canvas.toDataURL("image/jpeg").slice(23);
  console.log(img);

  io.emit("translate", {img: img}, io.socket.sessionid);

}