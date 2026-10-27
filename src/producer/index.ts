import { Kafka, Producer } from 'kafkajs';
import configs from '../configs';

/**
 * Classe Singleton
 */
export default class ProducerKafka {
  private static instance: ProducerKafka;
  public static getInstance(): ProducerKafka {
    if (!ProducerKafka.instance) {
      ProducerKafka.instance = new ProducerKafka();
    }
    return ProducerKafka.instance;
  }

  private producer: Producer;

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    const kafka = new Kafka(configs.kafka)

    this.producer = kafka.producer()
  }

  private connecting?: Promise<void>;

  /** Connects once; concurrent and later callers share the same connection. */
  async connect() {
    if (!this.connecting) {
      this.connecting = this.producer.connect().catch((error) => {
        this.connecting = undefined;
        throw error;
      });
    }
    return this.connecting;
  }

  /** Publishes `data` serialized as JSON to `topic`, connecting first if needed. */
  async send(topic: string, data: unknown) {
    await this.connect();
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(data) }],
    });
  }

  async disconnect() {
    this.connecting = undefined;
    return await this.producer.disconnect();
  }
}
