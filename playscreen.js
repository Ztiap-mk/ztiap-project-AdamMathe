class PlayScreen{
    constructor(thisGame)
    {
        this.Game = thisGame;
        this.snakeArr = this.Game.snakeArr;
        this.vyskaPocitacejCasti = 100;
        this.had = new Snake(this.Game, this.Game.snakeArr, this.Game.rozmer, "right", 5);
        this.teleport1 = new Teleport(this.Game, 0, this.Game.rozmer);
        this.teleport2 = new Teleport(this.Game, (this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer - 1, this.Game.rozmer);
        this.cactus1 = new Cactus(this.Game, "left", "up");
        this.cactus2 = new Cactus(this.Game, "left", "down");
        this.cactus3 = new Cactus(this.Game, "right", "up");
        this.cactus4 = new Cactus(this.Game, "right", "down");
        this.jedlo = new Food(this.Game);
        this.pausedClicked = false;
    }

    clearBackground()
    {
        this.Game.ctx.clearRect(0, 0, this.Game.cvsW, this.Game.cvsH);
        const BackImg = new Image();
        BackImg.src = "/photos/background_cream_only.png";
        this.Game.ctx.drawImage(BackImg, 0, 0, this.Game.cvsW, this.Game.cvsH-this.vyskaPocitacejCasti);
        const ScoreBoardImg = new Image();
        ScoreBoardImg.src = "/photos/scoreboard.jpg";
        this.Game.ctx.drawImage(ScoreBoardImg, 0, this.Game.cvsH-this.vyskaPocitacejCasti, this.Game.cvsW, this.vyskaPocitacejCasti);
    }

    spawnObjects()
    {
        this.teleport1.spawn();
        this.teleport2.spawn();
        this.cactus1.spawn();
        this.cactus2.spawn();
        this.cactus3.spawn();
        this.cactus4.spawn();
        for(var i = 0; i < this.Game.cvsW/this.Game.rozmer; i++)
        {
            // console.log(i);
            for(var j = 0; j < (this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer; j++)
            {
                if( (i == 0 || i == this.Game.cvsW/this.Game.rozmer-1 || j == 0 || j == (this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer - 1) && ((i != this.teleport1.x || j != 0) && (i != this.teleport2.x || j != (this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer - 1)) ){
                    let Skala = new Rock(this.Game, i, j);
                    Skala.spawn();
                }
            }
        }
    }

    spawnFood()
    {   
        this.jedlo.spawn();
    }

    init()
    {
        this.had.len = 5;
        this.had.direction = "right";
        this.had.priradFarbu();
        this.had.createSnake();
        this.jedlo.noveSuradnice();
        this.teleport1.noveSuradnice();
        this.teleport2.noveSuradnice();
    }

    paused()
    {
        if(this.Game.keys[80])
        {
            this.pausedClicked = true;   
        }
        if(this.pausedClicked)
        {
            if(this.Game.keys[80] == false)
            {
                this.Game.aktualna_obrazovka = this.Game.pause;
                this.pausedClicked = false;
            }
        }

    }

    checkColision()
    {
        if((this.had.body[0].x == this.Game.cvsW/this.Game.rozmer -1 && !this.vbeholDoTeleportu()) || (this.had.body[0].y == (this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer - 1 && !this.vbeholDoTeleportu()) || (this.had.body[0].x == 0 && !this.vbeholDoTeleportu()) || (this.had.body[0].y == 0 && !this.vbeholDoTeleportu()))
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundCrash.play();
                this.Game.SoundLose.play();
            }
            this.init();
            this.respawnSnake();
            this.Game.aktualna_obrazovka = this.Game.over;
        }

        if((this.had.body[0].x == this.teleport1.x && this.had.body[0].y == this.teleport1.y) || (this.had.body[0].x == this.teleport2.x && this.had.body[0].y == this.teleport2.y))
        {
            console.log("SMER HADA:" + this.had.direction);
            this.teleportuj(this.had.direction);
        }
    }

    vbeholDoTeleportu()
    {
        if((this.had.body[0].x == this.teleport1.x && this.had.body[0].y == this.teleport1.y) || (this.had.body[0].x == this.teleport2.x && this.had.body[0].y == this.teleport2.y))
        {
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundTeleport.play();
            }
            return 1;
        }
        else
        {
            return 0;
        }
    }

    teleportuj(smer)
    {
        let i;

        if(smer == "up")
        {
            for(i = 0; i < this.snakeArr.length; i++)
            {
                if(this.had.body[i].x == this.teleport1.x && this.had.body[i].y == this.teleport1.y)
                {
                    this.had.body[i].x = this.teleport2.x;
                    this.had.body[i].y = this.teleport2.y;
                }
            }
        }
        if(smer == "down")
        {
            for(i = 0; i < this.snakeArr.length; i++)
            {    
                if(this.had.body[i].x == this.teleport2.x && this.had.body[i].y == this.teleport2.y)
                {
                    this.had.body[i].x = this.teleport1.x;
                    this.had.body[i].y = this.teleport1.y;
                }
            }
        }
    }

    respawnSnake()
    {
        let pocitadlo = 0;
        let i = 0;
        //console.log("SNAKE ARR DLZKA: " + this.snakeArr.length-1);
        for(i = this.snakeArr.length-1; i >= 0; i--)
        {
            this.had.body[pocitadlo].x = i + 0;
            this.had.body[pocitadlo].y = 0 + 9;
            pocitadlo++;
        }
    }


    checkEaten()
    {
        if(this.had.body[0].x == this.jedlo.x && this.had.body[0].y == this.jedlo.y)
        {
            this.jedlo.x = (Math.floor(Math.random() * (this.Game.cvsW/this.Game.rozmer - 2) + 1));
            this.jedlo.y = (Math.floor(Math.random() * (((this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer) - 2) + 1));
            this.jedlo.spawn();

            this.Game.snakeArr.push(
                {
                    x: this.jedlo.x,
                    y: this.jedlo.y
                }
            )
            if(!this.Game.soundsMuted)
            {
                this.Game.SoundEat.play();
            }
            this.had.len++;
        }
    }

    update()
    {
        this.paused();
        this.clearBackground();
        this.spawnObjects();
        this.spawnFood();
        this.had.controls();
        this.had.update();
        this.had.smer();
        this.had.drawSnake();
        this.checkColision();
        this.checkEaten();
    }
}