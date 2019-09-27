module scenes {
    export class PlayScene extends objects.Scene {
        private background : objects.Background;
        private player: objects.Player;
        //private enemy: objects.Enemy;
        private enemies : objects.Enemy[];
        private enemyNumber: number;

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
            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            this.enemies.forEach(e =>{
                e.Update();
                managers.Collision.Check(this.player, e);
            });
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            this.enemies.forEach(e =>{
                this.addChild(e);
            });
        }
    }
}