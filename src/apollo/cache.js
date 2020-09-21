import { InMemoryCache, makeVar } from '@apollo/client';

export const filtersVar = makeVar({
  type: '',
  uniqueAttributes: {
    GeographicalDesignation: '', Grade: '', Group: '', Type: ''
  },
});
export const currentUserVar = makeVar({
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  loggedIn: false,
});

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        filters: {
          read() {
            return filtersVar();
          },
        },
        currentuser: {
          read() {
            return currentUserVar();
          },
        },
      },
    },
  },
});
