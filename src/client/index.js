import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
    cache: new InMemoryCache(),
    headers: {
        Authorization : "Bearer 2ACufyOovpBF8_G2f-1U9PM6viz16PEdilh-TF3ad_4"
    }
});

export default client;
