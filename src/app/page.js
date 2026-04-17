"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";

import SummaryCard from "@/components/SummaryCard";
import FriendCard from "@/components/FriendCard";

import {
  FaUserFriends,
  FaExclamationCircle,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

const HomePage = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("/data/friends.json")
        .then(res => res.json())
        .then(data => setFriends(data));
    }, 500);
  }, []);

  if (friends.length === 0) return <Loader />;

  const totalFriends = friends.length;

  const overdue =
    friends.filter(f => f.status === "overdue").length;

  const almostDue =
    friends.filter(f => f.status === "almost due").length;

  const onTrack =
    friends.filter(f => f.status === "on-track").length;

  return (

    <div className="space-y-10 mt-8">

      {/* Banner */}

      <div className="text-center space-y-4">

        <h1 className="text-4xl font-bold text-indigo-600">

          Keep Your Friendships Alive

        </h1>

        <p className="text-gray-500 max-w-xl mx-auto">

          Track your friendships and never miss check-ins.

        </p>

        <button className="bg-indigo-500 text-white px-6 py-3 rounded-lg">

          ➕ Add a Friend

        </button>

      </div>

      {/* Summary */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <SummaryCard
          title="Total Friends"
          value={totalFriends}
         
        />

        <SummaryCard
          title="Overdue"
          value={overdue}
         
        />

        <SummaryCard
          title="Almost Due"
          value={almostDue}
        
        />

        <SummaryCard
          title="On Track"
          value={onTrack}
         
        />

      </div>

      {/* Friends */}

      <div className="space-y-6">

        <h2 className="text-2xl font-bold">

          Your Friends

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {friends.map(friend => (

            <FriendCard
              key={friend.id}
              friend={friend}
            />

          ))}

        </div>

      </div>

    </div>

  );
};

export default HomePage;
