class Thing < ActiveRecord::Base
  def next(num_to_take)
    self.class.where("id > ?", self.id).limit(num_to_take)
  end
end
