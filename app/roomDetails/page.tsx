// pages/index.tsx
'use client'
import Head from 'next/head'
import RoomInfo from '../components/roominfo'
import Analytics from '../components/Analytics'
import { useRouter } from 'next/navigation'
import MeetingSection from "../components/MeetingSection";
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
    const router = useRouter();
    const roomData = {
        name: 'Room 101',
        status: 'Available',
        capacity: 12,
        equipment: ['TV', 'Camera', 'Whiteboard'],
        nextMeeting: 'Today at 9:00am',
        image:"../assets/building.jpg"
    }

    const analytics = {
        timesBooked: 366,
        durationHours: 366,
        peakHours: [
            { day: 'Mon', value: 6 },
            { day: 'Tue', value: 5 },
            { day: 'Wed', value: 6 },
            { day: 'Thu', value: 5 },
            { day: 'Fri', value: 6 },
            { day: 'Sat', value: 5 }
        ],
        pieData: [25, 25, 25, 25],
        barData: {
            thisMonth: 48820,
            lastMonth: 26498
        }
    }

    const meetings = {
        inProgress: [
            { id: 1, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' }
        ],
        upcoming: [
            { id: 2, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' },
            { id: 3, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' }
        ],
        previous: [
            { id: 4, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' },
            { id: 5, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' },
            { id: 6, title: 'Meeting title', time: '3/9/2025 3:30PM', host: 'Muhannad', type: 'Regular' }
        ]
    }

    return (
        <>
            <Head>
                <title>Oilfield Chemicals R&D Institute</title>
            </Head>
            <main className="p-4 max-w-7xl mx-auto pl-32 pr-32 pt-16">
                <div className='flex flex-row items-center space-x-2 mb-4'>
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-black hover:text-gray-700 cursor-pointer"
                        aria-label="Go back"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-8 sm:w-8 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-bold text-black">Oilfield Chemicals R&D institute COSL</h1>
                </div>

                <RoomInfo data={roomData} />

                <Analytics data={analytics} />

                <div className="min-h-screen p-6 bg-[rgba(255,255,255,0)] text-black">
                    <Head>
                        <title>Meeting Records</title>
                    </Head>
                    <h1 className="text-3xl font-extrabold mb-8">Meeting Records</h1>
                    <MeetingSection title="In Progress" meetings={meetingData.inProgress} />
                    <MeetingSection title="Upcoming" meetings={meetingData.upcoming} />
                    <MeetingSection title="Previous" meetings={meetingData.previous} />

                </div>
            </main>
        </>
    )
}