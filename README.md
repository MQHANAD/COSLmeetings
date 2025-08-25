# Conference Room Management & Meeting System

A web application developed during a 2-month summer internship at COSL in China. This system allows users to manage conference rooms, schedule meetings, and view analytics for efficient utilization of resources. Built with Next.js, Tailwind CSS, and Framer Motion for animations.

# Deployed at https://cosl-meetings.vercel.app/

## Features

### Mandatory Modules
- **User Management**
  - Import users from CSV or Excel.
  - Manage basic information: Name, Department, Email.

- **Conference Room Management**
  - Full CRUD (Create, Read, Update, Delete) functionality.
  - Room details: Name, Location, Capacity, Equipment, Status.

- **Room Booking**
  - Select room, date, and time.
  - Enter meeting details (title, host, attendees, type, agenda, attachments).
  - Conflict detection prevents double-booking.
  - Auto-confirmation for available slots.

### Optional Modules
- **Conference Room Status Dashboard**
  - Calendar, Timeline, or Floor Plan view.
  - Real-time status updates: Available, Booked, Cleaning, Maintenance, etc.

- **Meeting Management**
  - Post-meeting updates: Minutes, attachments.

- **Analytics & Reporting**
  - Conference room utilization: booking frequency, occupancy, peak hours.
  - Meeting statistics by department, type, or individual.
  - Visualizations with charts.

## Technologies Used
- Next.js
- Tailwind CSS
- DaisyUI
- Framer Motion
- React Hooks
- Static assets in public folder

## License

MIT License
