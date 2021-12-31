function setup(){
   canvas=createCanvas(300,200);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ngxEsnNL9/model.json",modelLoaded);
}
function modelLoaded(){
   console.log("ModelLoaded!");
}
function draw(){
   image(video,0,0,300,200);
   classifier.classify(video,gotResults);
}
function gotResults(error,results){
   if (error){
       console.error(error);
   }
   else{
       console.log(results);
       document.getElementById("result_member_name").innerHTML=results[0].label;
       document.getElementById('result_member_accuracy').innerHTML=results[0].confidence.toFixed(3);  
   }
}