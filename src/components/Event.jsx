import { useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "../config";
import "./Event.css";

function Event({ searchTerm }) {
  const [events, setEvents] = useState([]);
  const openEventPage = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    let url = `${API_BASE_URL}/events.json?apikey=${API_KEY}&size=5&keyword=${searchTerm}&`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const seenTitles = [];
        const uniqueEvents = data._embedded.events.filter((event) => {
          if (seenTitles.includes(event.name)) {
            return false;
          } else {
            seenTitles.push(event.name);
            return true;
          }
        });
        setEvents(uniqueEvents);
      })
      .catch((err) => {
        alert("Event does not exist");
      });
  }, [searchTerm]);

  console.log(events);
  return (
    <div className="Event">
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.dates.start.localDate}</p>
          <img src={event.images[0].url} alt="img" />
          <button onClick={() => openEventPage(event.url)}>Book Tickets</button>
        </div>
      ))}
    </div>
  );
}

export default Event;
