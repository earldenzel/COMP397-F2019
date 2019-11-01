module objects{
    export class Explosion extends objects.GameObject{
        //V
        private explosionSFX: createjs.AbstractSoundInstance;

        //C
        constructor (x:number, y:number){
            super("explosion");

            this.explosionSFX = createjs.Sound.play("explosion");
            this.explosionSFX.volume = 0.5;
            this.x = x;
            this.y = y;
        }
        // Functions
        public Start():void {}
        public Update():void {}
        public Reset():void {}
        public Move():void {}
        public CheckBound():void {}
    }
}