import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <div
      className="w-full h-screen duration-1000"
      style={{ backgroundColor: color }}
    >
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Blue
          </button>
          <button
            onClick={() => setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Gray
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
          >
            Yellow
          </button>
          <button
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
          >
            Pink
          </button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Purple
          </button>
          <button
            onClick={() => setColor("#e6e6fa")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
            style={{ backgroundColor: "#e6e6fa" }}
          >
            Lavender
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg "
          >
            White
          </button>
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Black
          </button>
          <button
            style={{ backgroundColor: "silver" }}
            onClick={() => setColor("silver")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            Silver
          </button>
          <button
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Brown
          </button>
          <button
            style={{ backgroundColor: "#f4c430" }}
            onClick={() => setColor("#f4c430")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Saffron
          </button>
          <button
            style={{ backgroundColor: "#e0115f" }}
            onClick={() => setColor("#e0115f")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Ruby
          </button>
          <button
            style={{ backgroundColor: "maroon" }}
            onClick={() => setColor("Maroon")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Maroon
          </button>
          <button
            style={{ backgroundColor: "#6f4e37" }}
            onClick={() => setColor("#6f4e37")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          >
            Coffee Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
