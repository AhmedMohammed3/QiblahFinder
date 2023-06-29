const kaabaCoords = {
    lat: 21.422487,
    lon: 39.826206
}
exports.kaabaCoords = kaabaCoords;
exports.calculateQiblahDirection = (latitude, longitude) => {
    const kaabaLatitude = kaabaCoords.lat;
    const kaabaLongitude = kaabaCoords.lon;

    // Convert degrees to radians
    const lat1 = toRadians(latitude);
    const lon1 = toRadians(longitude);
    const lat2 = toRadians(kaabaLatitude);
    const lon2 = toRadians(kaabaLongitude);

    // Calculate the differences between the latitudes and longitudes
    const dLon = lon2 - lon1;

    // Calculate the direction using the Haversine formula
    const y = Math.sin(dLon) * Math.cos(lat2);
    const x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
    let direction = Math.atan2(y, x);

    // Convert the direction from radians to degrees
    direction = toDegrees(direction);

    // Adjust the direction to be within 0-360 degrees
    if (direction < 0) {
        direction += 360;
    }

    return direction;
}

// Helper function to convert degrees to radians
const toRadians = (degrees) => {
    return degrees * (Math.PI / 180);
}

// Helper function to convert radians to degrees
const toDegrees = (radians) => {
    return radians * (180 / Math.PI);
}