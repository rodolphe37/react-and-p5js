import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from './sketches/sketch2';
import './App.css';
//import SketchPageDemo from './SketchPageDemo';

function App(){
    return (
      <div>
        {/*<SketchPageDemo />*/}
        <div className="rotate-canvas">
          <P5Wrapper sketch={sketch2} ></P5Wrapper>
        </div>
      </div>
    );
}
export default App;
