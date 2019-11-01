module objects{
    export class Background extends createjs.Bitmap{
        //Vars
        private speedY: number;

        constructor (){
            super(managers.Game.assetManager.getResult("background"));
            this.Start();

        }

        public Start(): void{
            this.speedY = 0.5;
            this.Reset();
        }

        public Update(): void{
            this.Move();
            this.CheckBound();
        }

        public Reset(): void{
            this.y = -124
        }

        public Move(): void{
            this.y += this.speedY;
        }

        public CheckBound(): void{
            if (this.y >= 0){
                this.Reset();
            }
        }
    }
}