// components/Analytics.tsx
import React from 'react'

type Props = {
    data: {
        timesBooked: number
        durationHours: number
        peakHours: { day: string; value: number }[]
        pieData: number[]
        barData: { thisMonth: number; lastMonth: number }
    }
}

export default function Analytics({ data }: Props) {
    return (
        <section className="mb-8 text-black">

            <h2 className="text-xl font-semibold mb-4">Analytics</h2>
            <div className="bg-[rgba(255,255,255,0)] flex items-center justify-center z-10 pointer-events-none">
                <div className="text-2xl font-bold text-gray-600 bg-white bg-opacity-90 px-6 py-3 rounded-lg shadow-lg">
                    Coming Soon
                </div>
            </div>
            {/* <div className="grid md:grid-cols-3 gap-4 mb-4">

                <div className="stat bg-base-100 shadow">
                    <div className="stat-title">Times Booked</div>
                    <div className="stat-value">{data.timesBooked}</div>
                </div>
                <div className="stat bg-base-100 shadow">
                    <div className="stat-title">Duration Hours</div>
                    <div className="stat-value">{data.durationHours}</div>
                </div>


                <div className="flex justify-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-outline m-1">Pick an option</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Daily</a></li>
                            <li><a>Weekly</a></li>
                            <li><a>Monthly</a></li>
                            <li><a>Yearly</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-base-100 shadow p-4 rounded">
                    <h3 className="font-medium mb-2">Peak hours analysis</h3>
                    <ul>
                        {data.peakHours.map((h, idx) => (
                            <li key={idx}>{h.day}: {h.value}</li>
                        ))}
                    </ul>
                </div>
                <div className="bg-base-100 shadow p-4 rounded">
                    <h3 className="font-medium mb-2">Pie Chart</h3>
                    <div className="w-full h-32 bg-gray-100 flex items-center justify-center">Placeholder</div>
                </div>
            </div>

            <div className="mt-4 bg-base-100 shadow p-4 rounded">
                <h3 className="font-medium mb-2">Bar Chart</h3>
                <p>This Month: ${data.barData.thisMonth.toLocaleString()}</p>
                <p>Last Month: ${data.barData.lastMonth.toLocaleString()}</p>
                <div className="w-full h-32 bg-gray-100 mt-2 flex items-center justify-center">Bar Chart Placeholder</div>
            </div> */}
        </section>
    )
}
