'use client';

import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BuildingForm() {
  const [file, setFile] = useState<File | null>(null); // Changed to single file
  const router = useRouter();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]; // Get only the first file
    if (!selectedFile) return;
    
    // Check if the file is an image
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
            Adding new Building
          </h1>
        </div>
      </div>

      {/* Centered form */}
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:mt-32 mt-10">
        <h1 className="text-3xl font-bold text-[#0E98D8] mb-2 text-center">
          building information
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please fill the following information
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Department" className="input input-bordered w-full bg-[#F4F4F5]" />
          <input type="text" placeholder="Address" className="input input-bordered w-full bg-[#F4F4F5]" />
          <input type="text" placeholder="Building Number" className="input input-bordered w-full bg-[#F4F4F5]" />
          <input type="text" placeholder="Number of Rooms" className="input input-bordered w-full bg-[#F4F4F5]" />

          <div className="md:col-span-2 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-6 text-center cursor-pointer relative bg-[#F4F4F5]">
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileChange}
              accept="image/jpeg, image/png, image/jpg" // Only accept image files
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400 mb-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V19a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 19v-2.5M3 12.75L9.75 5.25 15 10.5l3-3 3 3m-6 4.5h.008v.008H15v-.008z" />
            </svg>
            <p>
              <span className="text-[#0E98D8] font-medium">Click to upload</span> or drag and drop to upload a picture of the building
            </p>
            <p className="text-sm text-gray-400">JPG, JPEG, PNG only</p>
          </div>

          {file && (
            <div className="md:col-span-2">
              <div className="text-sm text-gray-700">
                Selected file: {file.name}
              </div>
            </div>
          )}

          <div className="md:col-span-2 text-center mt-4">
            <Link href={'/main/Admin'}>
            <button
              type="submit" 
              className="btn bg-[#0E98D8] hover:bg-sky-600 text-white px-24 md:px-32 rounded-xl"
            >
              Add
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}