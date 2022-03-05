# next-prisma

#### [Error Boundaries](https://medium.com/@deltazero/error-boundary-for-next-js-api-routes-dd6cc8f72962)

### To integrate

```graphql
query listUsers {
  usersQuery(first: 10) {
    pageInfo {
      ...PageInfoPartial
    }
    edges {
      ...UserEdgePartial
      node {
        ...UserPartial
        _count {
          ...UserCountPartial
        }
        imageMeta {
          ...MediaItemPartial
        }
        accounts(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          __typename
          edges {
            ...AccountEdgePartial
            node {
              ...AccountPartial
            }
          }
        }
        sessions(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          edges {
            ...SessionEdgePartial
            node {
              ...SessionPartial
            }
          }
        }
        profile {
          bio {
            ...BioPartial
          }
          coverPhoto {
            ...MediaItemPartial
          }
          ...ProfilePartial
        }
        entries(first: 10) {
          pageInfo {
            ...PageInfoPartial
          }
          edges {
            ...EntryEdgePartial
            node {
              _count {
                ...EntryCountPartial
              }
              ...EntryPartial
              featuredImage {
                ...MediaItemPartial
              }
              attachments {
                ...MediaItemPartial
              }
            }
          }
        }
      }
    }
  }
}
```
