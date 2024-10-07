import { useState } from "react";

export default function NewTask({ onAdd }) {
    const [input, setInput] = useState('');

    function handleChangeInput(e) {
        setInput(e.target.value);
    }

    function handleClick() {
        onAdd(input);
        setInput('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                value={input}
                onChange={handleChangeInput}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Task
            </button>
        </div>
    );
}