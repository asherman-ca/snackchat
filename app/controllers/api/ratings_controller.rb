class Api::RatingsController < ApplicationController
  def create
    @rating = Rating.new(rating_params)
    @rating.user_id = current_user.id

    if @rating.save
      render "api/ratings/show"
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def index
    @ratings = Rating.all
  end

  private

  def rating_params
    params.require(:rating).permit(:rating, :snack_id)
  end

end
