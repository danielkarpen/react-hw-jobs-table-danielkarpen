const api = {
  async index(
    endpoint = "http://my-json-server.typicode.com/claim-academy-js/workers/workers"
  ) {
    const res = await fetch(endpoint);

    return res.json();
  },
};

export default api;
