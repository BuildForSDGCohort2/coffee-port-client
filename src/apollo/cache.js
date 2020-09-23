import { InMemoryCache, makeVar } from '@apollo/client';

export const filtersVar = makeVar({
  productName: '',
  uniqueAttributes: {
    geographicalDesignation: '', grade: '', group: '', uniqueName: '',
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
