'use client';

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BuildingForm() {
    const [file, setFile] = useState<File | null>(null);
    const [selectedEquipments, setSelectedEquipments] = useState<string[]>([]);
    const router = useRouter();

    const equipmentOptions = [
        "Projector",
        "Whiteboard",
        "TV Screen",
        "Computer",
        "Smart Board",
        "Air Conditioning",
        "WiFi Access",
        "Telepresence",
        "Coffee Machine",
        "Sound System",
        "Microphones",
        "Power Outlets",
        "Conference Phone",
        "Wireless Presentation",
        "Digital Whiteboard",
        "Video Conferencing",
        "Blu-ray/DVD Player",
        "Document Camera",
        "USB Charging",
        "Interactive Display",

    ];

    const toggleEquipment = (equipment: string) => {
        setSelectedEquipments(prev =>
            prev.includes(equipment)
                ? prev.filter(item => item !== equipment)
                : [...prev, equipment]
        );
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;

        if (!selectedFile.type.match('image.*')) {
            alert('Please select an image file (JPG, JPEG, or PNG)');
            return;
        }

        setFile(selectedFile);
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[rgba(255,255,255,0)] p-4 text-black relative md:mt-6 mt-12">
            {/* Top left header */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-full max-w-3xl">
                <div className='flex flex-row items-center space-x-10'>
                    <button
                        onClick={() => router.back()}
                        className="flex items-center text-black hover:text-gray-700 cursor-pointer"
                        aria-label="Go back"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                    <h1 className="text-xl sm:text-2xl font-bold text-black">
                        Oilfield Chemicals R&D institute COSL
                    </h1>
                </div>
            </div>

            {/* Centered form */}
            <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:mt-32 mt-10">
                <h1 className="text-3xl font-bold text-[#0E98D8] mb-2 text-center">
                    Meeting information
                </h1>
                <p className="text-center text-sm text-gray-500 mb-6">
                    Please fill the following information
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Title" className="input input-bordered w-full bg-[#F4F4F5]" />
                    <input type="text" placeholder="Invite Attenees" className="input input-bordered w-full bg-[#F4F4F5]" />
                    <input type="text" placeholder="Host" className="input input-bordered w-full bg-[#F4F4F5]" />
                    <input type="text" placeholder="Agenda" className="input input-bordered w-full bg-[#F4F4F5]" />
                    <select defaultValue="Meetin Type" className="select w-full text-gray-500 bg-[#F4F4F5]">
                        <option disabled={true}>Meeting Type</option>
                        <option>Regular</option>
                        <option>Project Review</option>
                        <option>Training</option>
                    </select>

                    {/* Equipment Selection */}
                    <div className="md:col-span-2">
                        <label className="label">
                            <span className="label-text">Select Required Equipment</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                            {equipmentOptions.map((equipment) => (
                                <div
                                    key={equipment}
                                    onClick={() => toggleEquipment(equipment)}
                                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${selectedEquipments.includes(equipment)
                                        ? 'bg-[#0E98D8] text-white border-[#0E98D8]'
                                        : 'bg-[#F4F4F5] border-gray-300 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedEquipments.includes(equipment)}
                                            readOnly
                                            className="checkbox checkbox-sm"
                                        />
                                        <span className='truncate text-sm'>{equipment}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {selectedEquipments.length > 0 && (
                            <div className="mt-3">
                                <p className="text-sm font-medium mb-1">Selected Equipment:</p>
                                <div className="flex flex-wrap gap-2">
                                    {selectedEquipments.map(item => (
                                        <span
                                            key={item}
                                            className="badge bg-[#0E98D8] text-white px-3 py-2 rounded-full"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* File Upload Section */}
                    <div className="md:col-span-2 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 text-center cursor-pointer relative bg-[#F4F4F5]">
                        <input
                            type="file"
                            multiple
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileChange}
                            accept=".jpg,.jpeg,.png,.pdf,.ppt,.csv"
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400 mb-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19v-2.5M3 12.75L9.75 5.25 15 10.5l3-3 3 3m-6 4.5h.008v.008H15v-.008z" />
                        </svg>
                        <p>
                            <span className="text-[#0E98D8] font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-sm text-gray-400">JPG, JPEG, PNG, PDF, PPT, CSV, Etc...</p>
                    </div>

                    {file && (
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{file.name}</span>
                            </div>
                        </div>
                    )}

                    <div className="md:col-span-2 text-center mt-4">
                        <Link href={'/main'}>
                            <button
                                type="submit"
                                className="btn bg-[#0E98D8] hover:bg-sky-600 text-white px-24 md:px-32 rounded-xl"
                            >
                                Create
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}