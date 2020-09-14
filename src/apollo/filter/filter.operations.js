import { gql } from '@apollo/client';

export const GET_ALL_FILTERS = gql`
  query GetAllFilters{
      filters @client {
          type
          uniqueAttributes{
            GeographicalDesignation
            Grade
            Group
            Type
          }
      }
  }


`