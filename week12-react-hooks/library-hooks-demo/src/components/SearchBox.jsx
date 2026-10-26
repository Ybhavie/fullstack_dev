// useState for the input value, useRef to reach the DOM node directly,
// useEffect to focus it once when the component mounts.
import { useEffect, useRef, useState } from 'react';

export default function SearchBox({ onSearch }) {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleChange = (event) => {
        setValue(event.target.value);
        onSearch(event.target.value);
    };

    return (
        <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search books by title or author"
        />
    );
}
