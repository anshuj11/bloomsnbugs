class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
