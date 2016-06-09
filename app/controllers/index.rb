get '/' do
  @things = Thing.all.limit(10)
  erb :index
end

get '/next' do
  thing = Thing.find(params[:id])
  @things = thing.next(params[:next])
  erb :"_things", layout: false
end
