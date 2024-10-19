import "./App.css";

function App() {
  function handelClick() {
    alert("button Handler");
  }

  const addToFourth = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>Vite + React</h3>
      <button onClick={handelClick}>Click Me</button>
      <button
        onClick={() => {
          alert("click me 2nd time");
        }}
      >
        2nd Click
      </button>
      <button onClick={() => addToFourth(3)}>Fourth</button>
    </>
  );
}

export default App;
