import React from "react";
import "./CalendarView.css";

const CalendarView = () => {
  const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
  ];
  const dates = Array.from({ length: 31 }, (_, i) => i + 1);
  const timeSlots = {
    4: ["09:00", "11:00"],
    12: ["13:00"],
    18: ["15:00"],
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
      </div>

      <div className="calendar-days">
        {days.map((day, idx) => (
          <div key={idx} className="calendar-day-name">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {dates.map((date, idx) => (
          <div key={idx} className="calendar-date">
            <div className="date-number">{date}</div>
            <div className="time-slots">
              {timeSlots[date]?.map((time, i) => (
                <span key={i} className="time-slot">{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="appointments-list">
        <div className="appointment-card dentist">
          <h4>Dentist Appointment</h4>
          <p>Dr. Smith - 09:00 AM</p>
        </div>
        <div className="appointment-card physio">
          <h4>Physiotherapy Appointment</h4>
          <p>Dr. Jane - 11:00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
