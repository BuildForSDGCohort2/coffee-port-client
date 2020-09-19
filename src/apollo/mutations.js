import { gql } from '@apollo/client';

export const LOGIN = gql` 
mutation login($email: String!, $password: String!){
    signIn(email: $email, password: $password){
      ... on Token {
        token
      }
      ... on UserInputError {
        message
        type
        userErrors{
          email
          password
        }
      }
      ... on SignInError {
        message
        type
      }
     
    }
  }
`;
export const SIGN_UP = gql`
  mutation createUser($email:String!,$firstName:String!,$lastName:String!,$password:String!,$confirmPassword:String!,$phoneNumber:String!,$websiteUrl: String!,$companyName: String!,$companyEmail: String!,country: String!,$city: String!,$street: String!,$postalCode:String!){
    createUser(userInput: {
      email: $email"
   
      firstName:$firstName
      lastName:$lastName
      password:$password
      confirmPassword: $confirmPassword
      role: "USER"
      phoneNumber: $phoneNumber
    
      company:{
        websiteUrl:$websiteUrl
        companyName: $companyName
        companyEmail: $companyEmail
        address: {
          country: $country
          city: $city
          street: $street
          postalCode: $postalCode
        }
        
      }
    }){
      ... on Token {
        token
      }
      ... on UserInputError {
        message
        type
        userErrors {
          email
          password
          confirmPassword
          firstName
          lastName 
          phoneNumber 
          companyEmail 
          companyName 
           city 
          country 
          street 
          postalCode
          
        }
        valid
      }
      ... on SignupError{
        message
        type
      }
    }
  }
  `;
