import { gql } from "@apollo/client";

export const findAllPostBrief = gql`
query findAllPostBrief {
  findAllPost {
    id
    title
    rate
    size
    tags {
      tag {
        id
        name
      }
    }
  }
}
`;
