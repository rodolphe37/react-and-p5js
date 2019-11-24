import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from './sketches/sketch2';
import sketch3 from './sketches/sketch3';
import sketch4 from './sketches/sketch4';
import sketch5 from './sketches/sketch5';
import './App.css';
import SketchPageDemo from './SketchPageDemo';

function App(){
    return (
      <div>
        <P5Wrapper sketch={sketch5}></P5Wrapper>
        <P5Wrapper sketch={sketch4}></P5Wrapper>
        <SketchPageDemo />
        <div className="rotate-canvas">
          <P5Wrapper sketch={sketch2} ></P5Wrapper>
        </div>
    <P5Wrapper sketch={sketch3} ></P5Wrapper>
      </div>
    );
}
export default App;
