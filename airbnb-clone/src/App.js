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
        key={info.id}
        img={info.coverImg}
        star={info.stats.img}
        rating={info.stats.rating}
        reviewCount={info.stats.reviewCount}
        country={info.location}
        title={info.title}
        price={info.price}
      />
    );
  });
  //4:10:34
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container">{dataElements}</div>
    </>
  );
}

export default App;
