import { gql } from '@apollo/client';
 
export const POST_PRODUCT = gql`
mutation postProduct($productName: String! ,$productPrice: Float! ,$productQuantity: Int! ,$productMeasurementUnit:String!, $geographicalDesignation:String, $grade:String, $group:String , $uniqueName:String, $websiteUrl:String!,$companyName:String!,$companyEmail:String!,$country:String!,$city:String!,$street:String!,$postalCode:String!) {
  postProduct(
    product: {
      productName:$productName
      productPrice:$productPrice
      productQuantity:$productQuantity
      productMeasurementUnit:$productMeasurementUnit
      uniqueAttributes: {
        geographicalDesignation: $geographicalDesignation
        grade: $grade
        group: $group
        uniqueName: $uniqueName
      }
    }
    company: {
      websiteUrl: $websiteUrl
      companyName: $companyName
      companyEmail: $companyEmail
      address: {
        country: $country
        city: $city
        street: $street
        postalCode: $postalCode
      }
    }
  ) {
    ... on ProductNotAddedError {
      message
      type
    }
    ... on Product {
      productName
      productPrice
      productQuantity
      productMeasurementUnit
      user {
        email
        role
        firstName
        lastName
        phoneNumber
        createdAt
        company {
          websiteUrl
          address {
            city
            country
            postalCode
          }
        }
      }

      uniqueAttributes {
        grade
        group
      }
    }
    ... on Error {
      message
    }
  }
}`;

export const GET_ALL_PRODUCTS = gql`
query getAllProducts {
  products {
    ... on Products {
      products {
        uniqueAttributes{
          geographicalDesignation
          grade
          group
        }
        id
        productName
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
              street
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
