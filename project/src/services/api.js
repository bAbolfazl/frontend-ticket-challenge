/* eslint-disable no-unused-vars */
const API_BASE_URL = "https://ticket-challange.herokuapp.com";

const generateMockResponse = (size) => {
  const mockResponse = [];
  for (let i = 1; i <= size; i++) {
    mockResponse.push({
      id: i,
      x: 0,
      y: i % 2, // Alternates between 0 and 1
      isSelected: i % 2 === 1, // True for odd, false for even
    });
  }
  return mockResponse;
};

export const fetchMaps = () => {
  // TODO
  //   const { data } = axios.get(`${API_BASE_URL}/map`);
  //   return data

  // TODO remove mock
  // for large number of responses (100k), we have multiple choices:
  //  1- Pagination of API to get response in partitions on each server request. Therefore we render different components to show each part of stadium.
  //    So our UI should give the user some options at first so he can select the desired part of stadium. Then after his selection we render related 
  //    component which inside it we request to server to get part of 100K responses and render the list.

  //  2- Paginate server response at FrontEnd (if we don't want to paginate this endpoint at server): After partitioning response, then
  //    like first solution we can just use each part in related component. Then we are render each component after user selection.

  //  3- Use virtualized list to give user better UX (if we can don't want to paginate at all): use some libraries like react-window

  const mockResponse = generateMockResponse(1000);
  return mockResponse;
};

export const fetchMapDetails = (id) => {
  // TODO
  //   axios.get(`${API_BASE_URL}/map/${id}`);
};

export const purchaseTicket = (id) => {
  // TODO
  //   axios.post(`${API_BASE_URL}/map/${id}/ticket`);
};
