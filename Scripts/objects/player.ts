module objects{
    export class Player extends objects.GameObject{
        //V
        public isDead: boolean;

        //C
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");
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
        }
        public Reset(): void{

        }
        public Move():void{
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;

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
    }
}