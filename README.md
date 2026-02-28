```markdown
# node-kafka-producer

**A standard software project.**

**Installation:**

1.  Clone the repository: `git clone https://github.com/your-username/node-kafka-producer.git`
2.  Navigate to the project directory: `cd node-kafka-producer`
3.  Install dependencies: `npm install`
4.  Configure environment variables (see `config/config.js` for details).

**Usage:**

*   **Producer Configuration:**  The `config/config.js` file defines the Kafka producer configuration.  Key parameters include:
    *   `producer_name`: The name of your Kafka producer.
    *   `kafka_host`: Your Kafka broker address.
    *   `kafka_port`: Your Kafka broker port.
    *   `topic`: The Kafka topic to publish to.
    *   `message_format`:  (e.g., 'json', 'avro')
*   **Producer Code:**  The `src/producer.ts` file contains the core producer logic.  Key features include:
    *   `connect()`:  Establishes a connection to Kafka.
    *   `publish()`:  Sends messages to the specified topic.
    *   `close()`:  Properly closes the connection.
*   **TypeScript Configuration:**  The `tsconfig.json` file defines the TypeScript compiler settings.
*   **Build Configuration:** The `tsconfig.json` file defines the TypeScript compiler settings.
*   **Development Environment:**  The `yarn.lock` file ensures consistent code builds.

**Files:**

*   `src/producer.ts`:  Core producer logic.
*   `config/config.js`: Kafka producer configuration.
*   `src/tsconfig.json`: TypeScript compiler settings.
*   `src/tsconfig.json`: TypeScript compiler settings.
*   `package.json`: Project metadata and dependencies.
*   `yarn.lock`:  Versioned dependencies.
```