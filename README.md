# node-kafka-producer

Express API that publishes messages to Kafka using `kafkajs`.

## Uso

1. `yarn install`
2. Configure as variáveis de ambiente (ou um arquivo `envs/.env-<NODE_ENV>`):
   - `KAFKA_BROKERS`: brokers separados por vírgula (padrão `kafka1:9092,kafka2:9092`)
   - `KAFKA_CLIENT_ID`: client id (padrão `my-app`)
   - `KAFKA_TOPIC`: tópico de destino (padrão `hello`)
   - `PORT`: porta HTTP (padrão `9000`)
3. Suba o servidor com `npx ts-node src/index.ts`.

`GET /` publica `{"message":"hello"}` (JSON) no tópico configurado.

## Estrutura

- `src/producer/index.ts`: singleton do producer (`connect()` lazy, `send()`, `disconnect()`).
- `src/configs/index.ts`: configuração do Kafka e do tópico.
- `src/api/`: rotas Express.
- `src/server.ts` e `src/index.ts`: bootstrap.
