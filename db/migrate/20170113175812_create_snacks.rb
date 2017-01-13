class CreateSnacks < ActiveRecord::Migration[5.0]
  def change
    create_table :snacks do |t|
      t.string :name, null: false
      t.string :picture_url
      t.string :description
      t.timestamps
    end
  end
end
