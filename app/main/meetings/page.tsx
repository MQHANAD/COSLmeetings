import MeetingSection from "../../components/MeetingSection";
const meetings = [
  {
    department: "Oilfield Chemical...",
    title: "Meeting title",
    host: "Muhanna...",
    time: "30/1/2025 3:30PM",
    type: "Regular",
    image: "../assets/building.jpg", // Place a dummy image in public folder
  },
];

export const meetingData = {
  pending: meetings,
  inProgress: meetings,
  upcoming: [meetings[0], meetings[0]],
  previous: [meetings[0], meetings[0], meetings[0]],
};

export default function Home() {
  return (
    <div className="min-h-screen p-6 bg-[rgba(255,255,255,0)] text-black">
      <h1 className="text-3xl font-extrabold mb-8">My Meetings</h1>

      <MeetingSection title="Pending meeting invites" meetings={meetingData.pending}  />
      <MeetingSection title="In Progress" meetings={meetingData.inProgress} />
      <MeetingSection title="Upcoming" meetings={meetingData.upcoming} />
      <MeetingSection title="Previous" meetings={meetingData.previous} />

    </div>
  );
}