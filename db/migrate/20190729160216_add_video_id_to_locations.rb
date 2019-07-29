class AddVideoIdToLocations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :video_id, :integer
  end
end
