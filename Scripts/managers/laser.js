var managers;
(function (managers) {
    var Laser = /** @class */ (function () {
        //C
        function Laser() {
            this.Start();
        }
        //M
        Laser.prototype.buildLaserPool = function () {
            for (var index = 0; index < this.laserCount; index++) {
                this.Lasers[index] = new objects.Laser();
            }
        };
        Laser.prototype.Start = function () {
            this.laserCount = 50;
            //initialize array
            this.Lasers = new Array();
            this.buildLaserPool();
            this.currentLaser = 0;
        };
        Laser.prototype.Update = function () {
            this.Lasers.forEach(function (laser) {
                laser.Update();
            });
        };
        return Laser;
    }());
    managers.Laser = Laser;
})(managers || (managers = {}));
//# sourceMappingURL=laser.js.map