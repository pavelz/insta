class AddAddressToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :address, :string
  end
end
