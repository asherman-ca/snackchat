class UpdateSnacks < ActiveRecord::Migration[5.0]
  def change
    change_column :snacks, :user_id, :integer, null: false
  end
end
