// components/FriendCard.jsx
import Link from 'next/link';

export default function FriendCard({ friend }) {
  const getStatusColor = (status) => {
    if (status === 'overdue') return 'bg-red-100 text-red-700 border-red-200';
    if (status === 'almost due') return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-emerald-100 text-emerald-700 border-emerald-200';
  };

  return (
    <Link href={`/friends/${friend.id}`}>
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-violet-200 hover:shadow-xl transition-all duration-300 group">
        <div className="h-48 bg-gray-200 relative">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className={`absolute top-4 right-4 px-4 py-1 text-xs font-medium rounded-full border ${getStatusColor(friend.status)}`}>
            {friend.status.toUpperCase()}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-semibold text-xl text-gray-900 mb-1">{friend.name}</h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span>Last contacted</span>
            <span className="font-medium text-gray-700">{friend.days_since_contact} days ago</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {friend.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}