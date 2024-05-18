import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [state, setState] = useState(0);

  let count = 0;
  let handleClick = () => {
    // alert(`clicked ${c}`);
    count++;
    // console.log(count);
    setState(23);
  };

  return (
    <>
      {/* <button onClick={() => { handleClick(12); }} >
        click here
      </button> */}
      <button onClick={handleClick}>
        click here {count} - {state}
      </button>
    </>
  );
}

export default App;
