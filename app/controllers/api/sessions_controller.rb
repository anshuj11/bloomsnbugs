class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json:["Invalid username or password"]
    end
  end

  def destroy
    sign_out
    #redirect to login page
    render json:{}
  end
end
