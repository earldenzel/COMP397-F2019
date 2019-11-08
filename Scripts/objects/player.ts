module objects{
    export class Player extends objects.GameObject{
        //V
        public isDead: boolean;
        private laserSpawn: math.Vector2;

        //C
        constructor(){
            super("player");
            this.Start();
        }

        //M
        public Start():void{
            this.x = 320;
            this.y = 700;

            this.isDead = false;
        }

        public Update(): void{
            this.Move();
            this.CheckBound();
            this.LaserFire();
        }
        public Reset(): void{

        }
        public Move():void{
            //this.x = objects.Game.stage.mouseX;
            //this.y = objects.Game.stage.mouseY;
            if (managers.Game.keyboardManager.enabled){
                if (managers.Game.keyboardManager.moveLeft){
                    this.x -= 5;
                }
                if (managers.Game.keyboardManager.moveRight){
                    this.x += 5;
                }
                if (managers.Game.keyboardManager.moveUp){
                    this.y -= 5;
                }
                if (managers.Game.keyboardManager.moveDown){
                    this.y += 5;
                }
            }

        }
        public CheckBound():void{
            //RIGHT
            if (this.x >= (640 - this.halfWidth)){
                this.x = 640-this.halfWidth
            }

            //LEFT
            if (this.x <= this.halfWidth){
                this.x = this.halfWidth
            }

        }
        
        public LaserFire():void {
            if(!this.isDead) {
                let ticker:number = createjs.Ticker.getTicks();

                // Player is trying to shoot the laser
                if((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vector2(this.x, this.y - this.halfHeight);
                    let currentLaser = managers.Game.laserManager.currentLaser;
                    let laser = managers.Game.laserManager.Lasers[currentLaser];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager.currentLaser++;
                    if(managers.Game.laserManager.currentLaser > 49) {
                        managers.Game.laserManager.currentLaser = 0;
                    }

                    // Play a laser sound
                }
            }
        }
    }
}