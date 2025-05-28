import React from "react";
import "./ActivityFeed.css";

const ActivityFeed = () => {
  const barHeights = [60, 100, 80, 50, 90, 30, 70]; // mock bar chart values for days

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointments this week</p>
      </div>
      <div className="activity-chart">
        {barHeights.map((height, index) => (
          <div
            key={index}
            className="activity-bar"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
