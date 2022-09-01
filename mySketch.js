function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
   
  
  
}

var mode = 1 //如果想设三种画笔：画笔模式初始化

function mousePressed(){  //鼠标点击切换画笔模式
  mode++     //切换画笔模式
  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)


}

function mouseMoved(){
  
  var count = int(random(5,25))  //i的数量也可以随机设置
  var r = random(5,20)
  
  var delta = sqrt(dist(pmouseX,pmouseY,mouseX,mouseY))*3
  //移动得越快，撒得越多。pmouseX是上一个时刻鼠标所在位置，通过定义上一刻与这一刻距离（dist)而实现
  //想要不散这么大，可以再取个平方根，再乘一个值来调整
  
  if(mode%3==1){        //切换画笔模式：画笔模式1
    
    
    for(let i=0;i<count;i++){
      noStroke()
      fill(random(frameCount%255+mouseY),
         random(200,255),random(100,255))//颜色随时间变化
    
      ellipse(mouseX+random(-delta,delta),
            mouseY+random(-delta,delta),1.5*r)
      r *= 0.9
    }
    
  }else if(mode%3==2){ //切换画笔模式：画笔模式2
    
    for(let j=0;j<count;j++){
      noStroke()
      fill(random(frameCount%80+mouseY*2),
         random(200,255),random(200,255))//颜色随时间变化
    
      ellipse(mouseX+random(-delta,delta),
            mouseY+random(-delta,delta),2*r)
      r *= 0.9
  }
}
    else if(mode%3==0){  //切换画笔模式：画笔模式3
    
    ellipse(mouseX,mouseY,50)
  
}


}
  
  