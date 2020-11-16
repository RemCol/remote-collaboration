// -----------
// Setup
// -----------

// Each user has a unique session ID
// We'll use this to keep track of paths
var mysessionId = io.socket.sessionid;
console.log(mysessionId)
var canvasLayer = document.getElementById("draw");
canvasLayer.style.background = "black";
defaultLayer = new paper.Layer();
allGroup = new paper.Group();
// An object to keep track of each users paths
// We'll use session ID's as keys
paths = {};





// -----------
// User Events
// -----------


// The user started a path
function onMouseDown(event) {

  startPath( event.point );

  // Inform the backend
  emit("startPath", {x: event.point.x, y: event.point.y});

}

function onMouseDrag(event) {

  var step        = event.delta / 2;
  step.angle     += 90; 
  var top         = event.middlePoint + step;
  var bottom      = event.middlePoint - step;

  continuePath( event.point );

  // Inform the backend
  emit("continuePath", {x: event.point.x, y: event.point.y});

}

function onMouseUp(event) {

  endPath(event.point);

  // Inform the backend
  emit("endPath", {x: event.point.x, y: event.point.y});

}


// console.log(translate)


// -----------------
// Drawing functions
// Use to draw multiple users paths
// -----------------

counter = 0;
function startPath( x,y ) {
  defaultLayer.activate();
  if (counter == 0) {
    paths["Layer"+mysessionId] = new paper.Layer();
  } else if (counter == 3) {
    paths["Layer"+mysessionId].removeChildren()
    // delete paths["Layer"+sessionId]
  }
  counter++;
  paths[mysessionId] = new paper.Path();
  allGroup.addChild(paths[mysessionId]);
  paths[mysessionId].strokeColor = "white";
  paths[mysessionId].add(new paper.Point(x, y));

  view.draw();
}

function continuePath(x,y) {
  paths[mysessionId].add(new paper.Point(x, y));

  view.draw();
}

function endPath( x,y) {
  paths[mysessionId].add(new paper.Point(x, y));
  console.log(allGroup.exportSVG().outerHTML);
  var canvas = document.getElementById("draw");
  var img    = canvas.toDataURL("image/jpeg").slice(23);
  console.log(img);
  // emit("translate", {img: img});
  view.draw();
}

io.on( 'translated', function( data ) {
  
  alert(data.data)
  
})
function convert() {
  var canvas = document.getElementById("draw");
  var img = canvas.toDataURL("image/jpeg").slice(23);
  console.log(img);

  emit("translate", {img: img});

}


// -----------------
// Emit
// Use to inform the server of user events
// -----------------


function emit(eventName, data) {

  io.emit(eventName, data, mysessionId);

}







// -----------------
// On
// Draw other users paths
// -----------------



io.on( 'startPath', function( data ) {
  
  startPath(data.x, data.y);
  
})


io.on( 'continuePath', function( data ) {

  continuePath(data.x, data.y);
  view.draw();
  
})


io.on( 'endPath', function( data ) {

  endPath(data.x, data.y);
  view.draw();
  
})
