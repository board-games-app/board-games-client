import { useState } from 'react';

function Dice() {
    const [result, setResult] = useState(null);
    const [rolling, setRolling] = useState(false);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function diceThrow() {
        setRolling(true);
        setResult(null);

        setTimeout(() => {
            const generatedNumber = getRandomInt(1, 6);
            setResult(generatedNumber);
            setRolling(false);
        }, 500); 
    }

    return (
        <div>
            <div>
                {result !== null && (
                    <img
                        src={`./src/assets/dice/dice-side-${result}.png`}
                        alt={`Dice side ${result}`}
                        className="dice-image"
                    />
                )}
            </div>
            <button onClick={diceThrow} disabled={rolling} class="btn">
                {rolling ? 'Rolling...' : 'Roll'}
            </button>
        </div>
    );
}

export default Dice;
