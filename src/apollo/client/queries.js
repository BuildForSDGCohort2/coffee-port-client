import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query GetCurrentUser{
    currentuser @client {
          id
          firstName
          lastName
          email
          phoneNumber
          loggedIn
          role
          country
          city
      }
   }
`;

export const GET_COMMENTS = gql`
query GetComments{
  comments @client {
        comments
    }
 }
`;
export default GET_CURRENT_USER;
