// app/main/meetings/page.tsx
import React from "react";
import MeetingSection from "../../components/MeetingSection";

// Dummy meetings data
const meetings = [
  {
    department: "Oilfield Chemical...",
    title: "Meeting title",
    host: "Muhanna...",
    time: "30/1/2025 3:30PM",
    type: "Regular",
    image: "/building.jpg", // <-- put dummy image in public folder
  },
];

export const meetingData = {
  pending: meetings,
  inProgress: meetings,
  upcoming: [meetings[0], meetings[0]],
  previous: [meetings[0], meetings[0], meetings[0]],
};

// Metadata for App Router page
export const metadata = {
  title: "My Meetings",
  description: "View your meetings",
};

export default function MeetingsPage() {
  return (
    <div className="min-h-screen p-6 bg-transparent text-black">
      <h1 className="text-3xl font-extrabold mb-8">My Meetings</h1>

      <MeetingSection title="Pending meeting invites" meetings={meetingData.pending} />
      <MeetingSection title="In Progress" meetings={meetingData.inProgress} />
      <MeetingSection title="Upcoming" meetings={meetingData.upcoming} />
      <MeetingSection title="Previous" meetings={meetingData.previous} />
    </div>
  );
}
