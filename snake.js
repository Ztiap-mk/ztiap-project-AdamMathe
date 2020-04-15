var hadObtiaznost = [];

for(var i=0; i<3; i++) {
    hadObtiaznost[i] = new Array(14);
}

hadObtiaznost[0] = [   "/photos/head-left.png", "/photos/head-right.png", "/photos/head-up.png", "/photos/head-down.png",
                    "/photos/tail-left.png", "/photos/tail-right.png", "/photos/tail-up.png", "/photos/tail-down.png",
                    "/photos/turning-pravy_dolny.png", "/photos/turning-lavy_dolny.png", "/photos/turning-lavy_horny.png", "/photos/turning-pravy_horny.png",
                    "/photos/body-vertical.png", "/photos/body-horizontal.png"
                ]

hadObtiaznost[1] = [   "/photos/head-leftO.png", "/photos/head-rightO.png", "/photos/head-upO.png", "/photos/head-downO.png",
                    "/photos/tail-leftO.png", "/photos/tail-rightO.png", "/photos/tail-upO.png", "/photos/tail-downO.png",
                    "/photos/turning-pravy_dolnyO.png", "/photos/turning-lavy_dolnyO.png", "/photos/turning-lavy_hornyO.png", "/photos/turning-pravy_hornyO.png",
                    "/photos/body-verticalO.png", "/photos/body-horizontalO.png"
                ]

hadObtiaznost[2] = [   "/photos/head-leftR.png", "/photos/head-rightR.png", "/photos/head-upR.png", "/photos/head-downR.png",
                    "/photos/tail-leftR.png", "/photos/tail-rightR.png", "/photos/tail-upR.png", "/photos/tail-downR.png",
                    "/photos/turning-pravy_dolnyR.png", "/photos/turning-lavy_dolnyR.png", "/photos/turning-lavy_hornyR.png", "/photos/turning-pravy_hornyR.png",
                    "/photos/body-verticalR.png", "/photos/body-horizontalR.png"
                ]

var hadTextura = [];



// ------------- OBRAZKY MENU
// TLACITKA

class Snake{

    //initialization
    constructor(thisGame ,snake, rozmer, direction, len){
        this.Game = thisGame;
        this.body = snake;
        this.width = rozmer;
        this.height = rozmer;
        this.direction = direction;
        this.len = len;
        this.spawnX = 0;
        this.spawnY = 9;
    }
    
    // VIEW
    createSnake(){
        // premaze array snake
        for (var i = this.len - 1; i >= 0; i--)
        {
            this.body.push(
            {
                x : i + this.spawnX,
                y : 0 + this.spawnY
            }
            );
        }
        console.log(this.body[1].x);
        console.log(this.body[1].y);
    }

    priradFarbu()
    {
        for(var i = 0; i < 14; i++)
        {
            hadTextura[i] = new Image();
            hadTextura[i].src = hadObtiaznost[this.Game.obtiaznost][i];
        }
    }


    drawSnake(){

        for (var i = 0; i < this.Game.snakeArr.length; i++)
        {
            var segx = this.body[i].x;
            var segy = this.body[i].y;
            var nseg = this.body[i+1];
            var pseg = this.body[i-1];

            // vykresluje hlavu
            if(i == 0){
                if (segx < nseg.x){
                    this.Game.ctx.drawImage(hadTextura[0], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if (segx > nseg.x){
                    this.Game.ctx.drawImage(hadTextura[1], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if(segy < nseg.y){
                    this.Game.ctx.drawImage(hadTextura[2], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if (segy > nseg.y){
                    this.Game.ctx.drawImage(hadTextura[3], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
            }
            // vykresluje chvost
            else if(i == this.len - 1){
                if(pseg.x < segx){
                    this.Game.ctx.drawImage(hadTextura[4], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if(pseg.x > segx){
                    this.Game.ctx.drawImage(hadTextura[5], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if(pseg.y < segy){
                    this.Game.ctx.drawImage(hadTextura[6], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                else if(pseg.y > segy){
                    this.Game.ctx.drawImage(hadTextura[7], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
            }

            //vykresluje trup a zatacky
            else if(i < this.len - 1){
                if((pseg.y < segy && nseg.x < segx || nseg.y < segy && pseg.x < segx)){
                    this.Game.ctx.drawImage(hadTextura[8], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                
                else if((pseg.x > segx && nseg.y < segy || nseg.x > segx && pseg.y < segy)){
                    this.Game.ctx.drawImage(hadTextura[9], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }

                else if((pseg.y > segy && nseg.x > segx || nseg.y > segy && pseg.x > segx)){

                    this.Game.ctx.drawImage(hadTextura[10], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }

                else if((pseg.x < segx && nseg.y > segy || nseg.x < segx && pseg.y > segy)){
                    this.Game.ctx.drawImage(hadTextura[11], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
                
                else if(pseg.y < segy && nseg.y > segy || nseg.y < segy && pseg.y > segy){
                    this.Game.ctx.drawImage(hadTextura[12], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }

                else if(pseg.x < segx && nseg.x > segx || nseg.x < segx && pseg.x > segx){
                    this.Game.ctx.drawImage(hadTextura[13], this.body[i].x * this.width, this.body[i].y * this.height, this.width, this.height);
                }
            }
        }
        console.log("Drawing Snake..");
    }
    
    // aktualizuje poziciu hada
    update(){
        // uklada do SnakeX a SnakeY aktualnu poziciu hlavy hada
        console.log(this.body[0].x);
        console.log(this.body[0].y);

        this.body.pop();

        var newHead = {
            x : this.body[0].x,
            y : this.body[0].y
        };

        this.body.unshift(newHead);
        console.log("Updating..");
    }

    // MODEL
    smer(){
        
        if(this.direction == "right")
        {
            this.body[0].x++;
        }
        else if(this.direction == "up")
        {
            this.body[0].y--;
        }
        else if(this.direction == "left")
        {
            this.body[0].x--;
        }
        else if(this.direction == "down")
        {
            this.body[0].y++;
        }          
    }


    draw()
    {
        var HeadImageL = new Image();
        HeadImageL.src = "/photos/head-left.png";
        ctx.drawImage(HeadImageL, 1 * this.width, 1 * this.height, this.width, this.height);
    }
    
    // controller
    controls()
    { 
        if((this.Game.keys[37]) && this.direction != "right")
        {
            this.direction = "left";
        }
        if((this.Game.keys[38]) && this.direction != "down")
        {
            this.direction = "up";
        }

        if((this.Game.keys[39]) && this.direction != "left")
        {
            this.direction = "right";
        }

        if((this.Game.keys[40]) && this.direction != "up")
        {
            this.direction = "down";
        }
    }
}
