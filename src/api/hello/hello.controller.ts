import Producer from '../../producer';
import configs from '../../configs';

const getHello = async (_req, res) => {
  const body = { message: 'hello' }
  await Producer.getInstance().send(configs.topic, body);

  res.send(body);
}

export { getHello };