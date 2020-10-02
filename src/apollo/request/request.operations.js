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

export const GET_REQUESTS_BY_USERID = gql`
query getAllRequests ($byBuyerId:ID,$bySellerId:ID){
  requests(byBuyerId:$byBuyerId,bySellerId:$bySellerId) {
    ... on Requests {
      requests {
        id
        createdAt
        requestedBy {
          id
          firstName
          email
          phoneNumber
          role
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
