import { useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "../config";
import "./Event.css";

function Event({ searchTerm }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url = `${API_BASE_URL}/events.json?apikey=${API_KEY}&size=1&keyword=${searchTerm}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data._embedded.events);
      });
  }, [searchTerm]);

  return (
    <div className="Event">
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.dates.start.localDate}</p>
          <img src={event.images[0].url} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default Event;
