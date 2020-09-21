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
      }
   }
`;
export default GET_CURRENT_USER;
