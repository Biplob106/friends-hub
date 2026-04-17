import {
  FaPhone,
  FaComment,
  FaVideo,
  FaHandshake
} from "react-icons/fa";

export default function TimelineItem({ entry }) {

  const getIcon = () => {

    if (entry.type === "Call")
      return <FaPhone className="text-gray-600" />;

    if (entry.type === "Text")
      return <FaComment className="text-gray-600" />;

    if (entry.type === "Video")
      return <FaVideo className="text-gray-600" />;

    return <FaHandshake className="text-gray-600" />;
  };

  return (

    <div className="bg-white border rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-sm transition">

     

      <div className="text-xl">

        {getIcon()}

      </div>

      

      <div>

        <p className="font-medium text-gray-900">

          {entry.title}

        </p>

        <p className="text-sm text-gray-500">

          {entry.date}

        </p>

      </div>

    </div>

  );
}