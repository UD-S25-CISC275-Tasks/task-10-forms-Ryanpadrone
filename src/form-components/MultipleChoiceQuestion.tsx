import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface MultipleChoiceProps {
    options: string[];
    expectedAnswer: string;
}

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: MultipleChoiceProps): React.JSX.Element {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Select
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                }}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </Form.Select>
            <div>{selected === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
