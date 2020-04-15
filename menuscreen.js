class MenuScreen{
    constructor(thisGame){
        this.Game = thisGame;
        this.Btn1Menu = new ButtonImage(this.Game, "/photos/MenuPlayButton.jpg", 186, 256, 712, 385);
        this.Btn2Menu = new ButtonImage(this.Game, "/photos/MenuDifficultyButton.jpg", 235, 406, 659, 480);
        this.Btn3Menu = new ButtonImage(this.Game, "/photos/MenuControlsButton.jpg", 300, 501, 595, 560);
        this.Btn4Menu = new ButtonImage(this.Game, "/photos/soundOn.png", 35, 565, 179, 673);
        this.Btn5Menu = new ButtonImage(this.Game, "/photos/soundOff.png", 35, 565, 179, 673);
        this.musicNotStarted = true;
    }

    update()
    {
        const MenuImg = new Image();
        MenuImg.src = "/photos/MenuScreenBackgroundNew.jpg";
        this.Game.ctx.drawImage(MenuImg, 0, 0, this.Game.cvsW, this.Game.cvsH);
        this.Btn1Menu.draw();
        this.Btn2Menu.draw();
        this.Btn3Menu.draw();
        this.manageSoundButtons();
        this.checkBtns();
    }

    checkBtns()
    {
        console.log('in menu');
        // Ak sa suradnice kliku mysky rovnaju suradniciam tlacitka Btn1 - teda play
        if(((this.Game.keys[13] == true) || (this.Game.keys[32] == true)) || (this.Game.MysX >= this.Btn1Menu.x && this.Game.MysX <= this.Btn1Menu.EndX && this.Game.MysY >= this.Btn1Menu.y && this.Game.MysY <= this.Btn1Menu.EndY))
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

        // tu neskor dorobit podmienku pre kliknutie tlacidla Difficulty
        if(this.Game.MysX >= this.Btn2Menu.x && this.Game.MysX <= this.Btn2Menu.EndX && this.Game.MysY >= this.Btn2Menu.y && this.Game.MysY <= this.Btn2Menu.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.aktualna_obrazovka = this.Game.difficulty;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }

        // tu neskor dorobit podmienku pre kliknutie na tlacidlo Controls
        if(this.Game.MysX >= this.Btn3Menu.x && this.Game.MysX <= this.Btn3Menu.EndX && this.Game.MysY >= this.Btn3Menu.y && this.Game.MysY <= this.Btn3Menu.EndY)
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundClick.play();
            }
            this.Game.aktualna_obrazovka = this.Game.controls;
            this.Game.MysX = null;
            this.Game.MysY = null;
        }
    }

    manageSoundButtons()
    {
        //ak hudba je mutnuta
        if(this.Game.soundsMuted)
        {
            // a este nezacala hrat
            if(this.musicNotStarted)
            {
                this.Btn5Menu.draw();
                // a klikne sa na gombik soundOff
                if(this.Game.MysX >= this.Btn5Menu.x && this.Game.MysX <= this.Btn5Menu.EndX && this.Game.MysY >= this.Btn5Menu.y && this.Game.MysY <= this.Btn5Menu.EndY)
                {
                    this.Game.SoundTheme.play();
                    this.musicNotStarted = false;
                    this.Game.soundsMuted = false;
                    this.Game.MysX = null;
                    this.Game.MysY = null;    
                }
            }
            //ak muzika uz bola spustena prvykrat
            else
            {
                this.Btn5Menu.draw();
                // a klikne sa na gombik soundOff
                if(this.Game.MysX >= this.Btn5Menu.x && this.Game.MysX <= this.Btn5Menu.EndX && this.Game.MysY >= this.Btn5Menu.y && this.Game.MysY <= this.Btn5Menu.EndY)
                {
                    this.Game.soundsMuted = false;
                    this.Game.SoundTheme.mute();
                    this.Game.MysX = null;
                    this.Game.MysY = null;   
                }
            }       
        }
        
        //ak hudba nie je mutnuta
        if(!this.Game.soundsMuted)
        {
            this.Btn4Menu.draw();
            if(this.musicNotStarted)
            {
                this.Game.SoundTheme.play();
                this.musicNotStarted = false;
            }
            else
            {   
                if(this.Game.MysX >= this.Btn4Menu.x && this.Game.MysX <= this.Btn4Menu.EndX && this.Game.MysY >= this.Btn4Menu.y && this.Game.MysY <= this.Btn4Menu.EndY)
                {
                    this.Game.SoundTheme.mute();
                    this.Game.soundsMuted = true;
                    this.Game.MysX = null;
                    this.Game.MysY = null;     
                }
            }
        }    
    }
}