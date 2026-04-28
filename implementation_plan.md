# Implementation Plan: Conference Room Management System Backend

The goal is to build a robust SQLite backend using Next.js API routes and integrate it into the existing React frontend, replacing the mocked data.

## User Review Required
Please review the Database schema and the way data is passed between the Booking page and Meeting Info page, as that flow relies on passing URL parameters which is a slight shift from the current static flow.

## Proposed Changes

### 1. Database & Schema Setup
- **Install dependencies:** `better-sqlite3` and `@types/better-sqlite3`.
- **Database initialization (`lib/db.ts`):** We will initialize `database.sqlite`.

#### [NEW] [db.ts](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/lib/db.ts)
This file will contain the SQLite schema definition and a seed function to populate initial rooms and a default user.

**Schema Definitions:**
- **Users**: `id`, `name`, `email`
- **Rooms**: `id`, `imageUrl`, `roomNumber`, `buildingNumber`, `capacity`, `status`
- **Bookings**: `id`, `roomId`, `userId`, `date`, `time`, `title`, `attendees`, `host`, `agenda`, `meetingType`, `equipments`

### 2. API Endpoints
We will create Next.js App Router API endpoints in `app/api/...`.

#### [NEW] [route.ts (Rooms)](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/app/api/rooms/route.ts)
- `GET /api/rooms`: Fetches all rooms and their current statuses from the database. Basic error handling returns 500 on database failure.

#### [NEW] [route.ts (Bookings)](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/app/api/bookings/route.ts)
- `GET /api/bookings`: Fetches the booking history (all bookings) joining with the room details.
- `POST /api/bookings`: Accepts a new booking payload. It will query the database to check if a booking already exists for the given `roomId`, `date`, and `time`. If yes, returns `409 Conflict`. Otherwise, inserts the new booking.

### 3. Frontend Integration

#### [MODIFY] [app/rooms/page.tsx](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/app/rooms/page.tsx)
- Replace static `const rooms` array with standard React `useState` and `useEffect` to `fetch('/api/rooms')`.
- Add a loading state and error handling to gracefully degrade if the API fails (e.g., show an error message but keep UI layout intact).
- Make the `RoomCard` clicks pass the `roomId` to the booking page.

#### [MODIFY] [app/booking/page.tsx](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/app/booking/page.tsx)
- Modify the component to accept `roomId` from search parameters or props.
- Fetch room details (from `/api/rooms` filtering by ID).
- Pass the selected `date` and `time` alongside the `roomId` via URL query parameters when navigating to `/meetingInfo`. For example: `<Link href={\`/meetingInfo?roomId=\${roomId}&date=\${selectedDate}&time=\${selectedTime}\`}>`

#### [MODIFY] [app/meetingInfo/page.tsx](file:///c:/Users/Zord/Desktop/repos/COSLmeetings/app/meetingInfo/page.tsx)
- Read `roomId`, `date`, and `time` from URL search parameters (`useSearchParams()`).
- On form submit, collect all data (title, attendees, host, agenda, meeting type, selected equipments).
- Make a `POST` request to `/api/bookings`.
- Handle conflict errors (e.g., display an alert "Room already booked for this time") and success cases (redirect to main or booking history).

## Verification Plan

### Automated Tests
- N/A. We will rely on manual verification.

### Manual Verification
1. Run the app (`npm run dev`).
2. Navigate to `/rooms` and verify that seeded rooms from the SQLite DB are displayed properly.
3. Click to book a room, select a date and time, and proceed to the Meeting Info form.
4. Fill the meeting info form and click "Create". Verify that the booking is created successfully in the DB and redirects appropriately.
5. Attempt to create a second booking for the same room, date, and time. Verify that the UI displays a proper "double-booking" error message.
6. Verify `/api/bookings` endpoint returns the booking history accurately.
