import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
    try {
        const rooms = db.prepare('SELECT * FROM Rooms').all();
        return NextResponse.json(rooms, { status: 200 });
    } catch (error) {
        console.error('Error fetching rooms:', error);
        return NextResponse.json({ error: 'Failed to fetch rooms' }, { status: 500 });
    }
}
