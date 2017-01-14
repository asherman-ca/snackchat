class AddColumnToSnacks < ActiveRecord::Migration[5.0]
  def change
    add_column :snacks, :user_id, :integer
  end
end
