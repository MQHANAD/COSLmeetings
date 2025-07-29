import { AiOutlineInfoCircle } from "react-icons/ai";

type Meeting = {
  image: string;
  department: string;
  title: string;
  host: string;
  time: string;
  type: string;
};

interface MeetingSectionProps {
  title: string;
  meetings: Meeting[];
}

export default function MeetingSection({ title, meetings }: MeetingSectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {meetings.map((meeting, idx) => (
        <div
          key={idx}
          className="flex items-start sm:items-center py-3 text-sm text-gray-700 border-b border-gray-100"
        >
          <img
            src={meeting.image}
            alt="department"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded mr-3 sm:mr-4 object-cover flex-shrink-0"
          />
          <div className="flex-1">
            {/* Mobile view - stacked layout */}
            <div className="sm:hidden space-y-1">
              <div className="font-medium">{meeting.title}</div>
              <div className="text-gray-500">{meeting.department}</div>
              <div className="flex justify-between">
                <span>{meeting.host}</span>
                <span className="text-gray-500">{meeting.time}</span>
              </div>
              <div className="text-gray-500">{meeting.type}</div>
            </div>
            
            {/* Desktop view - grid layout */}
            <div className="hidden sm:grid grid-cols-5 gap-4">
              <div>{meeting.department}</div>
              <div>{meeting.title}</div>
              <div>{meeting.host}</div>
              <div>{meeting.time}</div>
              <div>{meeting.type}</div>
            </div>
          </div>
          <AiOutlineInfoCircle className="ml-2 sm:ml-4 text-lg sm:text-xl text-blue-400 flex-shrink-0 cursor-pointer" />
        </div>
      ))}
    </div>
  );
}