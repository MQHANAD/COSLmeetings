import Database from 'better-sqlite3';
import path from 'path';

// Connect to the database or create it if it doesn't exist
const dbPath = path.resolve(process.cwd(), 'database.sqlite');
const db = new Database(dbPath, { verbose: console.log });

db.pragma('journal_mode = WAL');

// Define Schemas
const createTables = () => {
    db.exec(`
        CREATE TABLE IF NOT EXISTS Users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Rooms (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            imageUrl TEXT NOT NULL,
            roomNumber TEXT NOT NULL,
            buildingNumber TEXT NOT NULL,
            capacity INTEGER NOT NULL,
            status TEXT CHECK(status IN ('Available', 'Out of Service', 'Under Maintenance')) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS Bookings (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            roomId INTEGER NOT NULL,
            userId INTEGER,
            date INTEGER NOT NULL,
            time TEXT NOT NULL,
            title TEXT,
            attendees TEXT,
            host TEXT,
            agenda TEXT,
            meetingType TEXT,
            equipments TEXT,
            FOREIGN KEY(roomId) REFERENCES Rooms(id),
            FOREIGN KEY(userId) REFERENCES Users(id)
        );
    `);
};

// Seed Data
const seedData = () => {
    // Check if rooms exist
    const roomCount = db.prepare('SELECT COUNT(*) as count FROM Rooms').get() as { count: number };
    
    if (roomCount.count === 0) {
        const insertRoom = db.prepare(`
            INSERT INTO Rooms (id, imageUrl, roomNumber, buildingNumber, capacity, status)
            VALUES (@id, @imageUrl, @roomNumber, @buildingNumber, @capacity, @status)
        `);

        const insertUser = db.prepare(`
            INSERT INTO Users (id, name, email)
            VALUES (@id, @name, @email)
        `);

        // Seed Users
        insertUser.run({ id: 1, name: 'Admin', email: 'admin@example.com' });

        // Seed Rooms (based on mock data)
        const rooms = [
            { id: 1, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 101', buildingNumber: 'Building number', capacity: 12, status: 'Available' },
            { id: 2, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 102', buildingNumber: 'Building number', capacity: 12, status: 'Available' },
            { id: 3, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 103', buildingNumber: 'Building number', capacity: 12, status: 'Available' },
            { id: 4, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 104', buildingNumber: 'Building number', capacity: 12, status: 'Under Maintenance' },
            { id: 5, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 105', buildingNumber: 'Building number', capacity: 12, status: 'Out of Service' },
            { id: 6, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 106', buildingNumber: 'Building number', capacity: 12, status: 'Under Maintenance' },
            { id: 7, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 107', buildingNumber: 'Building number', capacity: 12, status: 'Out of Service' },
            { id: 8, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 108', buildingNumber: 'Building number', capacity: 12, status: 'Under Maintenance' },
            { id: 9, imageUrl: 'assets/room.jpg', roomNumber: 'Room number 109', buildingNumber: 'Building number', capacity: 12, status: 'Out of Service' },
        ];

        db.transaction((roomsData) => {
            for (const room of roomsData) {
                insertRoom.run(room);
            }
        })(rooms);
    }
};

createTables();
seedData();

export default db;
