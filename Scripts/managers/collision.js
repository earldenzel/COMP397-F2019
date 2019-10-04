var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (object1, object2) {
            //Create 2 temp vec objs
            var P1 = new math.Vector2(object1.x, object1.y);
            var P2 = new math.Vector2(object2.x, object2.y);
            if (math.Vector2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    //React to our collision
                    switch (object2.name) {
                        case "enemy":
                            createjs.Sound.play("explosion");
                            break;
                    }
                    object2.isColliding = true;
                    return true;
                }
            }
            else {
                object2.isColliding = false;
                return false;
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map