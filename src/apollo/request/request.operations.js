import { gql } from '@apollo/client';

export const CREATE_PRODUCT_REQUEST = gql`
mutation CreateProductRequestMutation($createProductRequestProductId: ID!, $createProductRequestInquiryText: String) {
  createProductRequest(productId: $createProductRequestProductId, inquiryText: $createProductRequestInquiryText){
    ... on Request {
      id
      createdAt
      requestStatus
      requestedBy {
        id
        firstName
        role
      }
      requestedProduct {
        id
      }
      productOwner {
        firstName
        lastName
        role
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
    ... on CreateProductRequestError {
        type
      message
    }
  }
}
`;

export const GET_REQUESTS_BY_USERID = gql`
query Query($requestsBySellerId: ID, $requestsByBuyerId: ID) {
  requests(bySellerId: $requestsBySellerId, byBuyerId: $requestsByBuyerId) {
    ... on Requests {
      requests {
        id
        inquiryText
        createdAt
        requestedBy {
          id
          firstName
          email
          phoneNumber
          role
          company{
            companyName
          }
        }
        requestedProduct {
          productName
          productQuantity
          productMeasurementUnit
          productPrice
        }
        requestStatus
        productOwner {
          id
          firstName
          lastName
          company {
            companyName
          }
        }
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
export const UPDATE_REQUEST = gql`
mutation UpdateProductRequestMutation($updateProductRequestRequestId: ID!, $updateProductRequestRequestStatus: String!) {
  updateProductRequest(requestId: $updateProductRequestRequestId, requestStatus: $updateProductRequestRequestStatus){
    ... on UpdateRequestSuccess {
      message
    }
    ... on GetRequestError {
      message
      type
    }
    ... on NotAuthenticatedUserError {
      message
      type
    }
    ... on UpdateProductRequestError {
      message
      type
    }
  }
}
 
 
 `;
