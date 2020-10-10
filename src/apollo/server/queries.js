import { gql } from '@apollo/client';

export const GET_ALL_SUPPLIERS = gql`
query getAllSuppliers {
    users(role: "SUPPLIER"){
      ... on Users {
      users {
        id
        firstName
        role
        lastName
        email
        phoneNumber
        totalSale
        productsType
        products {
          productName
        }
        company {
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
      ... on UsersError {
        message
        type
      }
      ... on Error {
        message
        type
      }
    }
  }
`;
export const GET_USER = gql`
query getOneUser($supplierId: ID!) {
    user(id: $supplierId){
      ... on User {
        firstName
        lastName
        email
        phoneNumber
        role
        createdAt
        isVerified
        totalSale
        productsType
        products {
          productName
          productPrice
        }
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
        id
      }
      ... on UserDoesNotExist {
        type
        message
      }
      ... on Error {
        type
        message
      }
    }
  }`;
export const GET_POSTED_PRODUCT = gql`
  query getPostedProduct($supplierId: ID!){
    user(id: $supplierId){
      ... on User{
        id
        firstName
        products{
          id 
          productName
          productPrice
        }
      }
      ... on UserDoesNotExist{
        message
      }
    }
  }
  `;
export const GET_REVIEWS = gql`

query Query($productId: ID!) {
  product(id: $productId) {
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
