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

  async connect(data: any) {
    return await this.producer.connect();
  }

  async send(topic: string, data: any) {
    await this.producer.send({
      topic,
      messages: data,
    })
  }

  async disconnect(data: any) {
    return await this.producer.disconnect();
  }
}
