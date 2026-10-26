# Week 11 - React components, props, state

## Notes

**React** builds UIs out of components - JavaScript functions that
return markup (JSX, which looks like HTML but compiles to JS).

**Built-in vs. custom components**: `<div>`, `<button>`, `<input>`
are built-in HTML elements. A **custom component** is a function you
write yourself, used like a tag with a capital letter:

```jsx
function StudentCard({ student }) {
    return <div>{student.name}</div>;
}

// used elsewhere as:
<StudentCard student={someStudent} />
```

**Props** ("properties") are how a parent passes data down to a
child component - read-only from the child's side:

```jsx
function StudentCard({ student, index }) { ... }
<StudentCard student={student} index={0} />
```

**State** is data a component owns and can change itself, using the
`useState` hook:

```jsx
const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>
```

Calling `setCount` schedules a re-render with the new value - you
never mutate state directly (`count++` would not update the UI).

**Data flows down, events flow up**: a parent passes data via props;
a child tells the parent something happened by calling a function
the parent passed it (e.g. `onCheckOut={handleCheckOut}`).

## What this app does

`student-management` is an attendance app: a light/dark theme toggle
(state), an attendance table where each student can be marked
present/absent (state + a table built from an array), and a list of
`StudentCard` components (custom components receiving `student` and
`index` as props).

## How to run

```
cd week11-react-basics/student-management
npm install
npm run dev
```

Open the local URL Vite prints, usually http://localhost:5173/.

```
npm run build
npm run preview
```
