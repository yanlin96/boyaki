/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
      type
      id
      content
      owner
      timestamp
    }
  }
`;
export const onCreateFollowRelationship = /* GraphQL */ `
  subscription OnCreateFollowRelationship($ofollowerId: String) {
    onCreateFollowRelationship(ofollowerId: $ofollowerId) {
      followeeId
      followerId
      timestamp
      ofollowerId
    }
  }
`;
export const onDeleteFollowRelationship = /* GraphQL */ `
  subscription OnDeleteFollowRelationship($ofollowerId: String) {
    onDeleteFollowRelationship(ofollowerId: $ofollowerId) {
      followeeId
      followerId
      timestamp
      ofollowerId
    }
  }
`;
