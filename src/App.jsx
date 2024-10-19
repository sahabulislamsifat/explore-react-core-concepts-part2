import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users.";

function App() {
  // function handelClick() {
  //   alert("button Handler");
  // }

  // const addToFourth = (num) => {
  //   alert(num + 5);
  // };

  return (
    <>
      <h3>Vite + React</h3>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onClick={handelClick}>Click Me</button>
      <button
        onClick={() => {
          alert("click me 2nd time");
        }}
      >
        2nd Click
      </button>
      <button onClick={() => addToFourth(3)}>Fourth</button> */}
    </>
  );
}

export default App;
