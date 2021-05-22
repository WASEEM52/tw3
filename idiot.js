
  
  function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
  }
  
  function mouseReleased(){
    slingshot.fly();
  }
  
  function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
  }
  
  async function getTime(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
  
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
  
    if(hour >= 06 && hour <= 18){
      bg = rgb(255,153,51);
    } else{
      bg = rgb(55, 43, 43);
    }
  
    backgroundImg = bg;
  }
  