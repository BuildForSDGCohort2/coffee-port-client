import { gql } from '@apollo/client';

const LOGIN = gql` 
mutation login($email: String!, $password: String!){
    signIn(email: $email, password: $password){
       token
    }
  }`;

export default LOGIN;
