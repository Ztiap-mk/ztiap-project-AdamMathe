class OverScreen{
    constructor(thisGame){
        this.Game = thisGame;
        this.Btn1Over = new ButtonImage(this.Game, "/photos/ControlsMenuButton.jpg", 42, 602, 416, 697);
        this.Btn2Over = new ButtonImage(this.Game, "/photos/PlayAgainButton.jpg", 444, 602, 849, 697);
    }

    checkBtns()
    {
        //MAIN MENU
        if(this.Game.MysX >= this.Btn1Over.x && this.Game.MysX <= this.Btn1Over.EndX && this.Game.MysY >= this.Btn1Over.y && this.Game.MysY <= this.Btn1Over.EndY)
        {
            this.Game.aktualna_obrazovka = this.Game.menu;
            this.Game.play.respawnSnake();
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.MysX = null;
            this.Game.MysY = null;
        }

        //PLAY AGAIN
        if((this.Game.keys[82] == true) || (this.Game.MysX >= this.Btn2Over.x && this.Game.MysX <= this.Btn2Over.EndX && this.Game.MysY >= this.Btn2Over.y && this.Game.MysY <= this.Btn2Over.EndY))
        {
            this.Game.MysX = null;
            this.Game.MysY = null;
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.play.init();
            this.Game.play.respawnSnake();
            //play.restart() dorobit funkciu - vrati hada na start, znovu vytvori teleport, kamene, hraciu plochu..
            this.Game.aktualna_obrazovka = this.Game.play;
        }
    }

    //OVERSCREEN UPDATE
    update()
    {
        const OverImg = new Image();
        OverImg.src = "/photos/GameOverBackgroundClear.png";
        this.Game.ctx.drawImage(OverImg, 0, 0, this.Game.cvsW, this.Game.cvsH);
        this.Btn1Over.draw();
        this.Btn2Over.draw();
        this.checkBtns();
    }
}