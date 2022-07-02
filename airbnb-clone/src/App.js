import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import data from "./data";

function App() {
  const dataElements = data.map((info) => {
    return (
      // *props - make a component more usable.

      <Card
        // * unique key
        key={info.id}
        // * directly pass the object
        info={info}
        // {...info}
        //4:35:38
      />
    );
  });
  //4:15:34
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{dataElements}</div>
    </>
  );
}

export default App;
