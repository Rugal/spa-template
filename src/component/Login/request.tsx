import { gql } from "@apollo/client";
// import { graphql } from "../../generated/graphql";

export const createLoginToken = gql`
mutation createLoginToken($id: Int!, $password: String!) {
  createToken(id: $id, password: $password)
}
`;
