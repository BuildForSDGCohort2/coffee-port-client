import jwt_decode from 'jwt-decode';
import { currentUserVar } from './apollo/cache';

export const storeUser = (token) => {
  const decoded = jwt_decode(token);
  window.localStorage.setItem('token', token);
  currentUserVar({
    ...currentUserVar(),
    id: decoded.id,
    firstName: decoded.firstName,
    lastName: decoded.lastName,
    email: decoded.email,
    phoneNumber: decoded.phoneNumber,
    loggedIn: true,
  });
};
export const logout = () => {
  window.localStorage.clear();
  currentUserVar({
    ...currentUserVar(), id: '', loggedIn: false, firstName: '', lastName: '', email: '', phoneNumber: ''
  });
};
