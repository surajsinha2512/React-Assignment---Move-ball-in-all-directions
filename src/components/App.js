import React, { Component, useEffect, useState } from "react";
import  "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setX(0)
    setY(0);
    setBallPosition({
      left:"0px",
      top:"0px"
    })
     setRenderBall(false)
    
  };
  const renderChoice = () => {
    return renderBall?<div className="ball" style={{position:'absolute',
    left:ballPosition.left,
    top:ballPosition.top
    }}></div>:<button onClick={start} className="start">start</button>
  };

 const start=()=>{
     setRenderBall(true)

 }


useEffect(()=>{

  const eventList=(evt)=>{
    if (renderBall){
    if(evt.keyCode===37){
     setX(x-5)
    }
   else if(evt.keyCode===38){
      setY(y-5)
    }
    else if(evt.keyCode===39){
      setX(x+5)
    }
    else if(evt.keyCode===40){
      setY(y+5)
    }
  }
    console.log("key pressed"+renderBall+" "+x+" "+y)
    setBallPosition({
      left: x+"px",
      top: y+"px"
    
    })
  }
  document.addEventListener("keydown",eventList)
  return ()=>document.removeEventListener("keydown",eventList)
})


  return (
    <div className="playground">
     
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
