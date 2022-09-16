var Status="";
objects = [];
function setup(){
    canvas = createCanvas(650,450);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modalloaded);
    document.getElementById("status").innerHTML="status = detecting objects";

}

function modalloaded(){
    console.log("Modal is loaded");
    Status=true;
    objectDetector.detect(img,gotresults);
}


function gotresults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
img="";

function preload(){
    img = loadImage('images.jpg');
}

function draw(){
    image(img,0,0,600,450);
    if(Status!="" ){
        objectDetector.detect(img,gotresults);
        for(var i=0;i<objects.length;i++){
    
            document.getElementById("status").innerHTML="status : object detected";
            document.getElementById("tname").innerHTML="number of objects =" + objects.length;
            fill("blue");
            stroke("darkgreen");
            var percent=objects[0].confidence*100;
            percent=floor(percent);
            text(objects[i].label+"  "+ percent + "   % " +  " ",objects[i].x,objects[i].y);
            noFill();
            stroke("darkblue");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
        }
   
}

