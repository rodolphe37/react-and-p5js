export default function sketch(p){


    p.setup = () => {
      p.createCanvas(400, 400);
    }

    p.draw = () => {
      p.background(0);

      //p.rect(175, 0, 75, 150);

      let hr = p.hour();
      let mn = p.minute();
      let sc = p.second();

      p.strokeWeight(8);
      p.noFill();
      p.stroke(255, 100, 150);
      let end1 = p.map(sc, 0, 60, 0, 360);
      p.arc(200, 200, 300, 300, 0, end1);

      p.stroke(150, 100, 255);
      let end2 = p.map(mn, 0, 60, 0, 360);
      p.arc(200, 200, 280, 280, 0, end2);

      p.stroke(150, 255, 100);
      let end3 = p.map(hr % 12, 0, 12, 0, 360);
      p.arc(200, 200, 260, 260, 0, end3);

      

      //p.fill(255);
      //p.noStroke();
      //p.text(hr + ':' + mn + ':' + sc, 10, 200);
    };

};
