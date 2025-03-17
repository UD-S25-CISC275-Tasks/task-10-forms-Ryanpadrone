import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState(3);
    const [request, setRequest] = useState("");

    const handleUseAttempt = () => {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
        }
    };

    const handleGainAttempts = () => {
        const num = parseInt(request);
        if (!isNaN(num) && num > 0) {
            setAttempts((prev) => prev + num);
        }
        setRequest("");
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <Form.Control
                type="number"
                value={request}
                onChange={(e) => {
                    setRequest(e.target.value);
                }}
                placeholder="Enter attempts"
            />
            <Button onClick={handleUseAttempt} disabled={attempts <= 0}>
                use
            </Button>
            <Button onClick={handleGainAttempts}>Gain</Button>
        </div>
    );
}
