"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useContext } from "react";

import Loader from "../../../components/Loader";
import { TimelineContext } from "../../../context/TimelineContext";

import {
  FaPhone,
  FaComment,
  FaVideo,
  FaClock,
  FaArchive,
  FaTrash
} from "react-icons/fa";

import toast from "react-hot-toast";

export default function FriendDetails() {

  const params = useParams();

  const { addEntry } = useContext(TimelineContext);

  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch("/data/friends.json")
      .then(res => res.json())
      .then(data => {

        const found =
          data.find(
            f => f.id === parseInt(params.id)
          );

        setFriend(found || null);
        setLoading(false);

      });

  }, [params.id]);

  if (loading) return <Loader />;

  if (!friend) {

    return (
      <div className="mt-10 text-center">
        Friend Not Found
      </div>
    );

  }

  const handleCheckIn = (type) => {

    addEntry(type, friend.name);

    toast.success(
      `${type} logged with ${friend.name}`
    );

  };

  const getStatusColor = (status) => {

    if (status === "overdue")
      return "bg-red-100 text-red-600";

    if (status === "almost due")
      return "bg-amber-100 text-amber-600";

    return "bg-emerald-100 text-emerald-600";
  };

  return (

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* LEFT COLUMN */}

      <div className="space-y-4">

        {/* Profile Card */}

        <div className="bg-white p-6 rounded-2xl shadow text-center">

          <img
            src={friend.picture}
            className="w-24 h-24 rounded-full mx-auto"
          />

          <h2 className="text-lg font-semibold mt-3">
            {friend.name}
          </h2>

          {/* Status */}

          <span
            className={`text-xs px-3 py-1 rounded-full mt-2 inline-block ${getStatusColor(friend.status)}`}
          >

            {friend.status}

          </span>

          {/* Tags */}

          <div className="flex justify-center gap-2 mt-3 flex-wrap">

            {friend.tags.map((tag, i) => (

              <span
                key={i}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                {tag}
              </span>

            ))}

          </div>

          <p className="text-gray-500 text-sm mt-3">
            {friend.bio}
          </p>

          <p className="text-gray-400 text-xs mt-1">
            {friend.email}
          </p>

        </div>

        {/* Action Buttons */}

        <div className="space-y-2">

          <button className="w-full border p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100">

            <FaClock />

            Snooze 2 Weeks

          </button>

          <button className="w-full border p-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100">

            <FaArchive />

            Archive

          </button>

          <button className="w-full border p-3 rounded-xl flex items-center justify-center gap-2 text-red-500 hover:bg-red-50">

            <FaTrash />

            Delete

          </button>

        </div>

      </div>

      {/* RIGHT COLUMN */}

      <div className="lg:col-span-2 space-y-6">

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-white p-5 rounded-xl shadow text-center">

            <p className="text-2xl font-bold">
              {friend.days_since_contact}
            </p>

            <p className="text-sm text-gray-500">
              Days Since Contact
            </p>

          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">

            <p className="text-2xl font-bold">
              {friend.goal}
            </p>

            <p className="text-sm text-gray-500">
              Goal (Days)
            </p>

          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">

            <p className="text-lg font-bold">
              {friend.next_due_date}
            </p>

            <p className="text-sm text-gray-500">
              Next Due
            </p>

          </div>

        </div>

        {/* Relationship Goal */}

        <div className="bg-white p-6 rounded-xl shadow flex justify-between items-center">

          <div>

            <p className="font-semibold">
              Relationship Goal
            </p>

            <p className="text-gray-500 text-sm">
              Connect every {friend.goal} days
            </p>

          </div>

          <button className="text-sm border px-3 py-1 rounded-lg">

            Edit

          </button>

        </div>

        {/* Quick Check-In */}

        <div className="bg-white p-6 rounded-xl shadow">

          <p className="font-semibold mb-4">
            Quick Check-In
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <button
              onClick={() => handleCheckIn("Call")}
              className="border p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100"
            >

              <FaPhone />

              Call

            </button>

            <button
              onClick={() => handleCheckIn("Text")}
              className="border p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100"
            >

              <FaComment />

              Text

            </button>

            <button
              onClick={() => handleCheckIn("Video")}
              className="border p-4 rounded-xl flex flex-col items-center gap-2 hover:bg-gray-100"
            >

              <FaVideo />

              Video

            </button>

          </div>

        </div>

      </div>

    </div>

  );
}