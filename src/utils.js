import jwt_decode from 'jwt-decode';
import { currentUserVar, commentsVar } from './apollo/cache';

export const storeUser = (token) => {

  console.log(token);
  const decoded = jwt_decode(token);
  // const now = new Date()
  // const item = {
	// 	value: token,
	// 	 expiry: now.getTime() + 34567,
	// }
  window.localStorage.setItem('token', token);
  console.log(decoded);
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
export const logout = () => {
  window.localStorage.clear();
  currentUserVar({
    ...currentUserVar(), id: '', loggedIn: false, firstName: '', lastName: '', email: '', phoneNumber: ''
  });
};
export const storeComments = (comments) => {
  commentsVar({
    ...commentsVar(),
    comments,
  });
   console.log(commentsVar());
};
