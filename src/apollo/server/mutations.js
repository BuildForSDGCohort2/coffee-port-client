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
  mutation createUser($email:String!,$firstName:String!,$lastName:String!,$password:String!,$confirmPassword:String!,$role:String!,$phoneNumber:String!,$websiteUrl: String!,$companyName: String!,$companyEmail: String!,$country: String!,$city: String!,$postalCode:String!){
    createUser(userInput: {
      email: $email
   
      firstName:$firstName
      lastName:$lastName
      password:$password
      confirmPassword: $confirmPassword
      role: $role
      phoneNumber: $phoneNumber   
      company:{
        websiteUrl:$websiteUrl
        companyName: $companyName
        companyEmail: $companyEmail
        address: {
          country: $country
          city: $city
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
          websiteUrl
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
export const VERIFY = gql`
mutation verifyUser($token: String!){
  verifyUser(token: $token){
    ... on VerifiedMessage{
      message
      token
    }
    ... on TokenError{
      message
      type
    }
    ... on VerifiedUserError{
      message
      type
    }
  }
}
`;
export const POST_REVIEW = gql`
mutation postreview($productId: ID!,$comment: String!,$stars: Float!) {
  postProductReview(productId: $productId
  review: {
    comment:$comment
    stars: $stars
  }){
    ... on Review {
      reviewerEmail
      comment
      stars
      createdAt
      id
    }
    
    ... on ReviewInputErrors {
      message
      type
      reviewErrors {
        comment
      }
      
    }
    
    ... on NotAuthenticatedUserError {
      message
      type
    }
    ... on ReviewNotAddedError {
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

export const RESEND_CONFIRMATION = gql`
mutation{
  resendConfirmation{
    ... on ResendConfirmation{
      message
    }
    ... on ResendConfirmationError{
      message
    }
    
    ... on VerifiedUserError{
      message
    }
    
  }
  
}
`;
export const DELETE_REVIEW = gql`
mutation deleteReview($productId: ID!, $reviewId: ID!) {
  deleteProductReview (productId: $productId,reviewId: $reviewId ) {
    ... on DeleteProductReview {
      message
    }
    ... on GetProductError{
      message
      type
    }
    ... on ReviewOwnerError {
      message
      type
    }
    ... on ReviewDeletionError {
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
export const UPDATE_USER = gql`
mutation UpdatedUserMutation($updateUserId: ID!,$email:String!,$firstName:String!,$lastName:String!,$password:String!,$confirmPassword:String!,$role:String!,$phoneNumber:String!,$websiteUrl: String!,$companyName: String!,$companyEmail: String!,$country: String!,$city: String!,$postalCode:String!) {
  updateUser(id: $updateUserId, updateUserInput:{
    email: $email
 
    firstName:$firstName
    lastName:$lastName
    password:$password
    confirmPassword: $confirmPassword
    role: $role
    phoneNumber: $phoneNumber   
    company:{
      websiteUrl:$websiteUrl
      companyName: $companyName
      companyEmail: $companyEmail
      address: {
        country: $country
        city: $city
        postalCode: $postalCode
      }
      
    }
  }) {
    ... on UpdatedUser {
      token
    }
    ... on UserInputError {
      message
      valid
      type
      userErrors {
        email
        password
        firstName
        lastName
        confirmPassword
        role
        phoneNumber
        websiteUrl
        companyName
        companyEmail
        country
        city
        street
        postalCode
      }
    }
    ... on TokenError {
      message
      type
    }
    ... on UpdateUserError {
      message
      type
    }
    ... on NotAuthenticatedUserError {
      message
      type
    }
    ... on AuthorizationError {
      message
      type
    }
  }
}
`;
export const DELETE_USER = gql`
mutation DeletedUserMessageMutation($deleteUserId: ID!) {
  deleteUser(id: $deleteUserId) {
    ... on DeletedUserMessage {
      message
      userId
    }
    ... on DeleteUserError {
      message
      type
    }
    ... on NotAuthenticatedUserError {
      message
      type
    }
  }
}
`;
