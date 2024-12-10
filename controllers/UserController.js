const KafkaConfig = require('../config/config');


const sendMessageToKafka = async (req, res) => {
    try {
        const { message } = req.body;
        const kafkaConfig = new KafkaConfig();
        const messages = [
            { value: message }
        ];
        await kafkaConfig.produce("location", messages);

        res.status(200).json({
            status: "200",
            message: "Message successfully sent",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "500",
            message: "Error sending message"
        });
    }
}

module.exports = {
    sendMessageToKafka
}