export function overlaps (rect1, rect2)
{
    if (rect1.x < (rect2.x + rect2.w) && (rect1.x + rect1.w) > rect2.x &&
        rect1.y < (rect2.y + rect2.h) && (rect1.y + rect1.h) > rect2.y)
        {
return true;
    }   
return false;
}

export function circlesCollide(cir1, cir2)
{
    let dx = cir1.cx() - cir2.cx();
    let dy = cir1.cy() - cir2.cy();
    let length = Math.sqrt((dx * dx) + (dy * dy));
    if (length < cir1.w2() + cir2.w2())
    {
        return true;
    }
        return false

    }