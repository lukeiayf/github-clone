import gql from 'graphql-tag'
export const GET_REPO_DETAILS = gql`
query getRepoDetails($queryString: String!) {
  search(query: $queryString, $login: String!, $first: Int!, $after: String) {
   user(login: $login) {
    id
    name
    login
    avatarUrl
    bio
    url
    repositories(first: $first, after: $after) {
      totalCount
      edges {
        cursor
        node {
          id
          name
          description
          updatedAt
          primaryLanguage {
            id
            name
          }
        }
      }
    }
  }
}
`