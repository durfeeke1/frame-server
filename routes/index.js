const fs = require('fs');

module.exports = function(app) {
  /* Render the landing page */
  app.get('/', function(request, response){
    reponse.render('index.html');
  });

  app.post('/pictures',function(request,response){
    if(!request.body.picture){
      response.send(422, 'Must provide a picture');
    }

    var options = { flag : 'w'};
    var fileName = "./testFiles/textFile.txt";
    var data = "writing data " + request.body.picture + " !";

    fs.writeFile(fileName, data, function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    console.log(request.body)
    console.log("Requested Picture! " + request.body.picture);
  });

};
