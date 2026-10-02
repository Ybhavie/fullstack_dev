import { useState } from 'react';
import StudentCard from "./Studentcard";

function StudentList() {
    const [count, setCount] = useState(10);
    const [count1, setCount1] = useState(0);
    const [themeMode, setThemeMode] = useState('light');
    const renderstudentList = [];
    const [students] = useState([
        { name: 'Vaibhavi', class: 'TYBCA', rollNumber: '2408039' },
        { name: 'Baa ba Black Sheep', class: 'TYBCA', rollNumber: '2408040' },
        { name: 'Have you any wool?', class: 'TYBCA', rollNumber: '2408041' },
    ]);

    for (let i = 0; i < students.length; i++) {
        renderstudentList.push(students[i]);
    }

    const studentComponents = renderstudentList.map((student, i) => (
            <StudentCard
                key={i}
                index={i}
                student={student}
                themeMode={themeMode}
            />
    ));
    return (
        <div className="student-management">
            <div className="theme-controls">
                <p className="current-theme">Current theme: <strong>{themeMode}</strong></p>
                <div className="theme-options" role="group" aria-label="Choose theme">
                    <button
                        type="button"
                        aria-pressed={themeMode === 'light'}
                        onClick={() => setThemeMode('light')}
                    >
                        Light
                    </button>
                    <button
                        type="button"
                        aria-pressed={themeMode === 'dark'}
                        onClick={() => setThemeMode('dark')}
                    >
                        Dark
                    </button>
                </div>
            </div>
            <button onClick={() => setCount(count + 1)}> {count} </button>
            <br></br>
            <button onClick={() => setCount1(count1 + 1)}> {count1} </button>
            <br></br>
            <button onClick={() => setCount(count + 1)}> {count} </button>
            <div className={`student-cards theme-${themeMode}`}>{studentComponents}</div>
        </div>
    )
}

export default StudentList;