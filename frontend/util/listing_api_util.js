export const createListing = body => {
  //("Listing_Util, body: ", body)
  return $.ajax({
    method: "POST",
    url: "/api/listings",
    data: body,
    contentType: false,
    processData: false
  });
};

export const fetchListing = id => {
  return $.ajax({
    method: "GET",
    url: "/api/listings/" + id
  });
};

export const fetchAllListings = () => {
  return $.ajax({
    method: "GET",
    url: "/api/listings"
  });
};

export const deleteListing = id => {
  return $.ajax({
    method: "DELETE",
    url: "/api/listings/" + id
  });
};
