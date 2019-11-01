var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene() {
            var _this = _super.call(this) || this;
            _this.isExploding = false;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.player = new objects.Player();
            this.background = new objects.Background();
            //this.enemy = new objects.Enemy(this.assetManager);
            this.enemies = new Array();
            this.enemyNumber = 5;
            for (var index = 0; index < this.enemyNumber; index++) {
                this.enemies[index] = new objects.Enemy();
            }
            this.scoreboard = new managers.Scoreboard;
            this.scoreboard.x = 10;
            this.scoreboard.y = 10;
            createjs.Sound.stop();
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; //loop forever
            this.backgroundMusic.volume = 0.3;
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            this.enemies.forEach(function (e) {
                e.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, e);
                if (_this.player.isDead && !_this.isExploding) {
                    //Disable music
                    _this.backgroundMusic.stop();
                    //managers.Game.currentScene = config.Scene.OVER;
                    _this.explosion = new objects.Explosion(_this.player.x, _this.player.y);
                    _this.explosion.on("animationend", _this.handleExplosion);
                    _this.addChild(_this.explosion);
                    _this.isExploding = true;
                    _this.removeChild(_this.player);
                }
            });
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            this.enemies.forEach(function (e) {
                _this.addChild(e);
            });
            this.addChild(this.scoreboard);
        };
        PlayScene.prototype.handleExplosion = function () {
            this.stage.removeChild(this.explosion);
            this.isExploding = false;
            managers.Game.currentScene = config.Scene.OVER;
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map