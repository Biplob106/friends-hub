"use client";

import { useContext, useState } from "react";

import { TimelineContext } from "../../context/TimelineContext";
import TimelineItem from "../../components/TimelineItem";

export default function TimelinePage() {

  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(
          item => item.type === filter
        );

  return (

    <div className="mt-10 max-w-3xl">

      {/* Heading */}

      <h1 className="text-3xl font-bold mb-6">

        Timeline

      </h1>

      {/* Filter Dropdown */}

      <select
        className="border px-4 py-2 rounded-lg mb-6 text-sm"
        value={filter}
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >

        <option value="All">
          Filter timeline
        </option>

        <option value="Call">
          Call
        </option>

        <option value="Text">
          Text
        </option>

        <option value="Video">
          Video
        </option>

      </select>

      {/* Timeline List */}

      <div className="space-y-4">

        {filteredTimeline.length === 0 ? (

          <p className="text-gray-500">

            No timeline entries yet.

          </p>

        ) : (

          filteredTimeline.map(entry => (

            <TimelineItem
              key={entry.id}
              entry={entry}
            />

          ))

        )}

      </div>

    </div>

  );
}