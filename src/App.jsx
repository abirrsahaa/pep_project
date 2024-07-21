import "./App.css";
import Gett from "./components/Gett";
import Learn from "./components/Learn";
import Success from "./components/Success";
import Why from "./components/Why";

function App() {
  return (
    <div className="max-w-[375px]  min-h-full flex flex-col justify-center items-center">
      <Why />
      <Gett />
      <Learn />
      <Success />
    </div>
  );
}

export default App;
