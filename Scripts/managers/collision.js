var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.CheckAABB = function (object1, object2) {
            // Check all bounds
            if ((object1.x + object1.halfWidth) > (object2.x - object2.halfWidth) &&
                (object1.x - object1.halfWidth) < (object2.x + object2.halfWidth) &&
                (object1.y + object1.halfHeight) > (object2.y - object2.halfHeight) &&
                (object1.y - object1.halfHeight) < (object2.y + object2.halfHeight)) {
                switch (object2.name) {
                    case "enemy":
                        // Change the score
                        // Create my explosion
                        var explosion = new objects.Explosion(object2.x, object2.y);
                        managers.Game.currentSceneObject.addChild(explosion);
                        managers.Game.currentSceneObject.removeChild(object1);
                        managers.Game.currentSceneObject.removeChild(object2);
                        object1.Reset();
                        object2.Reset();
                        break;
                }
                object2.isColliding = true;
            }
        };
        Collision.Check = function (object1, object2) {
            // Create 2 temp Vec2 objects used for collision detection
            var P1 = new math.Vector2(object1.x, object1.y);
            var P2 = new math.Vector2(object2.x, object2.y);
            if (math.Vector2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding) {
                    // React to our collision
                    // Set an objects alpha to be invisible
                    // Then reposition it and use it again in the pool
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