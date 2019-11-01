module objects{
    export abstract class GameObject extends createjs.Sprite {
        //V
        protected speedX:number;
        protected speedY:number;

        public width:number;
        public height:number;
        public halfWidth:number; //useful for collision detection
        public halfHeight:number;
        public isColliding:boolean;

        //C
        constructor(imageString:string){
            super(managers.Game.textureAtlas, imageString);

            this.name = imageString;

            this.Init();
        }

        //M
        private Init(): void {
            //Initialize all the properties of my object
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;

            //Registration Points
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.isColliding = false;
        }

        public Start(): void{}
        public Update(): void{}
        public Reset(): void{}
        public Move(): void{}
        public CheckBound(): void{}
    }
}