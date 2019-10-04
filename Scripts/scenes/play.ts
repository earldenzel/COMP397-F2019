module scenes {
    export class PlayScene extends objects.Scene {
        private background : objects.Background;
        private player: objects.Player;
        //private enemy: objects.Enemy;
        private enemies : objects.Enemy[];
        private enemyNumber: number;

        private backgroundMusic: createjs.AbstractSoundInstance;
        private scoreboard: managers.Scoreboard;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Methods
        public Start(): void {
            this.player = new objects.Player(this.assetManager);
            this.background = new objects.Background(this.assetManager);
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNumber = 5;
            for (let index = 0; index < this.enemyNumber; index++) {
                this.enemies[index] = new objects.Enemy(this.assetManager);                
            }

            this.scoreboard = new managers.Scoreboard;

            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; //loop forever
            this.backgroundMusic.volume = 0.3;
            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            this.enemies.forEach(e =>{
                e.Update();
                this.player.isDead = managers.Collision.Check(this.player, e);

                if (this.player.isDead) {
                    //Disable music
                    this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            this.enemies.forEach(e =>{
                this.addChild(e);
            });
            this.addChild(this.scoreboard.highScoreLabel);
            this.addChild(this.scoreboard.scoreLabel);
        }
    }
}