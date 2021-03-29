class Sand{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
     var options={
		 'restitution':0.3,
		 'friction':3,
		 'density':1

	 }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			

			strokeWeight(4);
			stroke("brown");
			fill("red");
			//draw the ellipse here to display the rubber ball
			ellipseMode(RADIUS)
            ellipse(0,0,this.r,this.r)
			pop()
	}

}