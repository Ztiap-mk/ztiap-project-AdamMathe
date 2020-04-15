class Food{
    constructor(thisGame){
        this.Game = thisGame;
        this.vyskaPocitacejCasti = 100;
        this.x = (Math.floor(Math.random() * (this.Game.cvsW/this.Game.rozmer - 2) + 1));
        this.y = (Math.floor(Math.random() * (((this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer) - 2) + 1));
    }

    spawn(){
        const AppleImage = new Image();
        AppleImage.src = "/photos/apple.png"
        this.Game.ctx.drawImage(AppleImage, this.x * this.Game.rozmer, this.y * this.Game.rozmer, this.Game.rozmer, this.Game.rozmer);
    }

    noveSuradnice(){
        this.x = (Math.floor(Math.random() * (this.Game.cvsW/this.Game.rozmer - 2) + 1));
        this.y = (Math.floor(Math.random() * (((this.Game.cvsH-this.vyskaPocitacejCasti)/this.Game.rozmer) - 2) + 1));
    }
}


class Rock{
    constructor(thisGame, x, y){
        this.Game = thisGame;
        this.x = x;
        this.y = y;
        this.width = this.Game.rozmer;
        this.height = this.Game.rozmer;
    }

    randomX(){
        this.x = (Math.floor(Math.random() * (30)))
    }

    spawn(){
        const RockImage = new Image();
        RockImage.src = "/photos/rock.png";
        this.Game.ctx.drawImage(RockImage, this.x * this.width, this.y * this.height, this.width, this.height);
    }

}

class Cactus{
    constructor(thisGame, horizontal, vertical)
    {
        this.horizontal = horizontal;
        this.vertical = vertical;
        this.Game = thisGame;
        this.vyskaPocitacejCasti = 100;
        // CISLO OD 15 po 27 vratane 
        this.xR = Math.floor(Math.random() * (25 - 17 + 1)) + 17;
        //CISLO OD 1 po 13 vratane
        this.xL = Math.floor(Math.random() * (11 - 4 + 1)) + 4;
        //CISLO OD 1 po 7 vratane
        this.yU = Math.floor(Math.random() * (7 - 2 + 1)) + 2;
        //CISLO OD 10 po 17 vratane
        this.yD = Math.floor(Math.random() * (16 - 11 + 1)) + 11;
    }

    spawn()
    {
        if(this.Game.obtiaznost == 2)
        {
            const CactusImage = new Image();
            CactusImage.src = "/photos/evil_cactus.png";

            if(this.horizontal == "left" && this.vertical == "up")
            {
                this.Game.ctx.drawImage(CactusImage, this.xL * this.Game.rozmer, this.yU * this.Game.rozmer, 2 * this.Game.rozmer, 2 * this.Game.rozmer);
            }
            if(this.horizontal == "left" && this.vertical == "down")
            {
                this.Game.ctx.drawImage(CactusImage, this.xL * this.Game.rozmer, this.yD * this.Game.rozmer, 2 * this.Game.rozmer, 2 * this.Game.rozmer);
            }
            if(this.horizontal == "right" && this.vertical == "up")
            {
                this.Game.ctx.drawImage(CactusImage, this.xR * this.Game.rozmer, this.yU * this.Game.rozmer, 2 * this.Game.rozmer, 2 * this.Game.rozmer);
            }
            if(this.horizontal == "right" && this.vertical == "down")
            {
                this.Game.ctx.drawImage(CactusImage, this.xR * this.Game.rozmer, this.yD * this.Game.rozmer, 2 * this.Game.rozmer, 2 * this.Game.rozmer);
            }
        }
    }
}


class Teleport{
    constructor(thisGame, y, rozmer){
        //xova suradnica teleportu je nahodne cislo v intervale poctu blokov
        this.Game = thisGame;
        this.x = (Math.floor(Math.random() * 20) + 4);
        this.y = y;
        this.width = rozmer;
        this.height = rozmer;
    }
    //najdi random X-ovu poziciu na spawnutie teleportu
    spawn(){
        const TeleportImage = new Image();
        TeleportImage.src = "/photos/teleport.png";
        this.Game.ctx.drawImage(TeleportImage, this.x * this.width, this.y * this.height, this.width, this.height);
        return 1;
    }

    noveSuradnice()
    {
        this.x = (Math.floor(Math.random() * 20) + 4);
    }
}


class ButtonImage{
    constructor(thisGame, zdroj, x, y, EndX, EndY)
    {
        this.Game = thisGame;
        this.zdroj = zdroj;
        this.x = x;
        this.y = y;
        this.EndX = EndX;
        this.EndY = EndY;
        this.sirka = this.EndX - this.x;
        this.vyska = this.EndY - this.y;
    }
    draw()
    {
        const Button = new Image();
        Button.src = this.zdroj;
        this.Game.ctx.drawImage(Button, this.x, this.y, this.sirka, this.vyska);
    }

    delete()
    {
        ctx.clearRect(this.x, this.y, this.sirka, this.vyska);
    }
}


class Sound
{
    constructor(src, loop, hlasitost)
    {
        this.sound = document.createElement("audio");
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        this.sound.src = src;
        this.sound.volume = hlasitost;
        this.sound.loop = loop;
        document.body.appendChild(this.sound);
        this.muted = false;
    }

    play()
    {
        this.sound.play();
    }

    stop()
    {
        this.sound.stop();
    }

    mute()
    {
        if(this.muted == false)
        {
            this.sound.volume = 0;
            this.muted = true;
            console.log(this.muted);
        }    
        else if(this.muted == true)
        {
            this.sound.volume = 0.5;
            this.muted = false;
            console.log(this.muted);
        }
    }
}