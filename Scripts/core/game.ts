//Immediate Invoked Anonymous Function

(function(){

    let canvas = document.getElementById("canvas");
    let stage : createjs.Stage;
    let helloLabel : createjs.Text;
    
    let upDirection : boolean;
    let rightDirection: boolean;

    function Init() {
        console.log("Initialization Start");
        Start();
    }

    function Start() {
        console.log("Starting application...");

        //initialize createjs
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; //60fps
        createjs.Ticker.on("tick", Update);

        upDirection = true;
        rightDirection = true;
        Main();

    }

    function Update() {
        stage.update();
        if (rightDirection){
            helloLabel.x += 1;
        }
        else{
            helloLabel.x -= 1;

        }
        if (upDirection){
            helloLabel.y += 1;

        }
        else{
            helloLabel.y -= 1;
        }

        if (helloLabel.x > 600 && rightDirection){
            rightDirection = false;
        }
        else if (helloLabel.x < 0 && !rightDirection){
            rightDirection = true;
        }
        if (helloLabel.y > 440 && upDirection){
            upDirection = false;
        }
        else if (helloLabel.y < 0 && !upDirection){
            upDirection = true;
        }
    }

    function Main() {        
        console.log("Game Start!");
        helloLabel = new createjs.Text("Hello World!", "40px Consolas", "#000000");
        helloLabel.x = 100;
        helloLabel.y = 100;
        stage.addChild(helloLabel);

    }
    window.onload = Init;
})();