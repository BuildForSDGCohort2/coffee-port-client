import { gql } from '@apollo/client';

const GET_CURRENT_USER = gql`
  query GetCurrentUser{
    currentuser @client {
          token    
      }
   }
`;
export default GET_CURRENT_USER;
