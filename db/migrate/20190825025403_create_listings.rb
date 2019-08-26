class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps
    end
  end
end
