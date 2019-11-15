import { gql } from 'apollo-boost';

const updateRecipe = gql`mutation UpdateRecipe(
  $id: ID!
  $directions: String!
  $title: String!
  $ingredients: String!
  $published: Boolean
) {
  updateRecipe(
    where: {id: $id}
    data: {
      directions: $directions
      title: $title
      ingredients: $ingredients
      published: $published
    }
  ) {
    id
  }
}
`;

export default updateRecipe;