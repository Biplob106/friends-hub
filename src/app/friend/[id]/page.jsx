"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const FriendDetails = () => {

  const params = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/friends.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(f => f.id === parseInt(params.id));
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

  return (

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* LEFT */}

      <div className="bg-white shadow-md p-6 rounded-xl text-center">

        <img
          src={friend.picture}
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h2 className="text-xl font-bold mt-4">
          {friend.name}
        </h2>

        <p className="text-gray-500 mt-2">
          {friend.email}
        </p>

        <p className="text-gray-600 mt-3 text-sm">
          {friend.bio}
        </p>

      </div>

      {/* RIGHT */}

      <div className="lg:col-span-2 space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-white shadow p-4 rounded-xl text-center">
            {friend.days_since_contact} Days
          </div>

          <div className="bg-white shadow p-4 rounded-xl text-center">
            Goal: {friend.goal}
          </div>

          <div className="bg-white shadow p-4 rounded-xl text-center">
            {friend.next_due_date}
          </div>

        </div>

      </div>

    </div>

  );
};

export default FriendDetails;
