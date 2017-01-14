class Api::SnacksController < ApplicationController
  def create
    @snack = Snack.new(snack_params)

    if @snack.save
      render "api/snacks/show"
    else
      render json: @snack.errors.full_messages, status: 422
    end
  end

  def show
    @snack = Snack.find(params[:id])
  end

  def index
    @snacks = current_user.snacks
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :picture_url, :description, :user_id)
  end

end
