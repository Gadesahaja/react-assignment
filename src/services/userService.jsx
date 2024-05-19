

import axios from 'axios';

const USER_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const response = await axios.get(USER_API_URL);
  return response.data;
};
