import { currentUserVar } from '../../apollo/cache';

export const logout = () => {
  window.localStorage.clear();
  currentUserVar({ ...currentUserVar(), token: null });
};
export const getUser = () => {
  const token = window.localStorage.getItem('token');
  currentUserVar({ ...currentUserVar(), token });
  return token;
};
