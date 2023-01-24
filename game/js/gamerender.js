import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game
        this.canvas = document.getElementById ("canvas");
        this.g = canvas.getContext("2d")
        this.images = []
        this.playerIdle = new Rect(9,6,109,85)
        this.playerFist = new Rect(7, 111, 112, 94)
        this.lukIdle = new Rect (28, 27, 186, 241)
    }
    loadImages()
    {
        let sources = ["del.png", "silvan.png", "tim.png", "luk.png", "sepp.png"]
        let scope = this
        let loaded = 0
        for (let i = 0; i < sources.length; i++)
        {
            let img = new Image()
            img.onload = (function(){
                loaded++
                if (loaded == sources.length)
                {
                    scope.game.startGame();
                }
            })
            img.src = sources [i]
            this.images.push(img)
        }
    }
    renderSprites(img, clip, pos)
    {
        this.g.drawImage(img,
            clip.x,clip.y,clip.w,clip.h,
            pos.x,pos.y,pos.w,pos.h)
    }

    renderUi()
    {
        this.g.font = "30px Verdana"
        this.g.fillStyle = "#FFFFFF"
        this.g.fillText("Score :", 40, 40)
    }
    
    render()
    {
        let g = this.g
        let canvas = this.canvas
        g.fillStyle = "black";
        g.fillRect(0,0, canvas.clientWidth, canvas.clientHeight)
        
        this.renderSprites(this.images[3], this.lukIdle, this.game.luk, )
        this.renderSprites(this.images[1], this.game.playerCurrentAnimation, this.game.player, )
        this.renderUi()
     
    }

}