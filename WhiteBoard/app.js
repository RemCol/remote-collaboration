
// Express requires these dependencies
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
const port = 3001
// Configure our application
app.configure(function(){
  app.set('port', process.env.PORT || port);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

// Configure error handling
app.configure('development', function(){
  app.use(express.errorHandler());
});

// Setup Routes
app.get('/', routes.index);
app.get('/users', user.list);

// Enable Socket.io
var server = http.createServer(app).listen( app.get('port') );
var io = require('socket.io').listen( server );

// A user connects to the server (opens a socket)
io.sockets.on('connection', function (socket) {


  // A User starts a path
  socket.on( 'startPath', function( data, sessionId ) {

    socket.broadcast.emit( 'startPath', data, sessionId );

  });

  // A User continues a path
  socket.on( 'continuePath', function( data, sessionId ) {

    socket.broadcast.emit( 'continuePath', data, sessionId );

  });

  // A user ends a path
  socket.on( 'endPath', function( data, sessionId ) {

    ;
    socket.broadcast.emit( 'endPath', data, sessionId );

  });  

  socket.on( 'translate', async function( data, sessionId ) {

    console.log('tranlating')
    socket.broadcast.emit( 'translated', {data: await translate(data.img)}, sessionId );

  });  

});
async function translate(buffer) {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  // const fileName = name;
  const request = {
    image: {
      content: buffer
    }
  };
  // Read a local image as a text document
  const [result] = await client.documentTextDetection(request);
  console.log(result)
  const fullTextAnnotation = result.fullTextAnnotation;
  if (fullTextAnnotation === null) {
    return ""
  } else {
    console.log(`Full text: ${fullTextAnnotation.text}`);
    return fullTextAnnotation.text
  }
  // fullTextAnnotation.pages.forEach(page => {
  //   page.blocks.forEach(block => {
  //     console.log(`Block confidence: ${block.confidence}`);
  //     block.paragraphs.forEach(paragraph => {
  //       console.log(`Paragraph confidence: ${paragraph.confidence}`);
  //       paragraph.words.forEach(word => {
  //         const wordText = word.symbols.map(s => s.text).join('');
  //         console.log(`Word text: ${wordText}`);
  //         console.log(`Word confidence: ${word.confidence}`);
  //         word.symbols.forEach(symbol => {
  //           console.log(`Symbol text: ${symbol.text}`);
  //           console.log(`Symbol confidence: ${symbol.confidence}`);
  //         });
  //       });
  //     });
  //   });
  // });
}

// Promise.resolve(translate(Buffer.from("/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCACAAQEDASIAAhEBAxEB/8QAHAABAQACAwEBAAAAAAAAAAAAAAcCBQQGCAMJ/8QAMBAAAQQCAQMDAwIFBQAAAAAAAAECAwQFBhEHEhMIFCEVMUEiIxYyUWGBGGRxssH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/KoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANpiNW2TP0MtlMJgr16ngarb2TnrwOeynXWVkSSSqicNar5GN5X8uQ1ZZMx4elvp8x2vMesud6ueLOZCORqt9hh6VmaKoxqJ93WJ2TSqruOGQwKicP7lCNgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVClgMdkvTVlM/RxtKfK4Xcqzb87IWrar0Z6b2xK5yJ3JAs0bm/K9verU+7k5l5RugW81NK6h162fnRmrbVBJrWzsc7tR2Ktq1kz+eF7XRL2TsVPs+Fn45QCcg7B1B0vKdOd4zui5hUdbwd6ak6VGqjJ2scqMmZ/Vj29r2qnKK1zVRVRUU6+AAAGx1zX8ttuw4vVcBUdayeZuwY+lA37yzzPRkbE/urnIn+TvXqM2DDZvqvksfrF1beA1etT1fETc8tlq4+vHVSZv9pXRPm5+FVZVVURVVDZ+nKZdWu7n1dVHNk0PVrdrHy8co3KXHMx9RePy5j7bp0T/AG6qqKiK1ZCAAM4IJrM0datC+WWVyMjjY1XOe5V4RERPlVVfwB9UxuRXHOy6ULC0WzJWda8TvCkytVyRq/jt7lair2888IqnHPaPr0tY/V+lnRzozrcL8Ri9QdnKtrCxvl7I7rJYGvmm7lXvndI6w5y8r2rJI1O1P0ni4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8aLtGI69YRek3VK9gqey0cRBj9D2m9zVdBJA5iQ4q1LH2xvgljR0cc1jnwuVvL0Yq8RrZtY2LS8/f1XbcJdw+Yxczq9yjdhdFNBIn3a5jvlF/8VFNYehsTQxnqt1fGa5RdYTrnha/taz7Vhvj3PHwt/ahR7uO3IQRIjGI5eJ4okb3LKjGvDzyDOeCatNJWswvilicrJI3tVrmOReFRUX5RUX8GAFaRzdV9Lqojnx3OoO48Lwvy6jiKv/R8+S/y6t+Oz5kpXetld2q6L0w6Y5NskeewmHs5bLVnfHs35Gf3EEDkXhWye2SCRyKnx5UavyiokiAGw17N2taz+M2OhHFJZxVyG7CyZFVjnxPR7UciKiqnLU54VF4/KGvAFG61dZrPV/L054dYo67icctqWrjqssk6+e1O6xanlnlVXyPkleq/hrWtY1rU4VVnIAAGy17Wtj23Jx4TVNfyWayMqK6Opj6klmZ6J91RkaK5eP8Agp7vThltRhde65bdienFd6K2pXuL7/I25U+Va2nVV8kbUT7vm8beVREVVXgCPAoG06Z0mxOBtZDWetH17JRdngx/8OWavm5e1HfuvcrW8NVzvn79vH5J+AAAAAAAAAAAAAAAAAAAAAAAAAAAAzgnmrTR2a0z4pYnI+ORjla5jkXlFRU+UVF/JgAL/kdj0X1O1KLtyzuM0zqzCzwWNgyHbXwuyxMby2W/MnLoMi5e5HWFb45uG96seqvdj079Nu+6lv1jPdY+nGUqano1CXaMzJNAj6OQr12tfFVjsp3QSpYldDBy16p+67jlW8ECNj/EmxLhU1tc/kfpCP8AIlD3Untu/nnu8XPbzz888fcDlbvuWd6hbhmN42az58pnLkt2y5FXtR73KvaxFVVaxqcNa3n9LWoifCGkAAAAClfScV/pt+u/TKn1L+OPae88LfP4PYd3i8nHd2d36u3njn5JqVjXMpo+Y9OO06fl9vjw2y4XYauxYqlYqyyMzML4VrTwxyRtVI5Y+Y5E7+GuarvlO1STgXLJ52x0R6Ma7hNThTG7Z1NxUuVz+Wa96XYcT7xWU6leRqokMUvtnSyonL5EcxHKjURpDS33auK60dEauWoW7rd06R4RK2RpurJIzJ4R153inicx3LXVVsoyRHM48asd3fpUiAAHeekvSLYOrWXvV6F6lh8Jg6v1DP5/JK9tDEU+5G+WZzGucquc5rGMY1z3uciIn3VOkzxsimkijnZM1jla2RiORr0Rf5k7kReF+/yiL/VEAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABu9O3fb+nueg2fR9kyGEylf+S1SndE9W8oqsdx8PYqonLHctcicKioV3beqHpx6kZVvUHculmz4vabUKSZnG6zkatPD5K+i/qsMR8T31El+742I5EcrlZ288JBwBUN967ZHY9Mi6V6PrVHSdChtJffhcfK+aW/aROEnvWn/ALlp7eXdiO4ZGiojWJxysvAAAAAAAAAAAAAAAAAAAAD/2Q==", 'base64')))