import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to roll a six-sided die.
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState(1);
    const [rightDie, setRightDie] = useState(2);

    const rollLeft = () => {
        setLeftDie(d6());
    };
    const rollRight = () => {
        setRightDie(d6());
    };

    return (
        <div className="text-center p-4">
            <div className="text-2xl font-semibold">
                <span data-testid="left-die" className="mx-2">
                    🎲 {leftDie}
                </span>
                <span data-testid="right-die" className="mx-2">
                    🎲 {rightDie}
                </span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            <div className="mt-4 text-lg font-semibold">
                {leftDie === rightDie && leftDie !== 1 && (
                    <div className="text-green-600">You Win!</div>
                )}
                {leftDie === rightDie && leftDie === 1 && (
                    <div className="text-red-600">You Lose!</div>
                )}
            </div>
        </div>
    );
}
