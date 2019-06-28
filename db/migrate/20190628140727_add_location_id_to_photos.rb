class AddLocationIdToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :location_id, :integer
  end
end
