import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
    };

    return (
        <div className="text-center p-4">
            <Button onClick={toggleVisibility} className="mb-2">
                {visible ? "Hide Answer" : "Reveal Answer"}
            </Button>
            {visible && <div className="text-lg font-semibold">42</div>}
        </div>
    );
}
