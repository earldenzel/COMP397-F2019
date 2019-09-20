module objects{
    export abstract class GameObject extends createjs.Bitmap {
        //V
        protected speedX:number;
        protected speedY:number;

        public width:number;
        public height:number;
        public halfWidth:number; //useful for collision detection
        public halfHeight:number;

        //C
        constructor(assetManager: createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));

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
        }

        public Start(): void{}
        public Update(): void{}
        public Reset(): void{}
        public Move(): void{}
        public CheckBound(): void{}
    }
}