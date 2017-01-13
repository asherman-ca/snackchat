class Api::SnacksController < ApplicationController
  def create
    @snack = Snack.new(snack_params)

    if @snack.save
      render "api/snacks/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :image_url, :description)
  end
end
