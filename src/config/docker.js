const docker = () => {
  return {
    env: 'docker',
    db: process.env.DOCKER_MONGO_URL,
    port: process.env.PORT || 5000
  };
};

export default docker;
