class Api::ListingsController < ApplicationController
  def show 
   @listing = Listing.find(params[:id])
 end
  def index
   @listings = Listing.all
  end
  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      render "api/listings/show"
    else
      render json: @listing.errors.full_messages, status: 422
    end

  end
    
def listing_params
    params.require(:listing).permit(:title, :description, :price, :photo)
end

end
