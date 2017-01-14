class Rating < ActiveRecord::Base
  validates :rating, presence: true
  belongs_to :snack
  belongs_to :user 
end
