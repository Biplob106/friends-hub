import Image from "next/image";
import callIcon from "@/assets/call.png";
import textIcon from "@/assets/text.png";
import videoIcon from "@/assets/video.png";

const ICONS = {
  Call: callIcon,
  Text: textIcon,
  Video: videoIcon,
};

export default function TimelineItem({ entry }) {

  const iconSrc = ICONS[entry.type] || callIcon;

  return (

    <div className="bg-white border rounded-xl px-5 py-4 flex items-center gap-4 hover:shadow-sm transition">

      <div className="text-xl">

        <Image src={iconSrc} alt={entry.type} width={22} height={22} />

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