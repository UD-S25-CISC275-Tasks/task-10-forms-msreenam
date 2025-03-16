import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [attemptsRequested, setAttemptsRequested] = useState("");

    const handleUseAttempt = () => {
        setAttemptsLeft((prev) => Math.max(0, prev - 1));
    };

    const handleGainAttempts = () => {
        const attempts = parseInt(attemptsRequested);
        if (!isNaN(attempts)) {
            setAttemptsLeft((prev) => prev + attempts);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={attemptsRequested}
                onChange={(e) => {
                    setAttemptsRequested(e.target.value);
                }}
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
