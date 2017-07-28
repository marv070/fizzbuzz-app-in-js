require 'sinatra'

get'/' do
  erb :num
end

post'/numtocheck' do
  num = params[:choice]
  redirect'/'
end