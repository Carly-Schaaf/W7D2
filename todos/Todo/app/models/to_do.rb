# == Schema Information
#
# Table name: to_dos
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  body       :string           not null
#  done       :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ToDo < ApplicationRecord
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  
end
