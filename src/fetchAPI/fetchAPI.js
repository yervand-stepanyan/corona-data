async function request({ method, body }) {
  const fetchData = body
    ? {
        body: JSON.stringify(body) || '',
        headers: {
          'Content-Type': 'application/json',
        },
        method,
      }
    : {
        method,
      };

  const response = await fetch(
    `${process.env.REACT_APP_ROOT_API}${process.env.REACT_APP_PARAMS}${process.env.REACT_APP_RAPIDAPI_KEY}`,
    fetchData
  );

  return response.json();
}

const API = {
  get: () => request({ method: 'GET' }),
};

export default API;
