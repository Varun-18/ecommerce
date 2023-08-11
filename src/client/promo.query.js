import { gql } from "@apollo/client";

const promoQuery = gql`
  query {
    cms(id: "75s3YjLPO1mTCPnCP9gjs5") {
      promoCollection {
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

export default promoQuery;
