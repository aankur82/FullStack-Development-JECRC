import "./App.css";
import { data } from "./Data";
import Friends from "./Friends";
import img1 from "./assets/images/nature.jpeg";

function App() {
  let inlineStyle = { display: "flex", flexWrap: "wrap" };

  return (
    <>
      <div style={inlineStyle}>
        <img src={img1} alt="" />
        {data.map((v, i, arr) => {
          return <Friends {...v} key={v.id} />;
          // return <Friends name={v.name} age={v.age}
          // bio={v.bio} image={v.image} />
        })}
      </div>
    </>
  );
}

export default App;
