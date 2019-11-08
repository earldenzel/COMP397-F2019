module managers {
    export class Game {
        //globals
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static currentSceneObject: objects.Scene;
        public static keyboardManager: managers.Keyboard;
        public static textureAtlas: createjs.SpriteSheet;
        public static laserManager: managers.Laser;
    }
}