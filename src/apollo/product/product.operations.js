import { gql } from '@apollo/client';

const POST_PRODUCT = gql`
    mutation postProduct ($productName: String! , $geographicalDesignation:String, $grade:String, $group:String,$websiteUrl:String!,$companyName:String!,$companyEmail:String!,$country:String!,$city:String!,$street:String!,$postalCode:!String){
        postProduct (productName:$productName,geographicalDesignation:$geographicalDesignation,grade:$grade,group:$group,websiteUrl:$websiteUrl,companyName:$companyName,companyEmail:$companyEmail,country:$country,city:$city,street:$street,postalCode:$postalCode)
    }
`;

const GET_ALL_PRODUCTS = gql`
query getAllProducts {
    products {
     id
     user{
       email
       role
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
     uniqueAttributes{
       geographicalDesignation
       grade
       group
       uniqueName
     }
   }
   }

`;