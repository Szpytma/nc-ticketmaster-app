import { useState } from "react";
import "./App.css";
import EventSearch from "./components/EventSearch";
import EventsList from "./components/EventsList";
import DatePicker from "./components/DatePicker";

function App() {
  const [searchTerm, setSearchTerm] = useState("Harry");
  return (
    <div className="App">
      <EventSearch setSearchTerm={setSearchTerm} />
      <EventsList searchTerm={searchTerm} />
      <DatePicker />
    </div>
  );
}

export default App;
