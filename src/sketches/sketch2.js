export default function sketch(p){
    let canvas;

    p.setup = () => {
      canvas = p.createCanvas(400, 400);
    }

    p.draw = () => {
      p.background(220,0,200);
    };

    p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
        if(canvas) //Make sure the canvas has been created
          p.fill(newProps.color);
      }
};
