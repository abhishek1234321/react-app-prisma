import { gql } from 'apollo-boost';

const AddNewRecipe = gql`mutation AddRecipe(
  $directions: String!
  $title: String!
  $ingredients: String!
  $published: Boolean
) {
  createRecipe(
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

export default AddNewRecipe;