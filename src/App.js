import { ApolloProvider } from "@apollo/client";
import client from "./client";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
