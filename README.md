# Real-Time Coordinates with Kafka (Producer & Consumer) and Google Maps

This project implements a real-time location tracking system where coordinates (latitude and longitude) are sent via Kafka message broker and used to update a Google Map on the frontend. The system captures location data from a source, publishes it to a Kafka topic, and the frontend listens for updates to reflect the new location on the map in real time.

## Technologies Used

    1. Apache Kafka: Message broker for real-time data streaming.
    2. Node.js: Backend service to send and receive messages.
    3. Google Maps API: To render the map and update it with new coordinates.
    3. HTML/CSS/JavaScript: Frontend for displaying the map and interacting with the backend.

## Running the Application
    1. Start zookeeper & kafka Server
    2. Git clone this repositories
    3. npm install
    4. Open live Server
    5. Open terminal and run npm run dev
    6. Open http://localhost:4000

## Current Issues:
**Frequent Polling**: The current approach fetches the location every 10 seconds, even if the location hasn't changed. This is inefficient and causes unnecessary map updates and network resouces.

## Next Steps & Future Implementation:
- **WebSocket for Real-Time Data**: Switch from the current polling method to using WebSocket for receiving real-time location updates. This will reduce unnecessary fetch calls and provide more efficient and real-time communication.
- **Location Update Validation**: Introduce a validation mechanism that will check if the user's location or status has changed before updating the map. This will prevent unnecessary updates to the map when the data is the same as before.
