import React, { useEffect, useState } from "react";
// import memesData from "../../memesData";
import "./Meme.css";

export const Meme = () => {
  // * const[result, function] = useState(defaultValue)

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  //get data from api
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    //memesArray is an array
    //create a random numbers
    const randomNumber = Math.floor(Math.random() * allMemes.length);

    // setMemeImage(function (memeImage) {
    //   memeImage = allMemes[randomNumber].url;
    //   console.log(memeImage);
    // });
    //prev value is not needed
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  //handle the input values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) =>
      //return an object
      ({
        ...prevMeme,
        [name]: value,
      })
    );
  };

  return (
    <main>
      <section className="meme-form">
        <div className="form-inputs">
          <input
            type="text"
            placeholder="Top Text"
            className="form-input-1"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            className="form-input-2"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="form-button" onClick={getMemeImage}>
          😂 Get a new meme image 😂
        </button>
        <div className="meme">
          <img src={meme.randomImage} alt="" className="meme-image" />
          <h1 className="meme-text top">{meme.topText}</h1>
          <h1 className="meme-text bottom">{meme.bottomText}</h1>
        </div>
      </section>
    </main>
  );
};
