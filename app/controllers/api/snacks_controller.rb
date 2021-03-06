class Api::SnacksController < ApplicationController
  def create
    @snack = Snack.new(snack_params)
    @snack.user_id = current_user.id

    if @snack.picture_url.empty?
      @snack.picture_url = 'http://res.cloudinary.com/devwor0u0/image/upload/v1484177093/2opwuc_wcmw-hans-vivek_culpzm.jpg'
    end

    if @snack.description.empty?
      @snack.description = 'The French Laundry'
    end

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

    if params[:id]
      # @snacks = User.find(params[:id]).snacks
      @snacks = Snack.where(user_id: params[:id]).includes(:user)
    else
      @snacks = Snack.all.includes(:user)
    end

    # @snacks = current_user.snacks
    # @snacks = User.find(params[:id]).snacks
  end

  def destroy
    @snack = Snack.find(params[:id])
    @snack.destroy
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :picture_url, :description, :user_id)
  end

end
