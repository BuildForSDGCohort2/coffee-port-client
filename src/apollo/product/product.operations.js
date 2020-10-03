import { gql } from '@apollo/client';

export const POST_PRODUCT = gql`
mutation PostProductMutation($postProductProduct: ProductInput!) {
  postProduct(product: $postProductProduct) {
    ... on Product {
    id
    productName
    productMeasurementUnit
    productQuantity
    productPrice
    uniqueAttributes {
      geographicalDesignation
      grade
      group
      flowerType
    }
    
  }
  ... on ProductNotAddedError {
    message
    type
  }
  ... on ProductInputError {
    message
    type
    productErrors {
      productName
      productMeasurementUnit
      productQuantity
      productPrice
      geographicalDesignation
      grade
      group
      uniqueName
    }
    valid
  }
  ... on NotAuthenticatedUserError {
    message
    type
  }
  }
}`;

export const GET_ALL_PRODUCTS = gql`
query getAllProducts {
  products {
    ... on Products {
      products {
        id
        productName
        productMeasurementUnit
        productQuantity
        productPrice
        uniqueAttributes{
          geographicalDesignation
          grade
          group
          flowerType
        }

        user{
          role
          email
          firstName
          lastName
          phoneNumber
          createdAt
          company{
            websiteUrl
            companyName
            companyEmail
            
            address{
              country
              city
              postalCode
            }
          }
          
        }
      }
    }
    ... on GetProductsError {
      message
      type
    }
  }
}

`;

export const GET_PRODUCT = gql`
query Query($productId: ID!) {
  product(id: $productId) {
    ... on Product {
      id
      productName
      productPrice
      productMeasurementUnit
      productQuantity
      uniqueAttributes {
        grade
        group
        uniqueName
        geographicalDesignation
        flowerType
      }
      user {
        firstName
        lastName
        email
        role
        phoneNumber
        company {
          websiteUrl
          companyName
          companyEmail
          address {
            country
            city
            postalCode
          }
        }
        
      }
    
    }
    ... on Product {
      id 
      reviews {
        id
        reviewerEmail
        comment
        stars
      }
    }
    ... on GetProductError {
      message
      type
    }
  }
}
`;

