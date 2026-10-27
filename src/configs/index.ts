export default {
  kafka: {
    clientId: process.env.KAFKA_CLIENT_ID || 'my-app',
    brokers: (process.env.KAFKA_BROKERS || 'kafka1:9092,kafka2:9092').split(','),
  },
  topic: process.env.KAFKA_TOPIC || 'hello',
};
