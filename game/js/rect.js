export class Rect
{
    constructor(x,y,w,h)
    {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    cx()
    {
        return this.x + (this.w/2)
    }
    cy()
    {
        return this.y + (this.h /2 )

    }
    w2()
    {
        return (this.h/2)
    }
    h2()
    {
        return(this.h/2)
    }
}