import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from './sketches/sketch2';
import './App.css';
import SketchPageDemo from './SketchPageDemo';

function App(){
    return (
      <div>
          <SketchPageDemo />
        <P5Wrapper sketch={sketch2} ></P5Wrapper>
      </div>
    );
}
export default App;
