import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎏" | "🪔" | "🎃" | "🎄" | "🎆";

const holidaysByYear: Record<Holiday, Holiday> = {
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🎆",
    "🎆": "🎏",
};

const holidaysByAlphabet: Record<Holiday, Holiday> = {
    "🎏": "🎄",
    "🎄": "🎆",
    "🎆": "🪔",
    "🪔": "🎃",
    "🎃": "🎏",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎏");

    const cycleByYear = () => {
        setHoliday(holidaysByYear[holiday]);
    };

    const cycleByAlphabet = () => {
        setHoliday(holidaysByAlphabet[holiday]);
    };

    return (
        <div>
            <div>Holiday: {holiday}</div>
            <Button onClick={cycleByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={cycleByYear}>Advance by Year</Button>
        </div>
    );
}
