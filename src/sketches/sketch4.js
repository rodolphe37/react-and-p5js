
function sketch4(p5){
    let n = 0;
    let d = 0;
    let dSlider;

    p5.setup = () => {
        p5.createCanvas(400, 400);
        p5.angleMode(p5.DEGREES);
        dSlider = p5.createSlider(1,180,1);
    }

    p5.draw = () => {
        p5.background(255);
        p5.translate(p5.width/2,p5.height/2);
        p5.stroke(0);
        d = dSlider.value();
        p5.noFill();
        p5.beginShape();
        p5.strokeWeight(1);
        for (let i = 0; i < 361; i++) {
            let k = i * d;
            let r = 150 * p5.sin(n*k);
            let x = r * p5.cos(k);
            let y = r * p5.sin(k);
            p5.vertex(x,y);    
        }
        p5.endShape();

        p5.noFill();
        p5.stroke(255,0,255, 255);
        p5.strokeWeight(4);
        p5.beginShape();
        for (let i = 0; i < 361; i++) {
            let k = i;
            let r = 150 * p5.sin(n*k);
            let x = r * p5.cos(k);
            let y = r * p5.sin(k);
            p5.vertex(x,y);    
        }
        p5.endShape();

        n += 0.001;
        d += 0.003;

  
    };
};

export default sketch4;
