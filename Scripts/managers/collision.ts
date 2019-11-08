module managers {
    export class Collision {
        public static CheckAABB(object1: objects.GameObject, object2: objects.GameObject) {
            // Check all bounds
            if((object1.x + object1.halfWidth) > (object2.x - object2.halfWidth) &&
                (object1.x - object1.halfWidth) < (object2.x + object2.halfWidth) &&
                (object1.y  + object1.halfHeight) > (object2.y - object2.halfHeight) &&
                (object1.y - object1.halfHeight) < (object2.y + object2.halfHeight)) {

                    switch(object2.name) 
                    {
                        case "enemy":
                            // Change the score

                            // Create my explosion
                            let explosion = new objects.Explosion(object2.x, object2.y);
                            managers.Game.currentSceneObject.addChild(explosion);
                            managers.Game.currentSceneObject.removeChild(object1);
                            managers.Game.currentSceneObject.removeChild(object2);
                            object1.Reset();
                            object2.Reset();
                        break;
                    }

                    object2.isColliding = true;
                }
            }

        public static Check(object1: objects.GameObject, object2: objects.GameObject) : boolean {
            // Create 2 temp Vec2 objects used for collision detection
            let P1: math.Vector2 = new math.Vector2(object1.x, object1.y);
            let P2: math.Vector2 = new math.Vector2(object2.x, object2.y);

            if(math.Vector2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if(!object2.isColliding) {

                    
                    // React to our collision
                    
                    // Set an objects alpha to be invisible
                    // Then reposition it and use it again in the pool

                    object2.isColliding = true;
                    return true;
                }
            } 
            else
            {
                object2.isColliding = false;
                return false;
            }
        }
    }
}