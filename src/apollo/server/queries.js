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
        company {
          websiteUrl
          companyName
          companyEmail
          products
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