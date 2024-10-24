import { Link } from "react-router-dom";

const events = [
  { title: "a", id: 1 },
  { title: "b", id: 2 },
  { title: "c", id: 3 },
];

export default function EventsPage() {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {events.map((ev) => (
          <li key={ev.id}>
            <Link to={`/events/${ev.id}`}>{ev.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
