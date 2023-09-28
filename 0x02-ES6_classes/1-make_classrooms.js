// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

// Implement the initializeRooms function
function initializeRooms() {
	// Create and return an array of ClassRoom objects with sizes 19, 20, 34
	const rooms = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
	return rooms;
}

// Export the initializeRooms function as the default export
export default initializeRooms;
