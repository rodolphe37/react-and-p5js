function sketch5(p5){

  let angle = 0;
  let w = 24;
  let ma;
  let maxD;

  p5.setup = () => {
    p5.createCanvas(400, 400, p5.WEBGL);
    ma = p5.atan(1/p5.sqrt(2));
    maxD = p5.dist(0, 0, 200, 200);
  };

  p5.draw = () => {
    p5.background(100);
    p5.ortho(-400, 400, -400, 400, 0, 1000); 
    p5.rotateY(ma);
    p5.rotateX(-p5.QUARTER_PI);
    
    for (let z = 0; z < p5.height; z += w) {
      for (let x = 0; x < p5.width; x += w) {
        p5.push();
        let d = p5.dist(x, z, p5.width/2, p5.height/2);
        let offset = p5.map(d, 0, maxD,-p5.PI, p5.PI);
        let a = angle + offset;
        let h = p5.floor(p5.map(p5.sin(a), -1, 1, 100, 300));
        p5.translate(x - p5.width / 2, 0, z - p5.height / 2);
        p5.normalMaterial();
        p5.box(w -2, h, w - 2);
        //rect(x - width / 2 + w / 2, 0, w - 2, h);
        p5.pop();
      }

    }
  
    angle -= 0.06;

  }
};
export default sketch5;
