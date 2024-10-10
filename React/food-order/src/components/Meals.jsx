import { useEffect, useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
    const [meals, setMeals] = useState([]);

    async function fetchMeals() {
        const response = await fetch('http://localhost:3000/meals');

        if (!response.ok) {
            return;
        }
        const fetchedMeals = await response.json();

        return fetchedMeals;
    }

    useEffect(() => {
        (async () => {
            const loadedMeals = await fetchMeals();
            setMeals(loadedMeals);
        })()
    }, []);

    return (
        <ul id="meals">
            {meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
        </ul>
    );
}