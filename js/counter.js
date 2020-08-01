function updateCounter(){
    fetch("https://w0fn1g5qmk.execute-api.us-west-2.amazonaws.com/Prod/visitor-count/")
      .then(response => response.text())
      .then((body) => {
        var obj = JSON.parse(body);
        document.getElementById("counter").innerHTML=obj.visitorCount
      })
      .catch(function(error) {
        console.log(error); 
      });  
    }  