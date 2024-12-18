import { gql, useQuery } from "@apollo/client";

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY($take: Int, $skip: Int = 0) {
    products(take: $take, skip: $skip) {
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
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log("data", data);
  return <div>Products Page</div>;
}
