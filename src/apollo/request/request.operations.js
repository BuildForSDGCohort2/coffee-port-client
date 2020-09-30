import { gql } from '@apollo/client';

export const CREATE_PRODUCT_REQUEST = gql`
mutation CreateProductRequestMutation($createProductRequestProductId: ID!) {
    createProductRequest(productId: $createProductRequestProductId) {
        ... on Request {
            id
            createdAt
            requestStatus
            requestedBy {
              id
              firstName
            }
            requestedProduct {
              id
              user {
                firstName
                email
              }
            }
          }
          ... on Error {
            type
            message
          }
      
          ... on GetProductError {
            message
            type
          }
        }
      }
`;

const GET_ALL_REQUESTS= gql`

query getAllRequests {
    requests {
      ... on Requests {
        requests {
          id
          createdAt
          requestedBy {
            firstName
            email
            phoneNumber
          }
          requestedProduct {
            productName
            productQuantity
          }
          requestStatus
          acceptedByOrDeclinedBy
        }
      }
      
      ... on NotAuthenticatedUserError {
        message
        type
      }
      
      ... on Error {
        type
        message
      }
    }
    
  }



`;
