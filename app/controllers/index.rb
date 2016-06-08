get '/' do
  @things = Thing.all.limit(10)
  erb :index
end