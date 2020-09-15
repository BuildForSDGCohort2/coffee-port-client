import { InMemoryCache, makeVar } from '@apollo/client';

export const filtersVar = makeVar({
  type: '',
  uniqueAttributes: {
    GeographicalDesignation: '', Grade: '', Group: '', Type: '',
  },
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
      },
    },
  },
});
