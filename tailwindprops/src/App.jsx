import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black mb-5 rounded-xl p-10">
        Tailwind with React
      </h1>
      <Card name="React" btnText="Click me" />
    </>
  );
}

export default App;
