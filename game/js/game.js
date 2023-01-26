import { GameRenderer } from "./gamerender.js"
import { GameLogic } from "./gamelogic.js"
import { Rect } from "./rect.js"

class Game
{
    constructor(){
        this.renderer = new GameRenderer(this)
        this.logic = new GameLogic(this)
        this.player = new Rect(0,0,54,54)
        this.playerCurrentAnimation = this.renderer.playerIdle
        this.luk = new Rect (100, 100, 44,44)
    }
    init(){
        
        this.renderer.loadImages()
    }

    startGame(){
        let scope = this;
        this.renderer.canvas.addEventListener("mousemove", function(event){scope.logic.mouseMoved(event)})
        setInterval(function(){ scope.doGameFrame()}, 33)

    }

    doGameFrame()
    {
        this.logic.logic()
        this.renderer.render()
    }
   
}

let game = new Game()
game.init()