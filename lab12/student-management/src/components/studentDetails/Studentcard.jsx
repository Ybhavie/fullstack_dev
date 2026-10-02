import { createContext, useContext, useRef, useState } from 'react';

export const StudentContext = createContext();

function StudentCard() {
    const { student, index } = useContext(StudentContext);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');

    if (!student) return null;

    return (
        <div className="student-card">
            <h4>Index</h4>
            <p>{index}</p>

            <h4>Name</h4>
            <p>{student.name}</p>
            <label className="student-name-field">
                Your name
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    placeholder="Enter your name"
                />
            </label>

            <h4>Class</h4>
            <p>{student.class}</p>

            <h4>Roll number</h4>
            <p>{student.rollNumber}</p>
        </div>
    );
}

// 3. Wrapper Component providing Context Value
export default function StudentCardWrapper({ student, index, themeMode }) {
    const contextValue = {
        student,
        index,
        themeMode
    };

    return (
        <StudentContext.Provider value={contextValue}>
            <StudentCard />
        </StudentContext.Provider>
    );
}