import { useState } from 'react';
import StudentCard from "./Studentcard";

function StudentList() {
    const [count, setCount] = useState(0);
    const [themeMode, setThemeMode] = useState('light');
    const [students] = useState([
        { id: 1, name: 'Vaibhavi', class: 'TYBCA', rollNumber: '2408039' },
        { id: 2, name: 'Rohan Shah', class: 'TYBCA', rollNumber: '2408040' },
        { id: 3, name: 'Meera Nair', class: 'TYBCA', rollNumber: '2408041' },
    ]);

    // Attendance table: each student starts marked present.
    const [attendance, setAttendance] = useState({ 1: true, 2: true, 3: true });

    const toggleAttendance = (studentId) => {
        setAttendance((previous) => ({
            ...previous,
            [studentId]: !previous[studentId],
        }));
    };

    const studentComponents = students.map((student, i) => (
        <StudentCard
            key={student.id}
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

            <button onClick={() => setCount(count + 1)}>Card views: {count}</button>

            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.rollNumber}</td>
                            <td>{student.name}</td>
                            <td>{student.class}</td>
                            <td>{attendance[student.id] ? 'Present' : 'Absent'}</td>
                            <td>
                                <button type="button" onClick={() => toggleAttendance(student.id)}>
                                    Mark {attendance[student.id] ? 'Absent' : 'Present'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={`student-cards theme-${themeMode}`}>{studentComponents}</div>
        </div>
    )
}

export default StudentList;
