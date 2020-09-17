export const logout = () => {
  window.localStorage.clear();
};
export const getUser = () => {
  const token = window.localStorage.getItem('token');
  return token;
};
