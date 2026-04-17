export default function TimelineItem({ entry }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500 shrink-0"></div>
      <div>
        <p className="font-medium">{entry.title}</p>
        <p className="text-sm text-gray-500">{entry.date}</p>
      </div>
    </div>
  );
}
