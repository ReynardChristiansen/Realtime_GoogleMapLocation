const express = require('express');
const { sendMessageToKafka } = require('../controllers/UserController');
const KafkaConfig = require('../config/config');

const router = express.Router();

let latestLocation = null;

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume('location', (value) => {
    console.log(value);
    latestLocation = value;
});

router.get('/latest-location', (req, res) => {
    if (latestLocation) {
        res.status(200).json({ location: latestLocation });
    } else {
        res.status(404).json({ message: 'No location data available yet.' });
    }
});

router.post('/', sendMessageToKafka);

module.exports = router;
