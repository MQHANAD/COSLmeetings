"use client";
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';



const availableDates = [14, 15, 16, 18, 20, 21, 25, 26, 27, 28, 29, 30];
const availableTimes = ['5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM', '9:30 PM'];

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<number | null>(18);
    const [selectedTime, setSelectedTime] = useState<string | null>('5:30 PM');

    const handleDateSelect = (day: number) => {
        setSelectedDate(day);
        setSelectedTime(null);
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 text-black">
            <Head>
                <title>Room Booking</title>
            </Head>

            <div className="bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl">
                {/* Room Info */}
                <div className="p-8 col-span-1 border-r">
                    <h1 className="text-2xl font-bold">Room 101</h1>
                    <ul className="mt-4 space-y-2 text-gray-700">
                        <li>• Address</li>
                        <li>• Next Meeting will be Today at 9:00am</li>
                    </ul>
                </div>

                {/* Calendar and Booking */}
                <div className="col-span-2 p-8">
                    <h2 className="text-xl font-semibold mb-4">Choose Date & Time</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Calendar */}
                        <div className="grid grid-cols-7 gap-2 text-center">
                            {[...Array(31)].map((_, i) => {
                                const day = i + 1;
                                const isAvailable = availableDates.includes(day);
                                return (
                                    <button
                                        key={day}
                                        disabled={!isAvailable}
                                        className={`rounded-full w-10 h-10 text-sm font-medium
                      ${!isAvailable ? 'text-gray-300' : ''}
                      ${selectedDate === day ? 'bg-blue-500 text-white' : 'bg-blue-100'}
                    `}
                                        onClick={() => handleDateSelect(day)}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Times */}
                        <div className="flex flex-col gap-3">
                            <div className="font-medium">Monday, July {selectedDate}</div>
                            {availableTimes.map((time) => (
                                <div className="filter">
                                    <input className="btn filter-reset bg-white text-black border-whtie shadow-2xs" type="radio" name="metaframeworks" aria-label="All" />
                                    <input className="btn bg-white text-black border-whtie shadow-2xs" type="radio" name="metaframeworks" aria-label={time} key={time} />
                                </div>

                            ))}
                            <Link href={'/meetingInfo'}>
                                <button className="btn btn-primary mt-4 w-40" disabled={!selectedTime}>Book</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}