class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :user_id, null: false
      t.integer :snack_id, null: false
      t.integer :rating 
      t.timestamps
    end
  end
end
