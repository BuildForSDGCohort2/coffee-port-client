import jwt_decode from 'jwt-decode';
import { currentUserVar, commentsVar } from './apollo/cache';

export const logout = () => {
  window.localStorage.clear();
  currentUserVar({
    ...currentUserVar(), id: '', loggedIn: false, firstName: '', lastName: '', email: '', phoneNumber: ''
  });
};
export const storeUser = (token) => {

  console.log(token);
  const decoded = jwt_decode(token);

  const now = new Date();
  const expiryDate = now.getTime() + 10000000;
  window.localStorage.setItem('token', token);
  const expire = window.localStorage.getItem('expire');
  if (!expire) {
    window.localStorage.setItem('expire', expiryDate);
    console.log('new');
  }
  // if (now.getTime() > expire) {
  //   logout();
  // }
  console.log(decoded, expiryDate);
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

export const storeComments = (comments) => {
  commentsVar({
    ...commentsVar(),
    comments,
  });
  console.log(commentsVar());
};
