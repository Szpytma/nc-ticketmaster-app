import { useEffect, useState } from "react";
import { API_BASE_URL, API_KEY } from "../config";

function AllEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let url = `${API_BASE_URL}/events.json?countryCode=UK&apikey=${API_KEY}&size=10`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setEvents(data._embedded.events);
      });
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>{event.type}</p>
          <img src={event.images[0].url} alt="img" />
        </div>
      ))}
    </div>
  );
}

export default AllEvents;
