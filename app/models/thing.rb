class Thing < ActiveRecord::Base
  def next(num_to_take)
    self.class.where("id > ?", id).limit(num_to_take)
  end
end
