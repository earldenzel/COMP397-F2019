module objects{
    export class Enemy extends objects.GameObject {
        //V

        //C
        constructor(){
            super("enemy");
            this.Start();
        }

        //M
        public Start():void{
            this.Reset();
        }

        public Update(): void{
            this.Move();
            this.CheckBound();
        }
        public Reset(): void{
            this.x = Math.floor(Math.random() * 550) + 50;
            this.y = Math.floor(Math.random() * -800) - 50;
        }
        public Move():void{
            this.y += 10;
            this.rotation += 2;

        }
        public CheckBound():void{
            if (this.y >= 900 + this.halfHeight + 5){
                this.Reset();
            }

        }

    }
}