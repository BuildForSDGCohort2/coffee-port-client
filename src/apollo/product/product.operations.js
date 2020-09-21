import { gql } from '@apollo/client';

// export const POST_PRODUCT = gql`
//     mutation postProduct ($productName: String! , $geographicalDesignation:String, $grade:String, $group:String,$websiteUrl:String!,$companyName:String!,$companyEmail:String!,$country:String!,$city:String!,$street:String!,$postalCode:!String){
//         postProduct (productName:$productName,geographicalDesignation:$geographicalDesignation,grade:$grade,group:$group,websiteUrl:$websiteUrl,companyName:$companyName,companyEmail:$companyEmail,country:$country,city:$city,street:$street,postalCode:$postalCode)
//     }
// `;

export const GET_ALL_PRODUCTS = gql`
query getAllProducts {
  products {
    ... on Products {
      products {
        uniqueAttributes{
          geographicalDesignation
          grade
          group
        }
        id
        productName
        user{
          role
          email
          firstName
          lastName
          phoneNumber
          createdAt
          company{
            websiteUrl
            companyName
            companyEmail
            
            address{
              country
              city
              street
              postalCode
            }
          }
          
        }
      }
    }
    ... on GetProductsError {
      message
      type
    }
  }
}

`;


