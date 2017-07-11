const fs = require('fs');

// in ms
const DELAY_BEFORE_REBOOT = 500;

const ERR_CODE_UPROCESSABLE_ENTITY = 422;
const SUCCESS_CODE = 200;

function rebootBoard(){
  var exec = require('child_process').exec;
  var cmd = 'echo MAKING SYSTEM CALL';

  exec(cmd, function(error, stdout, stderr) {
    console.log(stdout);
  });
}

module.exports = function(app) {
  /* Render the landing page */
  app.get('/', function(request, response){
    reponse.render('index.html');
  });

  app.post('/pictures',function(request,response){
    if(!request.body.picture){
      response.send(ERR_CODE_UNPROCESSABLE_ENTITY, 'Must provide a picture');
    }

    var options = { flag : 'w'};
    var fileName = "./testFiles/textFile.txt";
    var data = "writing data " + request.body.picture + " !";

    fs.writeFile(fileName, data, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
      response.send(SUCCESS_CODE);

      setTimeout(rebootBoard, DELAY_BEFORE_REBOOT);
    });

    console.log(request.body)
    console.log("Requested Picture! " + request.body.picture);
  });

};
