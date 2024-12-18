import { gql, useQuery } from "@apollo/client";
import { ProductsQueryResponse } from "../types/types.ts";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    products {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export function ProductsPage() {
  const { data, error, loading } =
    useQuery<ProductsQueryResponse>(ALL_PRODUCTS_QUERY);

  console.log("data", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Sth has gone wrong {error.message}</p>;

  return <div>Products Page</div>;
}
