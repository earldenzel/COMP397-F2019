var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        //C
        function Keyboard() {
            this.enabled = true;
            //Listen for keyup and keydown events through DOM
            document.addEventListener("keydown", this.onKeyDown.bind(this), false);
            document.addEventListener("keyup", this.onKeyUp.bind(this), false);
        }
        //M
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = true;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = true;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                    break;
                case config.Keys.SPACE:
                    this.shoot = true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveUp = false;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveDown = false;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
                case config.Keys.SPACE:
                    this.shoot = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map