class ControlsScreen
{
    constructor(thisGame)
    {
        this.Game = thisGame;
        this.Btn1Controls = new ButtonImage(this.Game, "/photos/ControlsMenuButton.jpg", 180, 562, 732, 652);
    }

    update()
    {
        const ControlsImg = new Image();
        ControlsImg.src = "/photos/ControlsBackground.jpg";
        this.Game.ctx.drawImage(ControlsImg, 0, 0, this.Game.cvsW, this.Game.cvsH);
        this.Btn1Controls.draw();
        this.checkBtn();
        
    }

    checkBtn()
    {
        console.log("inControls");
        if(this.Game.MysX >= this.Btn1Controls.x && this.Game.MysX <= this.Btn1Controls.EndX && this.Game.MysY >= this.Btn1Controls.y && this.Game.MysY <= this.Btn1Controls.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            console.log("CLICK");
            this.Game.aktualna_obrazovka = this.Game.menu;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }
    }
}