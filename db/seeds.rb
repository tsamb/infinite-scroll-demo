require 'faker'

100.times do
  Thing.create(title: Faker::Name.title , description: Faker::Hacker.say_something_smart)
end
