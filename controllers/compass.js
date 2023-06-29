const { calculateQiblahDirection } = require("../helpers/functions");

exports.getQiblahDirection = (req, res, next) => {
    try {
        const { lat: userLat, lon: userLon } = req.params;
        if (isNaN(userLat) || isNaN(userLon)) {
            throw new Error("latitude or longitude are not valid");
        }
        const direction = calculateQiblahDirection(userLat, userLon);
        res.status(200).json({
            lat: Number(userLat),
            lon: Number(userLon),
            direction
        });
    } catch (ex) {
        console.log(ex);
        res.status(500).json({ msg: ex.message });
    }
}