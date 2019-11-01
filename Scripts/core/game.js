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
    var textureAtlasData; //json file with a variety of types
    var textureAtlas;
    textureAtlasData = {
        "images": [],
        "framerate": 20,
        "frames": [
            [1, 1, 82, 84, 0, -6, -5],
            [85, 1, 85, 81, 0, -3, -4],
            [172, 1, 80, 78, 0, -6, -8],
            [172, 81, 82, 69, 0, -3, -2],
            [85, 84, 84, 79, 0, -3, -4],
            [171, 152, 83, 75, 0, -3, -4],
            [1, 87, 81, 66, 0, -3, -1],
            [1, 155, 81, 64, 0, -3, 0],
            [84, 165, 65, 67, 0, -15, -17],
            [1, 221, 65, 66, 0, -14, -17],
            [151, 165, 17, 17, 0, -39, -43],
            [151, 229, 52, 52, 0, -21, -26],
            [205, 229, 41, 60, 0, 0, 0],
            [68, 234, 39, 31, 0, 0, 0],
            [109, 234, 39, 31, 0, 0, 0],
            [68, 267, 30, 24, 0, 0, 0]
        ],
        "animations": {
            "Explosion": {
                "frames": [10, 11, 8, 9, 2, 0, 1, 4, 5, 3, 6, 7],
                "speed": 0.1
            },
            "player": { "frames": [12] },
            "backButton": { "frames": [13] },
            "nextButton": { "frames": [14] },
            "enemy": { "frames": [15] }
        }
    };
    assetManifest = [
        { id: "textureAtlas", src: "./Assets/Sprites/textureAtlas.png" },
        { id: "background", src: "./Assets/background.png" },
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
        textureAtlasData.images = [assetManager.getResult("textureAtlas")];
        textureAtlas = new createjs.SpriteSheet(textureAtlasData);
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        // Freqeuncy of checks. Computationally expensive. Turn on in menus, Turn off in game
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        // Set up default game state
        managers.Game.stage = stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        //create keyboard object and set global reference
        keyboardManager = new managers.Keyboard;
        managers.Game.keyboardManager = keyboardManager;
        // Setup global reference to asset manager and textureAtlas
        managers.Game.assetManager = assetManager;
        managers.Game.textureAtlas = textureAtlas;
        Main();
    }
    function Update() {
        // Has my state changed since the last check?
        if (currentState != managers.Game.currentScene) {
            console.log("Changing scenes to" + managers.Game.currentScene);
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
        switch (managers.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene();
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene();
                stage.addChild(currentScene);
                break;
        }
        currentState = managers.Game.currentScene;
        managers.Game.currentSceneObject = currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map