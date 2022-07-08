import { useEffect, useState } from "react";
import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Die from "./components/Die";

function App() {
  const { width, height } = useWindowSize();
  const [tenzies, setTenzies] = useState(false);

  const allNewDice = () => {
    //create an array of random numbers/objects from 1 to 6
    const newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice[i] = {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: Math.random(),
      };
    }
    return newDice;
  };

  //create set of new random objects replacing previous array
  const rollDice = () => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.isHeld
          ? die
          : {
              value: Math.floor(Math.random() * 6) + 1,
              isHeld: false,
              id: Math.random(),
            };
      })
    );
  };

  //hold the size by changing the boolean value
  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  //create state initialized with the random object array
  const [dice, setDice] = useState(allNewDice());

  //create an element to return the die components
  const diceElements = dice.map((die) => {
    return (
      <>
        <Die
          value={die.value}
          key={die.id}
          isHeld={die.isHeld}
          holdDice={() => holdDice(die.id)}
        />
      </>
    );
  });

  useEffect(() => {
    // if all the elements in an array satisfies a condition .every() returns true
    const allHeld = dice.every((die) => die.isHeld);
    //arbitrary select a value and check if all of them has the same value
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
    console.log("dice state changed");
  }, [dice]);

  const newGame = () => {
    setDice(allNewDice);
    setTenzies(false);
  };

  return (
    <main>
      {tenzies && <Confetti width={width - 20} height={height - 20} />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <button onClick={tenzies ? newGame : rollDice} className="roll-button">
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
}

export default App;
