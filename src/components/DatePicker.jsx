import { useState } from "react";
import "./DatePicker.css";
function DatePicker() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const today = new Date();
  const formattedToday = today.toISOString().slice(0, 10);

  return (
    <div className="DatePicker">
      <label htmlFor="datePicker">Select a date:</label>
      <input
        type="date"
        id="datePicker"
        name="datePicker"
        value={selectedDate || formattedToday}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DatePicker;
