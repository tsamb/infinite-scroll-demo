class CreateRandomThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.string :title
      t.string :description
    end
  end
end
