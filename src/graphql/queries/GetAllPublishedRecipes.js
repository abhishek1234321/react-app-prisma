import { gql } from 'apollo-boost';

const query = gql`query GetAllPublishedRecipes{
  recipe(where: {id: $recipeId}) {
    id
    createAt
    title
    directions
    ingredients
    published
  }
}
`;

export default query;