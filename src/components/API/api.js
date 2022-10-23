import axios from 'axios';

const API_KEY = '29835718-26922d24f630fa7bc28f878c3';
const URL = 'https://pixabay.com/api/';

export const searchImage = async (query, page = 1) => {
  const url = `${URL}`;
  const params = {
    key: API_KEY,
    q: query,
    page,
    per_page: 12,
  };
  return await axios.get(url, { params }).then(response => {
    return response.data.hits;
  });
};
