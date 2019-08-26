class CreateListingTags < ActiveRecord::Migration[5.2]
  def change
    create_table :listing_tags do |t|
      t.integer :tag_id, null: false
      t.integer :listing_id, null: false

      t.timestamps
    end
  end
end
