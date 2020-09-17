import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query GetCurrentUser{
      currentUser @client {
          token    
  }
`;
export default GET_CURRENT_USER ;