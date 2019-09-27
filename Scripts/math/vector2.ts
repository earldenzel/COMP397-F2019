module math{
    export class Vector2 extends createjs.Point{
        constructor(x: number = 0, y: number = 0){
            super(x, y);
        }

        public static Distance(P1:Vector2, P2:Vector2): number{
            return Math.sqrt(Math.pow(P1.x - P2.x,2) + Math.pow(P1.y - P2.y,2));
        }
    }
}