import React from "react";
import "./HealthStatusCards.css";
import { FaHeartbeat, FaThermometerHalf, FaTint } from "react-icons/fa";

const HealthStatusCards = () => {
  const healthData = [
    {
      id: 1,
      title: "Heart Rate",
      value: "98 bpm",
      icon: <FaHeartbeat />,
      color: "#ffe0e6",
    },
    {
      id: 2,
      title: "Body Temperature",
      value: "36.5 °C",
      icon: <FaThermometerHalf />,
      color: "#e0f7fa",
    },
    {
      id: 3,
      title: "Glucose Level",
      value: "110 mg/dL",
      icon: <FaTint />,
      color: "#e8f5e9",
    },
  ];

  return (
    <div className="health-cards">
      {healthData.map((card) => (
        <div
          className="health-card"
          key={card.id}
          style={{ backgroundColor: card.color }}
        >
          <div className="health-icon">{card.icon}</div>
          <div className="health-info">
            <h4>{card.title}</h4>
            <p>{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
