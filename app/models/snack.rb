class Snack < ActiveRecord::Base
  validates :name, presence: true
  has_many :ratings, dependent: :destroy
  belongs_to :user

  def average_rating
    all_ratings = self.ratings
    return 5 if all_ratings.empty?
    all_ratings.inject(0) { |sum, r| sum + r.rating } / all_ratings.length
  end

end
