export const createLike = body => {
  console.log("Like_Util, body: ", body);
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like: { listing_id: body.listing_id, user_id: body.user_id } }
    //contentType: false,
    //processData: false
  });
};

// export const fetchListing =id => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/listings/" + id
//     });
// };

export const fetchAllLikes = () => {
  return $.ajax({
    method: "GET",
    url: "/api/likes"
  });
};

export const deleteLike = id => {
  return $.ajax({
    method: "DELETE",
    url: "/api/likes/" + id
  });
};
