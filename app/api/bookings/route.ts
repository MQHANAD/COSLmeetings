import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
    try {
        const bookings = db.prepare(`
            SELECT b.*, r.roomNumber, r.buildingNumber 
            FROM Bookings b 
            JOIN Rooms r ON b.roomId = r.id
        `).all();
        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        return NextResponse.json({ error: 'Failed to fetch bookings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { roomId, userId, date, time, title, attendees, host, agenda, meetingType, equipments } = body;

        if (!roomId || !date || !time) {
            return NextResponse.json({ error: 'roomId, date, and time are required' }, { status: 400 });
        }

        // Check for double booking
        const existingBooking = db.prepare(`
            SELECT * FROM Bookings WHERE roomId = ? AND date = ? AND time = ?
        `).get(roomId, date, time);

        if (existingBooking) {
            return NextResponse.json({ error: 'Room is already booked for this date and time' }, { status: 409 });
        }

        const insertBooking = db.prepare(`
            INSERT INTO Bookings (roomId, userId, date, time, title, attendees, host, agenda, meetingType, equipments)
            VALUES (@roomId, @userId, @date, @time, @title, @attendees, @host, @agenda, @meetingType, @equipments)
        `);

        const result = insertBooking.run({
            roomId,
            userId: userId || 1, // Default to 1 (Admin) if not provided
            date,
            time,
            title: title || '',
            attendees: attendees || '',
            host: host || '',
            agenda: agenda || '',
            meetingType: meetingType || '',
            equipments: equipments ? JSON.stringify(equipments) : '[]'
        });

        return NextResponse.json({ success: true, bookingId: result.lastInsertRowid }, { status: 201 });
    } catch (error) {
        console.error('Error creating booking:', error);
        return NextResponse.json({ error: 'Failed to create booking' }, { status: 500 });
    }
}
