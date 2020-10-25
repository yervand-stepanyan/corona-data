const coronaURL = `${process.env.REACT_APP_ROOT_API}${process.env.REACT_APP_PARAMS}${process.env.REACT_APP_RAPIDAPI_KEY}`;
const countriesURL = process.env.REACT_APP_COUNTRIES_API;

async function request({ url, method, body }) {
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

  const response = await fetch(url, fetchData);

  return response.json();
}

const API = {
  getCountriesData: () => request({ url: countriesURL, method: 'GET' }),
  getCoronaData: () => request({ url: coronaURL, method: 'GET' }),
};

export default API;
