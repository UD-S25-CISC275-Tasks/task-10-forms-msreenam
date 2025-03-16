import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label className="form-switch">
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={() => {
                            setEditMode(!editMode);
                        }}
                    />
                </label>
            </div>
            {editMode ?
                <div>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <label>
                        Is a student:
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={() => {
                                setIsStudent(!isStudent);
                            }}
                        />
                    </label>
                </div>
            :   <p>
                    {userName} is {isStudent ? "" : "not"} a student
                </p>
            }
        </div>
    );
}
