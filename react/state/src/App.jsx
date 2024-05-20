import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let friends = ["sunil", "gagan", "pawan"];
function App() {
  const [friendsName, setFriendsName] = useState(friends);
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function add(value) {
    // let n = "pankaj";
    let newValue = [...friendsName];
    newValue.push(value);
    setFriendsName(newValue);
    // setFriendsName([...friends,n])
    setName("");
  }
  function del(index) {
    let newArray = friendsName.filter((v, i) => i != index);
    setFriendsName(newArray);
  }
  return (
    <>
      <p>
        <input type="text" onChange={handleChange} />{" "}
        <button onClick={() => add(name)}> add</button>{" "}
      </p>
      <ol>
        {friendsName.map((v, index) => {
          return (
            <li>
              {v}
              <button onClick={() => del(index)}>delete</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default App;
