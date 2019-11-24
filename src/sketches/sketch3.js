export default function sketch(p){

    p.setup = () => {
      p.createCanvas(300, 200);
      p.noStroke();
    }

    p.draw = () => {
      p.background(0);
     
      let hr = p.hour();
      let mn = p.minute();
      let sc = p.second();

      p.fill(255);
      p.noStroke();
      p.text(hr + ':' + mn + ':' + sc, 60, 100);
    }

    
}