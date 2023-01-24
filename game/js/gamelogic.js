import { circlesCollide,  } from "./collisonsmath.js"

export class GameLogic

{
    constructor(game)
    {
        this.game = (game)
        

    }
    mouseMoved(event){
        this.game.player.x = event.offsetX
        this.game.player.y = event.offsetY
        
    }

    logic()
    {
        if (circlesCollide(this.game.player, this.game.luk)==true){
            this.game.playerCurrentAnimation = this.game.renderer.playerFist
        }
        else{
            this.game.luk.x -= 1.5
            this.game.playerCurrentAnimation = this.game.renderer.playerIdle
        }
    }
}