export default function sketch(p){


    p.setup = () => {
      p.createCanvas(400, 400);
    }

    p.draw = () => {
      p.background(0);
      p.translate(200, 200);
      p.rotate(-90);

      p.strokeWeight(4);
      p.ellipse(0, 0, 300, 300);

      //p.rect(175, 0, 75, 150);

      let hr = p.hour();
      let mn = p.minute();
      let sc = p.second();

      p.strokeWeight(8);
      p.noFill();
      p.stroke(255, 100, 150);
      let secondAngle = p.map(sc, 0, 60, 0, 360);
      //p.arc(0, 0, 300, 300, 0, secondAngle);

      p.push();
      p.rotate(secondAngle);
      p.stroke(255, 100, 150);
      p.line(0, 0, 100, 0);
      p.pop();

      p.stroke(150, 100, 255);
      let minuteAngle = p.map(mn, 0, 60, 0, 360);
      //p.arc(0, 0, 280, 280, 0, minuteAngle);

      p.push();
      p.rotate(minuteAngle);
      p.stroke(150, 100, 255);
      p.line(0, 0, 75, 0);
      p.pop();

      p.stroke(150, 255, 100);
      let hourAngle = p.map(hr % 12, 0, 12, 0, 360);
      //p.arc(0, 0, 260, 260, 0, hourAngle);

      p.push();
      p.rotate(hourAngle);
      p.stroke(150, 255, 100);
      p.line(0, 0, 50, 0);
      p.pop();

      p.stroke(255);
      p.point(0,0)

      //p.fill(255);
      //p.noStroke();
      //p.text(hr + ':' + mn + ':' + sc, 10, 200);
    };

};
