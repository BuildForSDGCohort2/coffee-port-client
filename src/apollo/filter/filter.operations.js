import { gql } from '@apollo/client';

export const GET_ALL_FILTERS = gql`
  query GetAllFilters{
      filters @client {
          productName
          uniqueAttributes{
            geographicalDesignation
            grade
            group
            flowerType
            uniqueName
          }
      }
  }


`