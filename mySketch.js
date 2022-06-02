function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);


}


function drawFlower(clr1,clr2,size=1){
push()
		//fill(255,211,33)
	if(clr1) { 
		fill(clr1)
	}else
	{
		fill(255,211,33)
	}
	
		ellipse(0, 0, 50);
		ellipseMode(CORNER) 
		//fill(255,90,61)
		//fill("#FFBFB7")
		
	if(clr2) { 
		fill(clr2)
	}else
	{
		fill(255,90,61)
	}
		for(var i=0;i<16;i++){
			ellipse(30, -20, 100*size, 30);
			line(40,-5,120*size,-5)
			rotate(PI/8) //180度產生八片，360度產生16片
		}
	pop()   
    
}


var colors1 = ["#fec5bb","#fcd5ce","#d8e2dc","#ece4db","#fae1dd","#f8edeb","#e8e8e4","#ffe5d9","#ffd7ba","#fec89a"]
var colors2 = ["#edf2fb","#e2eafc","#d7e3fc","#ccdbf","#c1d3fe","#b6ccfe","#abc4ff"]

function draw() {
	background("#1b3a4b");
	var count=0
	for(var x =0;x<width;x=x+150)
	{
		for(var y=0;y<height;y=y+150)
			{
				push()
						count=count+1
						translate(x,y); //讓圓心在視窗的中心點
				scale(0.7)
						rotate(frameCount/50)
						drawFlower(colors1[count%colors1.length],colors2[count%colors2.length],map(mouseX,0,width,0,1.5))
				pop()
			}
	}
				
}		
				
		