class DifficultyScreen{
    constructor(thisGame)
    {
        this.Game = thisGame;
        this.Btn1Difficulty = new ButtonImage(this.Game, "/photos/SnakeDiffEasy.png", 75, 194, 295, 482);
        this.Btn2Difficulty = new ButtonImage(this.Game, "/photos/SnakeDiffNormal.png", 355, 194, 580, 482);
        this.Btn3Difficulty = new ButtonImage(this.Game, "/photos/SnakeDiffHard.png", 638, 194, 857, 482);
        this.Btn4Difficulty = new ButtonImage(this.Game, "/photos/MenuPlayButton.jpg", 268, 540, 631, 628);
        this.Btn5Difficulty = new ButtonImage(this.Game, "/photos/BackButton.png", 48, 540, 160, 651);
    }

    update()
    {
        const DifficultyImg = new Image();
        DifficultyImg.src = "/photos/DifficultyBackground.jpg";
        this.Game.ctx.drawImage(DifficultyImg, 0, 0, this.Game.cvsW, this.Game.cvsH);
        this.Btn1Difficulty.draw();
        this.Btn2Difficulty.draw();
        this.Btn3Difficulty.draw();
        this.Btn4Difficulty.draw();
        this.Btn5Difficulty.draw();
        this.checkBtns();
    }

    checkBtns()
    {
        if(this.Game.MysX >= this.Btn1Difficulty.x && this.Game.MysX <= this.Btn1Difficulty.EndX && this.Game.MysY >= this.Btn1Difficulty.y && this.Game.MysY <= this.Btn1Difficulty.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            console.log("EASY");
            this.Game.obtiaznost = 0;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }
        
        if(this.Game.MysX >= this.Btn2Difficulty.x && this.Game.MysX <= this.Btn2Difficulty.EndX && this.Game.MysY >= this.Btn2Difficulty.y && this.Game.MysY <= this.Btn2Difficulty.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            console.log("NORMAL");
            this.Game.obtiaznost = 1;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }

        if(this.Game.MysX >= this.Btn3Difficulty.x && this.Game.MysX <= this.Btn3Difficulty.EndX && this.Game.MysY >= this.Btn3Difficulty.y && this.Game.MysY <= this.Btn3Difficulty.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            console.log("HARD");
            this.Game.obtiaznost = 2;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }

        if(this.Game.MysX >= this.Btn5Difficulty.x && this.Game.MysX <= this.Btn5Difficulty.EndX && this.Game.MysY >= this.Btn5Difficulty.y && this.Game.MysY <= this.Btn5Difficulty.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.aktualna_obrazovka = this.Game.menu;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }

        if((this.Game.keys[13] == true) || (this.Game.keys[32] == true) || (this.Game.MysX >= this.Btn4Difficulty.x && this.Game.MysX <= this.Btn4Difficulty.EndX && this.Game.MysY >= this.Btn4Difficulty.y && this.Game.MysY <= this.Btn4Difficulty.EndY))
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.play.init();
            this.Game.aktualna_obrazovka = this.Game.play;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }
    }

}