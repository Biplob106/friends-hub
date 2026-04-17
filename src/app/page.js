// src/app/page.js
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import FriendCard from '../components/FriendCard';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFriends = async () => {
      try {
        // সঠিক পাথ (public folder থেকে)
        const res = await fetch('/data/friends.json');
        
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Error loading friends:", error);
        toast.error("Failed to load friends data");
      } finally {
        setLoading(false);
      }
    };

    // Loading দেখানোর জন্য ছোট delay
    const timer = setTimeout(() => {
      loadFriends();
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const totalFriends = friends.length;
  const overdue = friends.filter(f => f.status === 'overdue').length;
  const almostDue = friends.filter(f => f.status === 'almost due').length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-violet-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-500">Loading your friends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-16 text-center">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">
            Keep Your Connections Alive
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Never lose touch with the people who matter most.
          </p>
          
          <button 
            onClick={() => toast.success("Add Friend feature coming soon!")}
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-2xl text-lg font-medium flex items-center gap-3 mx-auto transition-all"
          >
            Add a Friend 
            <span className="text-2xl">+</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="max-w-7xl mx-auto px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
            <div className="text-4xl font-bold text-gray-900">{totalFriends}</div>
            <div className="text-gray-500 mt-1">Total Friends</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-100">
            <div className="text-4xl font-bold text-red-600">{overdue}</div>
            <div className="text-gray-500 mt-1">Overdue</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-amber-100">
            <div className="text-4xl font-bold text-amber-600">{almostDue}</div>
            <div className="text-gray-500 mt-1">Almost Due</div>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-emerald-100">
            <div className="text-4xl font-bold text-emerald-600">{onTrack}</div>
            <div className="text-gray-500 mt-1">On Track</div>
          </div>
        </div>
      </div>

      {/* Your Friends Section */}
      <div className="max-w-7xl mx-auto px-8 pt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">Your Friends</h2>
          <p className="text-gray-500">{friends.length} connections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </div>
  );
}