module managers{
    export class Scoreboard{
        //Variables
        public scoreLabel: objects.Label;
        public highScoreLabel: objects.Label;

        private score: number;
        private highScore: number;

        get Score(): number{
            return this.score;
        }
        set Score(newScore:number){
            this.score = newScore;
            this.scoreLabel.text = "Score: " + this.score;
        }
        get HighScore(): number{
            return this.highScore;
        }
        set HighScore(newHighScore:number){
            this.highScore = newHighScore;
            this.highScoreLabel.text = "Score: " + this.highScore;
        }

        //Constructor
        constructor()
        {
            this.Init();
        }


        private Init(): void{
            this.scoreLabel = new objects.Label("Score: 999999", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.highScoreLabel = new objects.Label("Hi-Score: 999999", "20px", "Consolas", "#FFFF00", 10, 40, false);
            this.score = 0;
            this.highScore = 0;
        }
        

    }
}