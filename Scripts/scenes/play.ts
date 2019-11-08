module scenes {
    export class PlayScene extends objects.Scene {
        private background : objects.Background;
        private player: objects.Player;
        //private enemy: objects.Enemy;
        private enemies : objects.Enemy[];
        private enemyNumber: number;

        private backgroundMusic: createjs.AbstractSoundInstance;
        private scoreboard: managers.Scoreboard;
        private explosion: objects.Explosion;
        private isExploding: boolean = false;

        private laserManager: managers.Laser;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Methods
        public Start(): void {
            this.player = new objects.Player();
            this.background = new objects.Background();
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNumber = 5;
            for (let index = 0; index < this.enemyNumber; index++) {
                this.enemies[index] = new objects.Enemy();                
            }
            this.laserManager = new managers.Laser();
            managers.Game.laserManager = this.laserManager;

            this.scoreboard = new managers.Scoreboard;
            this.scoreboard.x = 10;
            this.scoreboard.y = 10;

            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; //loop forever
            this.backgroundMusic.volume = 0.3;
            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            
            this.laserManager.Update();
            this.enemies.forEach(e => {
                if(!e.isDead) {
                    e.Update();

                    managers.Collision.CheckAABB(this.player, e);
                }
            });

            // SUPER INEFFICIENT. WE WILL FIX THIS LATER AS WELL
            this.laserManager.Lasers.forEach(laser => {
                this.enemies.forEach(enemy => {
                    managers.Collision.CheckAABB(laser, enemy);
                });
            });
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            this.enemies.forEach(e =>{
                this.addChild(e);
            });

            this.laserManager.Lasers.forEach(laser =>{
                this.addChild(laser);
            });

            this.addChild(this.scoreboard);
        }

        private handleExplosion(){
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        }
    }
}