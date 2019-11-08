module objects{
    export class Laser extends objects.GameObject{
        //V

        //C
        constructor(){
            super("laser1");
            this.Start();
        }

        //M
        public Start():void{
            //we may have to scale the laser to an appropriate size

            this.speedX = 0;
            this.speedY = -10;
        }

        public Update(): void{
            this.Move();
        }
        public Reset(): void{
            this.x = -5000;
            this.y = -5000;
        }
        public Move():void{
            this.y += this.speedY;

        }

        public Main():void {}
        public CheckBounds():void{
        }
    }
}