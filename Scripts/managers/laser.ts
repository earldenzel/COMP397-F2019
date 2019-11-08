module managers{
    export class Laser{
        //V
        public Lasers: objects.Laser[];
        public currentLaser: number;
        public laserCount: number;

        //C
        constructor(){
            this.Start();
        }

        //M
        private buildLaserPool():void{
            for (let index = 0; index < this.laserCount; index++) {
                this.Lasers[index] = new objects.Laser();
                
            }
        }

        public Start(): void{
            this.laserCount =50;
            //initialize array
            this.Lasers = new Array<objects.Laser>();
            this.buildLaserPool();
            this.currentLaser = 0;
        }

        public Update(): void{
            this.Lasers.forEach(laser =>{
                laser.Update();
            })

        }
    }
}