"use client";

import { createContext, useState } from "react";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {

  const [timeline, setTimeline] = useState([]);

  const addEntry = (type, name) => {

    const newEntry = {
      id: Date.now(),
      type,
      title: `${type} with ${name}`,
      date: new Date().toLocaleDateString()
    };

    setTimeline(prev => [...prev, newEntry]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};