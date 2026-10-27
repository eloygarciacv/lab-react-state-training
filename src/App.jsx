import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
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
      <h1>Iteration 3</h1>
      <ClickablePicture />
    </div>
  );
}

export default App;
