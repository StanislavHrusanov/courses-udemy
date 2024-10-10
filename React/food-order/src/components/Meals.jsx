import { useEffect, useState } from "react";

export default function Meals() {
    const [meals, setMeals] = useState([]);

    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');

        if (!response.ok) {
            return;
        }
        const fetchedMeals = response.json();
        return fetchedMeals;
    }
    useEffect(() => {
        const loadedMeals = fetchMeals();
        setMeals(loadedMeals);
    }, []);

    return (
        <ul id="meals"></ul>
    );
}