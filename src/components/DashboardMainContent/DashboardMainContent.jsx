import React from "react";
import "./DashboardMainContent.css";

import AnatomySection from "../AnatomySection/AnatomySection";
import HealthStatusCards from "../HealthStatusCards/HealthStatusCards";
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "../ActivityFeed/ActivityFeed";
import CalendarView from "../CalendarView/CalendarView";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="left-column">
        <AnatomySection />
        <HealthStatusCards />
        <UpcomingSchedule />
        <ActivityFeed />
      </div>
      <div className="right-column">
        <CalendarView />
      </div>
    </div>
  );
};

export default DashboardMainContent;
