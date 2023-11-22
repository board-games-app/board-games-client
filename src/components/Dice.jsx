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
        <div className="short-page">
            <div className="dice-container">
                <div>
                    {result !== null && (
                        <img
                            src={`./src/assets/dice/dice-side-${result}.png`}
                            alt={`Dice side ${result}`}
                            className="dice-image"
                        />
                    )}
                </div>
                {result !== null && <h2>Result: {result}</h2>}
                <button onClick={diceThrow} disabled={rolling} className="btn" style={{ margin: '5px' }}>
                    {rolling ? 'Rolling...' : 'Roll'}
                </button>
            </div>
        </div>
    );
}

export default Dice;
