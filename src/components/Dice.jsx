import { useState, useRef } from 'react';
import diceside1 from "../assets/dice/dice-side-1.png";
import diceside2 from "../assets/dice/dice-side-2.png";
import diceside3 from "../assets/dice/dice-side-3.png";
import diceside4 from "../assets/dice/dice-side-4.png";
import diceside5 from "../assets/dice/dice-side-5.png";
import diceside6 from "../assets/dice/dice-side-6.png";
import diceroll from "../assets/dice/dice-roll.mp3";

function Dice() {
    const [result, setResult] = useState(null);
    const [rolling, setRolling] = useState(false);
    const soundRef = useRef(null);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function diceThrow() {
        setRolling(true);
        setResult(null);
        if (soundRef.current) {
            soundRef.current.play();
        }
    

    setTimeout(() => {
        const generatedNumber = getRandomInt(1, 6);
        setResult(generatedNumber);
        setRolling(false);
    }, 1300);
}

const diceSides = {
    1: diceside1,
    2: diceside2,
    3: diceside3,
    4: diceside4,
    5: diceside5,
    6: diceside6
};

return (
    <div className="short-page">
        <div className="dice-container">
            <div>
                <audio ref={soundRef}>
                    <source src={diceroll} type="audio/mpeg" />
                </audio>
                {result !== null && (
                    <img
                        src={diceSides[result]}
                        alt={`Dice side ${result}`}
                        className="dice-image"
                    />
                )}
            </div>
            {result !== null && <h2>Result: {result}</h2>}
            <button onClick={diceThrow} disabled={rolling} className="btn" style={{ margin: '5px' }}>
                {rolling ? <span className="loading loading-spinner loading-sm"></span> : 'Roll'}
            </button>
        </div>
    </div>
);
}

export default Dice;
