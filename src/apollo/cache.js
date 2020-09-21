import { InMemoryCache, makeVar } from '@apollo/client';

export const filtersVar = makeVar({
  productName: '',
  uniqueAttributes:{
    geographicalDesignation: '', grade: '', group: '', uniqueName: '' },
});
export const currentuserVar = makeVar({
  token: '',
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
            return currentuserVar();
          },
        },
      },
    },
  },
});
