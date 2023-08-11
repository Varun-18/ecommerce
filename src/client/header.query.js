import { gql } from "@apollo/client";

const headerQuery = gql`
  query {
    cms(id: "75s3YjLPO1mTCPnCP9gjs5") {
      navbarCollection(limit: 20) {
        items {
          category
          subCategoryCollection(limit: 20) {
            items {
              title
              subCategoryItemsCollection(limit: 20) {
                items {
                  name
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default headerQuery;
