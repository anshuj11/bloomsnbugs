class Api::LikesController < ApplicationController
  def index
   @likes = Like.all
  end
  def create  
    @like = Like.new(like_params)
    if @like.save
       render "api/likes/show"
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def delete
    @like = Like.find_by(user_id: params[:user_id], listing_id: params[:listing_id])
    @like.delete  
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :listing_id)
  end
end
