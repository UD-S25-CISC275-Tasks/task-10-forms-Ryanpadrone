import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface CheckAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: CheckAnswerProps): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Control
                type="text"
                value={userAnswer}
                onChange={(e) => {
                    setUserAnswer(e.target.value);
                }}
                placeholder="Type your answer..."
            />
            <div>
                {(
                    userAnswer.trim().toLowerCase() ===
                    expectedAnswer.toLowerCase()
                ) ?
                    "✔️"
                :   "❌"}
            </div>
        </div>
    );
}
