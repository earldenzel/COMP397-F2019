// Immediate Invoked Anonymous Function
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    // Store current scene and state information
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "backButton", src: "./Assets/BackButton.png" },
        { id: "nextButton", src: "./Assets/NextButton.png" },
        { id: "background", src: "./Assets/background.png" },
        { id: "player", src: "./Assets/spaceship.png" },
        { id: "enemy", src: "./Assets/asteroid_1.png" },
        { id: "explosion", src: "./Assets/Sounds/explosion.ogg" },
        { id: "play_music", src: "./Assets/Sounds/level_music.wav" },
        { id: "start_music", src: "./Assets/Sounds/start_music.wav" }
    ];
    function Init() {
        console.log("Initialization Start");
        // Start();
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        // Set up default game state
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        //create keyboard object and set global reference
        keyboardManager = new managers.Keyboard;
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != objects.Game.currentScene) {
            console.log("Changing scenes to" + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function clickableButtonMouseClick() {
        console.log("AHHHHHHH");
    }
    function Main() {
        console.log("Game Start...");
        // Finite State Machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        objects.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map