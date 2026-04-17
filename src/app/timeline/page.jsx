"use client";

import { useContext } from "react";
import { TimelineContext } from "@/context/TimelineContext";
import TimelineItem from "@/components/TimelineItem";

export default function TimelinePage() {
  const { timeline } = useContext(TimelineContext);

  return (
    <div className="mt-8 space-y-6">

      <h1 className="text-2xl font-bold">Timeline</h1>

      {timeline.length === 0 ? (
        <p className="text-gray-500">No timeline entries yet.</p>
      ) : (
        <div className="space-y-4">
          {timeline.map(entry => (
            <TimelineItem key={entry.id} entry={entry} />
          ))}
        </div>
      )}

    </div>
  );
}
