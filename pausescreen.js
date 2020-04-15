class PauseScreen{
    constructor(thisGame)
    {
        this.Game = thisGame;
        this.Btn1Pause = new ButtonImage(this.Game, "/photos/RetryButton.jpg", 214, 293, 686, 434);
        this.Btn2Pause = new ButtonImage(this.Game, "/photos/ControlsMenuButton.jpg", 260, 465, 642, 522);
        this.pausedClicked = false;
    }

    update()
    {
        console.log("PAUZNUTE");
        const PauseImg = new Image();
        PauseImg.src = "/photos/PauseScreenBackground.png";
        this.Game.ctx.drawImage(PauseImg, 0, 0, this.Game.cvsW, this.Game.cvsH);
        this.Btn1Pause.draw();
        this.Btn2Pause.draw();
        this.checkBtns();
    }

    checkBtns()
    {
        if(this.Game.keys[80])
        {
            this.pausedClicked = true;
        }
        
        if((this.pausedClicked) || (this.Game.MysX >= this.Btn1Pause.x && this.Game.MysX <= this.Btn1Pause.EndX && this.Game.MysY >= this.Btn1Pause.y && this.Game.MysY <= this.Btn1Pause.EndY))
        {
            if(this.Game.keys[80] == false)
            {
                if(!this.Game.soundsMuted)
                {
                    this.Game.SoundClick.play();
                }
                
                this.Game.aktualna_obrazovka = this.Game.play;
                this.pausedClicked = false;
                this.Game.MysX = null;
                this.Game.MysY = null;    
            }
        }
        
        if(this.Game.MysX >= this.Btn2Pause.x && this.Game.MysX <= this.Btn2Pause.EndX && this.Game.MysY >= this.Btn2Pause.y && this.Game.MysY <= this.Btn2Pause.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.aktualna_obrazovka = this.Game.menu;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }
    }
}