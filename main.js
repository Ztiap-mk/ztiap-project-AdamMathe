//Vsetko dane do jednej hlavnej class Game
class Game
{
    constructor()
    {
        this.cvs = document.getElementById('canvas');
	    this.ctx = this.cvs.getContext('2d');
        this.cvsW = this.cvs.width;
        this.cvsH = this.cvs.height;
        this.rozmer = 30;
        this.snakeArr = new Array();
        this.obtiaznost = 0;
        this.menu = new MenuScreen(this);
        this.pause = new PauseScreen(this);
        this.play = new PlayScreen(this);
        this.over = new OverScreen(this);
        this.controls = new ControlsScreen(this);
        this.difficulty = new DifficultyScreen(this);
        this.SoundTheme = new Sound("/sounds/Mid_Air_Machine.mp3", true, 0.5);
        this.SoundEat = new Sound("/sounds/eating_sound.mp3", false, 0.5);
        this.SoundCrash = new Sound("/sounds/crash_sound.wav", false, 0.4);
        this.SoundTeleport = new Sound("/sounds/teleport_sound.wav", false, 1);
        this.SoundLose = new Sound("/sounds/over_sound.wav", false, 0.8);
        this.SoundClick = new Sound("/sounds/button_sound.wav", false, 1);
        this.soundsMuted = true;
        this.aktualna_obrazovka = this.menu;
        this.keys = [];
        this.MysX;
        this.MysY;
    }

    klavesnica()
    { 
        document.addEventListener("keydown", getKeyboardDown);
        document.addEventListener("keyup", getKeyboardUp);
        self = this;
        function getKeyboardDown(e){
            
            self.keys[e.keyCode] = true;
            console.log(e.keyCode);
        }

        function getKeyboardUp(e){

            self.keys[e.keyCode] = false;   
        }
    }

    klik()
    {
        self = this;
        document.addEventListener("click", function(event){
            self.MysX = event.offsetX;
            self.MysY = event.offsetY;
            console.log(self.MysX);
        });
    }

    mainloop()
    {
        this.klik();
        this.klavesnica();
        this.aktualna_obrazovka.update();
    }
}


Hra = new Game();
setInterval(() => {Hra.mainloop()}, 1000/15);