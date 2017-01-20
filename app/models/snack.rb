class Snack < ActiveRecord::Base
  validates :name, presence: true
  has_many :ratings, dependent: :destroy
  belongs_to :user
end
