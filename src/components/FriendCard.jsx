import Link from "next/link";

export default function FriendCard({ friend }) {

  const getStatusColor = (status) => {

    if (status === "overdue")
      return "bg-red-100 text-red-600";

    if (status === "almost due")
      return "bg-amber-100 text-amber-600";

    return "bg-emerald-100 text-emerald-600";
  };

  return (

    <Link href={`/friend/${friend.id}`}>

      <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition duration-300">

        {/* Profile Image */}

        <img
          src={friend.picture}
          alt={friend.name}
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />

        {/* Name */}

        <h3 className="font-semibold text-lg mt-3 text-gray-900">
          {friend.name}
        </h3>

        {/* Age */}

        <p className="text-sm text-gray-500">
          {friend.age} age
        </p>

        {/* Tags */}

        <div className="flex justify-center flex-wrap gap-2 mt-2">

          {friend.tags.map((tag, index) => (

            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>

          ))}

        </div>

        {/* Status */}

        <div className="mt-3">

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(friend.status)}`}
          >

            {friend.status === "overdue"
              ? "Overdue"
              : friend.status === "almost due"
              ? "Almost Due"
              : "On Track"}

          </span>

        </div>

      </div>

    </Link>

  );
}