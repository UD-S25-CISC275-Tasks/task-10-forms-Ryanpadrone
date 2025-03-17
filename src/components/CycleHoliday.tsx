import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Define Holiday type
type Holiday = "🎄" | "🎃" | "💌" | "🦃" | "🥮";

// Define holiday orders
const HOLIDAYS_CHRONOLOGICAL: Holiday[] = ["🎄", "💌", "🥮", "🎃", "🦃"];
const HOLIDAYS_ALPHABETICAL: Holiday[] = ["🎄", "🎃", "🥮", "🦃", "💌"];

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    const getNextHoliday = (order: Holiday[]) => {
        setHoliday(order[(order.indexOf(holiday) + 1) % order.length]);
    };

    return (
        <div className="text-center p-4">
            <h3 className="text-lg font-semibold">
                Current Holiday: {holiday}
            </h3>
            <div className="flex justify-center space-x-4 mt-4">
                <Button
                    onClick={() => {
                        getNextHoliday(HOLIDAYS_CHRONOLOGICAL);
                    }}
                >
                    Next by Year
                </Button>
                <Button
                    onClick={() => {
                        getNextHoliday(HOLIDAYS_ALPHABETICAL);
                    }}
                >
                    Next by Alphabet
                </Button>
            </div>
        </div>
    );
}
