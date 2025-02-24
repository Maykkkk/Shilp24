import React, { useState } from "react";
import "../links/css/EventSchedule.css";
import Fade from "react-reveal/Fade"

const EventSchedule = () => {
  const [activeDay, setActiveDay] = useState("Day 1");

  const schedule = {
    "Day 1": [
      { title: "Opening Ceremony", location: "Main Auditorium", time: "9:00 AM", duration: "2 Hours" },
      { title: "Technical Workshop", location: "Workshop Hall A", time: "11:30 AM", duration: "3 Hours" },
      { title: "Guest Lecture", location: "Seminar Hall", time: "2:30 PM", duration: "1.5 Hours" },
    ],
    "Day 2": [
      { title: "Panel Discussion", location: "Main Auditorium", time: "10:00 AM", duration: "2 Hours" },
      { title: "Hands-on Workshop", location: "Workshop Hall B", time: "1:00 PM", duration: "3 Hours" },
    ],
    "Day 3": [
      { title: "Closing Ceremony", location: "Main Auditorium", time: "4:00 PM", duration: "2 Hours" },
    ],
  };

  // Progress Bar Width Calculation
  const progressWidth = (Object.keys(schedule).indexOf(activeDay) + 1) / Object.keys(schedule).length * 100;

  return (
    <div className = "schedule">
    <div className="event-schedule">
      <h2 className="title">Event Schedule</h2>

      {/* Tabs */}
      <div className="tabs">
        {Object.keys(schedule).map((day) => (
          <button
            key={day}
            className={`tab ${activeDay === day ? "active" : ""}`}
            onClick={() => setActiveDay(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-schedule">
        <div className="progress-schedule" style={{ width: `${progressWidth}%` }}></div>
      </div>

      {/* Schedule Details */}
      <div className="schedule-details">
        {schedule[activeDay].map((event, index) => (
          <Fade {...(index % 2 === 0 ? { left: true, delay: index * 100 } : { right: true, delay: index * 100 })}>
          <div key={index} className="event-card">
            <div className="event-info">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-location">{event.location}</p>
            </div>
            <div className="event-time">
              <p className="time">{event.time}</p>
              <p className="duration">{event.duration}</p>
            </div>
          </div>
          </Fade>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventSchedule;
