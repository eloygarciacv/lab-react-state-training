import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1>Iteration 1</h1>
      <LikeButton />
      <LikeButton />
      <h1>Iteration 2</h1>
      <Counter />
    </div>
  );
}

export default App;
