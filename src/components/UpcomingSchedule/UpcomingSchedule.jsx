import React from "react";
import "./UpcomingSchedule.css";
import { FaCalendarAlt } from "react-icons/fa";

const UpcomingSchedule = () => {
  const events = [
    {
      id: 1,
      title: "Dental Checkup",
      time: "10:30 AM",
      date: "May 30, 2025",
    },
    {
      id: 2,
      title: "Eye Test",
      time: "2:00 PM",
      date: "June 2, 2025",
    },
    {
      id: 3,
      title: "Nutrition Follow-Up",
      time: "11:00 AM",
      date: "June 5, 2025",
    },
  ];

  return (
    <div className="upcoming-schedule">
      <h3>Upcoming Schedule</h3>
      <ul className="schedule-list">
        {events.map((event) => (
          <li key={event.id} className="schedule-item">
            <div className="icon-wrapper">
              <FaCalendarAlt />
            </div>
            <div className="schedule-info">
              <h4>{event.title}</h4>
              <p>{event.time} • {event.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingSchedule;
