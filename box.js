class Box
  {
    constructor(x,y,w,h,vx,vy)
    {
      this.x =x;
      this.y =y;
      this.w =w;
      this.h = h;
      this.vx = vx;
      this.vy = vy;
    }
    
    show()
    {
      rect(this.x,this.y,this.w,this.h)
    }
    
    moveR()
    {
      this.x = this.x+this.vx;
    }
    moveL()
    {
      this.x = this.x-this.vx;
    }
    moveUp()
    {
      this.y = this.y-this.vy;
    }
    moveDown()
    {
      this.y = this.y+this.vy;
    }
  }

  
