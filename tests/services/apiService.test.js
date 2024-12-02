const { fetchUserData } = require('../../src/services/apiService');
const axios = require('axios');

jest.mock('axios');

test('fetches user data from API', async () => {
  const mockData = { id: 1, name: 'John Doe' };
  axios.get.mockResolvedValue({ data: mockData });

  const data = await fetchUserData(1);
  expect(data).toEqual(mockData);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
});
