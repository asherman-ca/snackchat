class Snack < ActiveRecord::Base
  validates :name, presence: true
  has_many :ratings
  belongs_to :user

end
