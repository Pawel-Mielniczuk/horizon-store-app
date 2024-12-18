import { ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const httpLink = createUploadLink({
  uri: "http://localhost:3000/api/graphql",
  credentials: "include",
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `GraphQL Error: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.error(`Network Error: ${networkError}`);
  }
});

export const apolloClient = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          //TODO
        },
      },
    },
  }),
  headers: {
    "Content-Type": "application/json",
    "x-apollo-operation-name": "CREATE_PRODUCT_MUTATION",
    "apollo-require-preflight": "true",
  },
  credentials: "include",
});
