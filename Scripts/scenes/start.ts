module scenes {
    export class StartScene extends objects.Scene {
        // Variables
        private background: objects.Background;
        private welcomeLabel: objects.Label;
        private startButton: objects.Button;
        private startMusic: createjs.AbstractSoundInstance;

        // Constructor
        constructor() {
            super();
            this.Start();
        }

        public Start():void {
            // Initialize our objects for this scene
            this.background = new objects.Background();

            this.welcomeLabel = new objects.Label(
                "Welcome to School!", "60px", "Consolas", "#FFFFFF", 320, 240, true);

            this.startButton = new objects.Button("nextButton", 320, 300);            
            this.startMusic = createjs.Sound.play("start_music");
            this.startMusic.loop = -1; //loop forever
            this.startMusic.volume = 0.3;
            this.Main();
        }
        public Update():void {
        }

        private startButtonClick():void {
            // Change our game state from START to GAME
            managers.Game.currentScene = config.Scene.GAME;
        }

        public Main():void {
            // Add items to our scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }
    }
}