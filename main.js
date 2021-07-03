function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/88J7hRJ63/model.json',modelLoded);
}
function modelLoded()
{
    console.log("model loaded");
}
function draw()
{
    image(video,0,0,500,500);
    classifier.classify(video,gotResult)
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=(results[0].confidence*100).toFixed(2)+"%";
    }
    if (results[0].label=="mouse") {
      document.getElementById("emoji").innerHTML="&#128433;"  
    } else if(results[0].label=="speaker") {

        document.getElementById("emoji").innerHTML="&#128266;" 
    }
    else if(results[0].label=="mug") {

        document.getElementById("emoji").innerHTML="&#9749;" 
    }
    else if(results[0].label=="waterbottel") {

        document.getElementById("emoji").innerHTML="&#129524;" 
    }
    else if(results[0].label=="headphone") {

        document.getElementById("emoji").innerHTML="&#127911;" 
    }

}
