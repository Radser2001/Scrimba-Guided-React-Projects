import React, { useState } from "react";
import memesData from "../../memesData";
import "./Meme.css";

export const Meme = () => {
  // * const[result, function] = useState(defaultValue)
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    //memesArray is an array
    const memesArray = memesData.data.memes;
    //create a random numbers
    const randomNumber = Math.floor(Math.random() * memesArray.length);

    // setMemeImage(function (memeImage) {
    //   memeImage = memesArray[randomNumber].url;
    //   console.log(memeImage);
    // });
    //prev value is not needed
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <section className="meme-form">
        <div className="form-inputs">
          <input type="text" placeholder="Top Text" className="form-input-1" />
          <input
            type="text"
            placeholder="Bottom Text"
            className="form-input-2"
          />
        </div>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
        <img src={memeImage} alt="" className="meme-image" />
      </section>
    </main>
  );
};
