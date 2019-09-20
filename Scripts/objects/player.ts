module objects{
    export class Player extends objects.GameObject{
        //V

        //C
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "player");
            this.Start();
        }

        //M
    }
}