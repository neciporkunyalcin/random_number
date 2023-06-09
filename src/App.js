import React, {useState} from "react";
import './app.css';
import logo from "./photo/number.jpg"

function App() {

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);
  
  const giveRandomNumber=()=>{
    setRandomNum(Math.floor(Math.random()*(maxVal-minVal +1 )+minVal))
  }

  return (
    <body className="h-full"><img src={logo} alt="back" ></img>
      <div className="text-amber-500 absolute z-10 top-0 left-80 ml-10 text-4xl mt-10 font-bold">NUMBER RANDOM</div>
      <div className="absolute w-1/3 h-full z-10 top-0 left-80  ml-96 mr-auto">
        <div className="container text-center bg-gradient-to-r from-amber-800 to-amber-200 items-center justify-center  text-2xl rounded-3xl">
          <div className="randomNum">
            <p className=" mt-40 rounded-3xl from-neutral-950 font-extrabold">Random Number : <span>{randomNum}</span></p>
          </div>
          <div className="numContainer">
            <div>
              <p className="mt-10 font-extrabold">Min:</p>
              <input className="rounded-3xl" type="number" value={minVal} onChange={e => setMinVal(+ e.target.value)} ></input>
            </div>
            <div>
              <p className="mt-10 font-extrabold">Max:</p>
              <input className="rounded-3xl" type="number" value={maxVal} onChange={e =>setMaxVal(+ e.target.value)}></input>
            </div>
          </div>
          <button onClick={giveRandomNumber} className="mt-10 mb-10 font-extrabold">Get Random Number</button>
        </div>
      </div>
      <div className="text-amber-900 absolute z-10 top-full left-80 ml-80 text-4xl mt-40 font-bold">&copy; 2023 N.O.Y.</div>
    </body>
  
  );
}

export default App;
