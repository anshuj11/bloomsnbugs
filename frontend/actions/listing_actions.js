export const RECEIVE_LISTING = "RECEIVE_LISTING";
export const RECEIVE_ALL_LISTINGS = "RECEIVE_ALL_LISTINGS";
export const DELETE_LISTING = "DELETE_LISTING";
import * as ListingAPIUtil from "../util/listing_api_util";

export const receiveAllListings = listings => {
  console.log("listings: ", listings);
  return {
    type: RECEIVE_ALL_LISTINGS,
    listings
  };
};

export const receiveListing = listing => {
  return {
    type: RECEIVE_LISTING,
    listing
  };
};

export const deleteListing = id => {
  return {
    type: DELETE_LISTING,
    id: id
  };
};

export const requestAllListings = () => dispatch =>
  ListingAPIUtil.fetchAllListings().then(listings =>
    dispatch(receiveAllListings(listings))
  );

export const requestListing = id => dispatch =>
  ListingAPIUtil.fetchListing(id).then(listing =>
    dispatch(receiveListing(listing))
  );

export const createListing = listingFormData => dispatch => {
  console.log("ListingFormData: ", listingFormData);
  ListingAPIUtil.createListing(listingFormData).then(listing =>
    dispatch(receiveListing(listing))
  );
};

export const removeListing = id => dispatch =>
  ListingAPIUtil.deleteListing(id).then(() => dispatch(deleteListing(id)));
