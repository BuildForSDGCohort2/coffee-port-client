export const notificationFilter = (data, role) => {
  if (role === 'BUYER') {
    return data.requests.requests.filter((request) => (request.requestStatus === 'ACCEPTED' || request.requestStatus === 'REJECTED'));
  }
  if (role === 'SUPPLIER') {
    return data.requests.requests.filter((request) => (request.requestStatus === 'REQUESTED'));
  }
};

export const getProperty = (role, id) => {
  const property = {};
  if (role === 'SUPPLIER') {
    property.requestsBySellerId = id;
  }
  if (role === 'BUYER') {
    property.requestsByBuyerId = id;
  }
  return property;
};
