import jwt_decode from 'jwt-decode';
import { currentUserVar } from './apollo/cache';

export const logout = () => {
  window.localStorage.clear();
  currentUserVar({
    ...currentUserVar(), id: '', loggedIn: false, firstName: '', lastName: '', email: '', phoneNumber: ''
  });
};
export const storeUser = (token) => {
  const checktoken = window.localStorage.getItem('token');
  const now = new Date();
  const expireDate = now.getTime() + 30 * 60000;
  if (!checktoken) {
    window.localStorage.setItem('token', token);
    window.localStorage.setItem('expire', expireDate);
  }

  const decoded = jwt_decode(token);

  currentUserVar({
    ...currentUserVar(),
    id: decoded.id,
    firstName: decoded.firstName,
    lastName: decoded.lastName,
    email: decoded.email,
    phoneNumber: decoded.phoneNumber,
    loggedIn: true,
    role: decoded.role,
    country: decoded.company.address.country,
    city: decoded.company.address.city,
  });
};
