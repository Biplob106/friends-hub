"use client";

import { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaExclamationCircle,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";
import SummaryCard from "@/components/SummaryCard";

export default function StatsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friends.json")
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  const total = friends.length;
  const overdue = friends.filter(f => f.status === "overdue").length;
  const almostDue = friends.filter(f => f.status === "almost due").length;
  const onTrack = friends.filter(f => f.status === "on-track").length;

  return (
    <div className="mt-8 space-y-6">

      <h1 className="text-2xl font-bold">Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <SummaryCard
          title="Total Friends"
          value={total}
          icon={<FaUserFriends />}
        />

        <SummaryCard
          title="Overdue"
          value={overdue}
          icon={<FaExclamationCircle />}
        />

        <SummaryCard
          title="Almost Due"
          value={almostDue}
          icon={<FaClock />}
        />

        <SummaryCard
          title="On Track"
          value={onTrack}
          icon={<FaCheckCircle />}
        />

      </div>

    </div>
  );
}
