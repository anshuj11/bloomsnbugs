export const createListing = body => {
  return $.ajax({
    method: "POST",
    url: "/api/listings",
    data: {
      listing: { title: body.title, description: body.description, price: body.price }
    }
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
