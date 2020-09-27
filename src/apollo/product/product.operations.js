import { gql } from '@apollo/client';
 

export const POST_PRODUCT2 = gql`
mutation postProduct($productName: String! ,$productPrice: Float! ,$productQuantity: Int! ,$productMeasurementUnit:String!, $geographicalDesignation:String, $grade:String, $group:String , $uniqueName:String, $websiteUrl:String!,$companyName:String!,$companyEmail:String!,$country:String!,$city:String!,$street:String!,$postalCode:String!) {
  postProduct(
    postProductProduct: {
      productName:$productName
      uniqueAttributes: {
        geographicalDesignation: $geographicalDesignation
        grade: $grade
        group: $group
        uniqueName: $uniqueName
      }
      productPrice:$productPrice
      productQuantity:$productQuantity
      productMeasurementUnit:$productMeasurementUnit
    }

  )  {... on Product {
    id
    productName
    productMeasurementUnit
    productQuantity
    uniqueAttributes {
      geographicalDesignation
      grade
      group
    }
    productPrice
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
        productName
        productMeasurementUnit
        productQuantity
        productPrice
        uniqueAttributes{
          geographicalDesignation
          grade
          group
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
    ... on GetProductError {
      message
      type
    }
  }
}

`;

