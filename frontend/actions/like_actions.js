export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const DELETE_LIKE = "DELETE_LIKE";
export const CREATE_LIKE = "CREATE_LIKE";
import * as LikeApiUtil from "../util/like_api_util";

export const receiveAllLikes = likes => {
  return {
    type: RECEIVE_ALL_LIKES,
    likes
  };
};

export const receiveLike = like => {
  console.log("What did I get? ", like);
  return {
    type: RECEIVE_LIKE,
    like
  };
};

export const deleteLike = id => {
  return {
    type: DELETE_LIKE,
    id: id
  };
};

export const requestAllLikes = () => dispatch =>
  LikeApiUtil.fetchAllLikes().then(likes => dispatch(receiveAllLikes(likes)));

// export const requestLike = (id) => dispatch =>
//     LikeAPIUtil.fetchListin(listing_id).then(listing =>
//         dispatch(receiveListing(listing))
//     );

export const createLike = data => dispatch => {
  LikeApiUtil.createLike(data).then((id) => dispatch(receiveLike(id)));
};

export const removeLike = id => dispatch =>
  LikeApiUtil.deleteLike(id).then(() => dispatch(deleteLike(id)));
