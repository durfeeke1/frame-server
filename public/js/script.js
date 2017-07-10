  const STATUS_OK = 200
  POSTS_URL = 'pictures'

function requestPicture (pic) {

  var request = new XMLHttpRequest();

  request.addEventListener('load', function(){
    if(request.status === STATUS_OK){
      console.log("SUCCESS");   
    }else{
      console.log("FAIL");
    }
    
  });
    
  picturePost = {'picture': pic};

  console.log("requesting picture");

  request.open('POST', POSTS_URL, true);
  request.setRequestHeader('Content-type', 'application/json; charset=UTF-8' );
  request.send(JSON.stringify(picturePost));

}

function requestPicture1 () {
  requestPicture(1);
}

function requestPicture2 () {
  requestPicture(2);
}

function requestPicture3 () {
  requestPicture(3);
}

function requestPicture4 () {
  requestPicture(4);
}
document.getElementById("pictureBtn1").onclick = requestPicture1;
document.getElementById("pictureBtn2").onclick = requestPicture2;
document.getElementById("pictureBtn3").onclick = requestPicture3;
document.getElementById("pictureBtn4").onclick = requestPicture4;

