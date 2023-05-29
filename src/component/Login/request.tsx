import { gql } from "@apollo/client";

export const createLoginToken = gql`
mutation createLoginToken($id: Int!, $password: String!) {
  createToken(id: $id, password: $password)
}
`;
