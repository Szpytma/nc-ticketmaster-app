import { useState } from "react";
import "./EventSearch.css";

function EventSearch({ setSearchTerm }) {
  const [newSearchTerm, setNewSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(newSearchTerm);
    setNewSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="EventSearch">
      <label htmlFor="search">Search for some events</label>
      <input
        id="search"
        value={newSearchTerm}
        onChange={(event) => setNewSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default EventSearch;
