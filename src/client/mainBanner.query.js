import { gql } from "@apollo/client";

const mainBannerQuery = gql`
  query {
    cms(id: "75s3YjLPO1mTCPnCP9gjs5") {
      mainBannerCollection {
        items {
          alt
          image {
            url
          }
        }
      }
    }
  }
`;

export default mainBannerQuery;
