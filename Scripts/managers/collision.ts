module managers{
    export class Collision{
        public static Check(object1: objects.GameObject, object2: objects.GameObject) : boolean {
            //Create 2 temp vec objs
            let P1: math.Vector2 = new math.Vector2(object1.x, object1.y);
            let P2: math.Vector2 = new math.Vector2(object2.x, object2.y);

            if (math.Vector2.Distance(P1, P2) < (object1.halfHeight + object2.halfHeight)) {
                if (!object2.isColliding){
                    //React to our collision

                    switch (object2.name){
                        case "enemy":
                            createjs.Sound.play("explosion");
                        break;
                    }
                    object2.isColliding = true;
                    return true;
                }
            }
            else{
                object2.isColliding = false;
                return false;
            }
        }
    }
}