class AddAvatarAndStatusToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :avatar, :string
    add_column :users, :status, :integer, default: 0
  end
end
