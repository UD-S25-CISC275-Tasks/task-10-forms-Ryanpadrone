import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [inProgress, setInProgress] = useState(false);

    const startQuiz = () => {
        setAttempts((prev) => prev - 1);
        setInProgress(true);
    };

    const stopQuiz = () => {
        setInProgress(false);
    };
    const addAttempt = () => {
        setAttempts((prev) => prev + 1);
    };

    return (
        <div className="text-center p-4">
            <h3 className="text-lg font-semibold">Attempts: {attempts}</h3>
            <div className="flex justify-center space-x-4 mt-4">
                <Button
                    onClick={startQuiz}
                    disabled={inProgress || attempts === 0}
                >
                    Start Quiz
                </Button>
                <Button onClick={addAttempt} disabled={inProgress}>
                    Mulligan
                </Button>
                <Button onClick={stopQuiz} disabled={!inProgress}>
                    Stop Quiz
                </Button>
            </div>
        </div>
    );
}
