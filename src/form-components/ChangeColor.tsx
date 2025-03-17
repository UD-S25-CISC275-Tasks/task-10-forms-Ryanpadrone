import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "pink",
    "cyan",
];

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState(COLORS[0]);

    return (
        <div>
            <h3>Change Color</h3>
            <Form>
                {COLORS.map((c) => (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        label={c}
                        name="color-options"
                        value={c}
                        checked={color === c}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                ))}
            </Form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                    padding: "10px",
                    marginTop: "10px",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "5px",
                }}
            >
                {color}
            </div>
        </div>
    );
}
