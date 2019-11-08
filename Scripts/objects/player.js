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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //C
        function Player() {
            var _this = _super.call(this, "player") || this;
            _this.Start();
            return _this;
        }
        //M
        Player.prototype.Start = function () {
            this.x = 320;
            this.y = 700;
            this.isDead = false;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
            this.LaserFire();
        };
        Player.prototype.Reset = function () {
        };
        Player.prototype.Move = function () {
            //this.x = objects.Game.stage.mouseX;
            //this.y = objects.Game.stage.mouseY;
            if (managers.Game.keyboardManager.enabled) {
                if (managers.Game.keyboardManager.moveLeft) {
                    this.x -= 5;
                }
                if (managers.Game.keyboardManager.moveRight) {
                    this.x += 5;
                }
                if (managers.Game.keyboardManager.moveUp) {
                    this.y -= 5;
                }
                if (managers.Game.keyboardManager.moveDown) {
                    this.y += 5;
                }
            }
        };
        Player.prototype.CheckBound = function () {
            //RIGHT
            if (this.x >= (640 - this.halfWidth)) {
                this.x = 640 - this.halfWidth;
            }
            //LEFT
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        Player.prototype.LaserFire = function () {
            if (!this.isDead) {
                var ticker = createjs.Ticker.getTicks();
                // Player is trying to shoot the laser
                if ((managers.Game.keyboardManager.shoot) && (ticker % 10 == 0)) {
                    this.laserSpawn = new math.Vector2(this.x, this.y - this.halfHeight);
                    var currentLaser = managers.Game.laserManager.currentLaser;
                    var laser = managers.Game.laserManager.Lasers[currentLaser];
                    laser.x = this.laserSpawn.x;
                    laser.y = this.laserSpawn.y;
                    managers.Game.laserManager.currentLaser++;
                    if (managers.Game.laserManager.currentLaser > 49) {
                        managers.Game.laserManager.currentLaser = 0;
                    }
                    // Play a laser sound
                }
            }
        };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map