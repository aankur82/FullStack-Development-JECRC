import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
let items = [{ id: 1, item: "bag", isPacked: false }];

function Packing() {
  const [List, setList] = useState(items);
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  function pack(index) {
    let newValue = [...List];
    newValue[index].isPacked = true;
    setName(newValue);
  }
  function add(value) {
    let newId = List[List.length - 1].id + 1;
    let newValue = [...List];
    newValue.push({ id: newId, item: value, isPacked: false });
    setList(newValue);
    setName("");
  }
  function del(index) {
    let newArray = List.filter((v, i) => i != index);
    setList(newArray);
  }
  return (
    <>
      <p>
        <input type="text" onChange={handleChange} />{" "}
        <button onClick={() => add(name)}> add</button>{" "}
      </p>
      <ol>
        {List.map((v, index) => {
          return (
            <li>
              <span style={{ textDecoration: v.isPacked ? "underline" : null }}>
                {" "}
                {v.item}
              </span>
              <button onClick={() => pack(index)}>pack</button>
              <button onClick={() => del(index)}>delete</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default Packing;
