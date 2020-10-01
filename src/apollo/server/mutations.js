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

// export const POST_REVIEW = gql`
// mutation Mutation($postProductReviewProductId: ID!, $postProductReviewReview: ReviewInput!) {
//   postProductReview(productId: $postProductReviewProductId, review: $postProductReviewReview) {
//     ... on Review {
//       id
//       reviewerEmail
//       comment
//       stars
//       createdAt
//     }
//     ... on ReviewNotAddedError {
//       message
//       type
//     }
//     ... on NotAuthenticatedUserError {
//       message
//       type
//     }
//     ... on ReviewInputErrors {
//       message
//       type
//       valid
//       reviewErrors {
//         comment
//       }
//     }
//     ... on GetProductError {
//       message
//       type
//     }
//   }
// }`;

export const DELETE_USER = gql`
mutation deleteUser{
  deleteUser(id:"5f73a5b93215630017709b70"){
    ... on Error{
      message
      type
    }
    ... on DeletedUserMessage{
      message
      userId
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
